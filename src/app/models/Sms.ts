/**
 * The sms type which contain text , to , from
 * and id after sending
 */
export interface Sms {
  id: string;
  text: string;
  to: string;
  from: string;
}

/**
 * The sms sending type which contain text , to , from
 */
export interface SmsDto {
  text: string;
  to: string;
  from: string;
}

export const SmsConveter = {};
