export interface Transaction {
  id: number;
  accountId: number;
  type: string;
  amount: number;
  description: string;
  date: string;
}