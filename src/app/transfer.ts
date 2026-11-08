export interface Transfer {
  id?: number;
  fromAccountId: number;
  toAccountId: number;
  amount: number;
  description: string;
  date?: string;
}