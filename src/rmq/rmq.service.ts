import { Injectable } from "@nestjs/common";
import { RmqOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class RmqService{
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [],
        queue: 'test',
        noAck,
        persistent: true,
      },
    };
  }
}