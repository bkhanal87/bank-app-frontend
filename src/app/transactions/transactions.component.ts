import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  accounts: Account[] = [];
  transactions: Transaction[] = [];

  selectedAccountId = 0;

  loading = false;
  errorMessage = '';

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
    this.loadTransactions();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
        this.errorMessage = 'Unable to load accounts.';
      }
    });
  }

  loadTransactions(): void {
    this.loading = true;
    this.errorMessage = '';

    const request = this.selectedAccountId === 0
      ? this.transactionService.getTransactions()
      : this.transactionService.getTransactionsByAccountId(
          this.selectedAccountId
        );

    request.subscribe({
      next: (data) => {
        this.transactions = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading transactions:', error);
        this.errorMessage = 'Unable to load transactions. Please try again.';
        this.loading = false;
      }
    });
  }

  onAccountChange(): void {
    this.loadTransactions();
  }

  getAccountNumber(accountId: number): string {
    const account = this.accounts.find(
      item => item.id === accountId
    );

    return account ? account.accountNumber : 'Unknown account';
  }
}
