import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CallController } from './application/controllers/CallController';
import { LoggerMiddleware } from './application/middlewere/logger.middlewere';

@Module({
  imports: [],
  controllers: [CallController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CallController);
  }
}
