import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ElasticsearchModule } from "@nestjs/elasticsearch";

@Module({
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        node: process.env.ELASTICSEARCH_NODE,
        auth: {
          username: process.env.ELASTICSEARCH_USERNAME,
          password: process.env.ELASTICSEARCH_PASSWORD,
        }
      }),
    })
  ],
  exports: [ElasticsearchModule]
})
export class SearchModule {}
