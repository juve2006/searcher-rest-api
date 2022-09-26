import { BadGatewayException, Body, Controller, Get, Logger, Post, Render } from '@nestjs/common';
import { RabbitmqClient } from '../rmq/rabbitmq.client';
import { AddUrlDto } from './dto/add-url.dto';
import { lastValueFrom } from 'rxjs';

@Controller('websites')
export class ParserController {
  private logger = new Logger(ParserController.name);

  constructor(private readonly clientProxyRMQ: RabbitmqClient) {}

  private clientTask = this.clientProxyRMQ.getParseInstance();

  @Get()
  @Render('websites')
  getForm(): void {
    return;
  }

  @Post()
  async scrape(@Body() url: AddUrlDto) {
    try {
      const content = await this.clientTask.emit("parse", url);
      console.log(content);
    } catch (error) {
      this.logger.error(error);
      if (error) {
        throw new BadGatewayException(
          "Oops! We have one connection problem. Sorry for that"
        );
      }
    }
  }
}
