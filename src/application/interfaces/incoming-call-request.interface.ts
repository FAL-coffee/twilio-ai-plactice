export interface IncomingCallRequest {
  callSid: string;
  from: string;
  to: string;
  direction: 'inbound' | 'outbound';
  timestamp: string;
  twilioSignature: string;
  rawBody: string;
}
