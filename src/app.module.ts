import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CallController } from './application/controllers/CallController';
import { LoggerMiddleware } from './application/middlewere/logger.middlewere';
// import { TerminusModule } from '@nestjs/terminus';
// import { TerminusOptionsService } from './infrastructure/health/terminus-options.check';

// const HealthModule = TerminusModule.forRootAsync({
//   useClass: TerminusOptionsService,
// });

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
