import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmAsyncConfig } from "./database/config/typeorm.config";
import { SearchModule } from './search/search.module';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  SearchModule,
  ParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
