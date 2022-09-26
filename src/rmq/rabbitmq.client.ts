import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class RabbitmqClient {
  getParseInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${process.env.RMQ_USER}:${process.env.RMQ_PASSWORD}@${process.env.RMQ_HOST}`,
        ],
        noAck: false,
        queue: process.env.RMQ_QUEUE_NAME,
        queueOptions: {
          durable: true,
        },
      },
    });
  }
}