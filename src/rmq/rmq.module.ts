import { Module } from '@nestjs/common';
import { RabbitmqClient } from './rabbitmq.client';

@Module({
  providers: [RabbitmqClient],
  exports: [RabbitmqClient]
})
export class RmqModule{}