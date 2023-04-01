import { twilioClient } from '@infrastructure/adapters/output-adapters/twilio/twilio.client';
import Twilio, { twiml } from 'twilio';

export const startIncomingCall = async (
  from: string,
  to: string,
  url: string,
): Promise<void> => {
  try {
    await twilioClient.calls.create({
      from,
      to,
      url,
    });
  } catch (err) {
    throw new Error(`Failed to start incoming call: ${err.message}`);
  }
};

export const stopIncomingCall = async (callSid: string): Promise<void> => {
  try {
    const call = await twilioClient.calls(callSid).fetch();
    await call.update({ status: 'completed' });
  } catch (err) {
    throw new Error(`Failed to stop incoming call: ${err.message}`);
  }
};

export const handleIncomingCall = async (
  request: twiml.VoiceResponse,
): Promise<string> => {
  const response = new twiml.VoiceResponse();
  response.say('Hello, World!');

  return response.toString();
};
