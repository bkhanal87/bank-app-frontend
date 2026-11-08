import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts: Account[] = [];
  transactions: Transaction[] = [];

  loading = true;
  errorMessage = '';

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.errorMessage = '';

    this.accountService.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
        this.errorMessage = 'Unable to load account information.';
        this.loading = false;
      }
    });

    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data
          .sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 5);
      },
      error: (error) => {
        console.error('Error loading transactions:', error);
      }
    });
  }

  get totalBalance(): number {
    return this.accounts.reduce(
      (total, account) => total + account.balance,
      0
    );
  }

  getAccountNumber(accountId: number): string {
    const account = this.accounts.find(
      item => item.id === accountId
    );

    return account ? account.accountNumber : 'Unknown';
  }
}