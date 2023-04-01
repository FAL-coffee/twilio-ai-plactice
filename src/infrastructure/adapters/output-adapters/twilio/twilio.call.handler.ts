import { twiml } from 'twilio';

export const handleIncomingCall = async (): Promise<string> => {
  const response = new twiml.VoiceResponse();
  response.say('Hello, World!');

  return response.toString();
};
