import { Twilio, twiml } from 'twilio';
import { IncomingCallRequest } from '@application/interfaces/incoming-call-request.interface';

export class AnswerCallUseCase {
  private readonly twilioClient: Twilio;

  constructor(twilioClient: Twilio) {
    this.twilioClient = twilioClient;
  }

  async execute(request: IncomingCallRequest): Promise<twiml.VoiceResponse> {
    // Twilioからの電話を取得
    const call = await this.twilioClient.calls(request.callSid).fetch();

    // 取得した電話に対する処理を実行
    const response = new twiml.VoiceResponse();
    response.say('Hello, World!');

    return response;
  }
}
