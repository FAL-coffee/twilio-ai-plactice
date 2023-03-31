// twilio.client.tsからtwilioClientをimportする
import { twilioClient } from '@infrastructure/adapters/output-adapters/twilio/twilio.client';

export interface TwilioClient {
  answerCall(callSid: string, twiml: string): Promise<void>;
}

export function createTwilioClient(): TwilioClient {
  const client = twilioClient;

  return {
    async answerCall(callSid: string, twiml: string): Promise<void> {
      await client.calls(callSid).update({ twiml });
    },
  };
}
