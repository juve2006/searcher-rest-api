import { Module } from '@nestjs/common';
import { ParserController } from './parser.controller';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqClient } from '../rmq/rabbitmq.client';

@Module({
  imports: [ConfigModule],
  providers: [RabbitmqClient],
  controllers: [ParserController]
})
export class ParserModule {}
