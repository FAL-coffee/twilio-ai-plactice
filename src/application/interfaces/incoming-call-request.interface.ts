export interface IncomingCallRequest {
  callSid: string;
  From: string;
  To: string;
  direction: 'inbound' | 'outbound';
  timestamp: string;
  twilioSignature: string;
  rawBody: string;
}
