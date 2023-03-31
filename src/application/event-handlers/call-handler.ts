// import { Request, Response } from 'express';
// import { twilioClient } from '@infrastructure/adapters/output-adapters/twilio/twilio.client';
// import { Twilio } from 'twilio';
// import { handleIncomingCall } from '@infrastructure/adapters/output-adapters/twilio';
// import { twiml } from 'twilio';

// export const handleCall = async (
//   req: Request,
//   res: Response,
// ): Promise<void> => {
//   const twilio = twilioClient;

//   try {
//     const callSid = req.body.CallSid;
//     const callStatus = req.body.CallStatus;
//     const from = req.body.From;
//     const to = req.body.To;

//     console.log(`Incoming call from ${from} to ${to}`);

//     if (callStatus === 'ringing') {
//       const callResponse = await handleIncomingCall(new twiml.VoiceResponse());
//       await twilio.calls(callSid).update({ twiml: callResponse });
//     }

//     res.send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// };
