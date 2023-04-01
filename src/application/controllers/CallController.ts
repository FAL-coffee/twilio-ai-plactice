import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { LoggerService, Context } from '@domain/services/logger.service';
import { twilioClient } from '@infrastructure/adapters/output-adapters/twilio/twilio.client';
import { Twilio } from 'twilio';
import { handleIncomingCall } from '@infrastructure/adapters/output-adapters/twilio';
import { twiml } from 'twilio';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

@Controller('call')
@UseInterceptors(LoggingInterceptor)
export class CallController {
  private readonly twilioClient: Twilio;
  private Log: LoggerService = new LoggerService('createOperation');

  constructor() {
    this.twilioClient = twilioClient;
  }

  // getを定義
  @Get()
  public test(@Res() res: any) {
    console.log('Hello World!');
    res.send('Hello World!');
  }

  @Post()
  public async handleCall(@Req() req: any, @Res() res: any) {
    try {
      const callSid = req.body.CallSid;
      const callStatus = req.body.CallStatus;
      const from = req.body.From;
      const to = req.body.To;

      const context: Context = { module: 'CallController', method: 'post' };
      console.log(`Incoming call from ${from} to ${to}`);
      this.Log.logger('Hello World!', context);

      // if (callStatus === 'ringing') {
      // const twiml = await handleIncomingCall();
      // this.twilioClient.voice
      //   // await this.twilioClient.calls(callSid).update({ twiml: twiml });

      //   const callResponse = await handleIncomingCall(
      //     new twiml.VoiceResponse(),
      //   );
      //   await this.twilioClient.calls(callSid).update({ twiml: callResponse });
      // }
      const resp = new twiml.VoiceResponse();
      resp.say(
        'こんにちわ、今日の天気はとても気持ちのいい晴れです。そろそろお昼ですね。',
      );
      res.send(resp.toString());

      // res.send();
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  }
}
