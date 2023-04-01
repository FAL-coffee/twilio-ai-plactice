import { Controller, Post, Body, Res, UseInterceptors } from '@nestjs/common';
import { LoggerService, Context } from '@domain/services/logger.service';
import { IncomingCallRequest } from '@application/interfaces/incoming-call-request.interface';
import { handleIncomingCall } from '@infrastructure/adapters/output-adapters/twilio/twilio.call.handler';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

@Controller('call')
@UseInterceptors(LoggingInterceptor)
export class CallController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor() {}

  @Post()
  public async handleCall(
    @Body() incomingCallRequest: IncomingCallRequest,
    @Res() res: any,
  ) {
    try {
      // const callSid = req.body.CallSid;
      // const callStatus = req.body.CallStatus;
      const from = incomingCallRequest.From;
      const to = incomingCallRequest.To;

      const context: Context = { module: 'CallController', method: 'post' };
      console.log(`Incoming call from ${from} to ${to}`);
      this.Log.logger('Incoming', context);

      const callResponse = await handleIncomingCall();
      res.send(callResponse);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  }
}
