/**
 * The transcation type for the stripe's payment integration
 * we will be having stripe payment integration
 */
export interface Transaction {
  id: string;
  createdAt: Date;
  amount: number;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
}

/**
 * The transcation type for the stripe's payment integration
 * we will be having stripe payment integration
 */
export interface TransactionDto {
  createdAt: Date;
  amount: number;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
}

export const TransactionConveter = {};
