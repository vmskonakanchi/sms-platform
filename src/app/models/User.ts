/**
 * The user type for the firestore operations
 * which contains unique email id and smsCount of the user
 */
export interface User {
  id: string;
  name: string;
  email: string;
  smsCount: number;
}

/**
 * This is the type for registering the user
 * @default the sms count will be 10
 */
export interface UserRegisterDto {
  name: string;
  email: string;
  smsCount: number;
}

export const UserConverter = {};
