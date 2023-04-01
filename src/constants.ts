import * as dotenv from 'dotenv';
dotenv.config();

export const APP_NAME = process.env.APP_NAME || 'twilio.ai.plactice';
export const APP_PORT = process.env.PORT || 5000;
export const APP_HOST = process.env.APP_HOST || '0.0.0.0';

export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'ACtest';
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'test';
