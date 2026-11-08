import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  accounts: Account[] = [];

  transfer: Transfer = {
    fromAccountId: 0,
    toAccountId: 0,
    amount: 0,
    description: ''
  };

  loadingAccounts = false;
  submitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private accountService: AccountService,
    private transferService: TransferService
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.loadingAccounts = true;
    this.errorMessage = '';

    this.accountService.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
        this.loadingAccounts = false;
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
        this.errorMessage = 'Unable to load accounts.';
        this.loadingAccounts = false;
      }
    });
  }

  submitTransfer(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (
      !this.transfer.fromAccountId ||
      !this.transfer.toAccountId ||
      this.transfer.fromAccountId === this.transfer.toAccountId
    ) {
      this.errorMessage = 'Please select two different accounts.';
      return;
    }

    if (this.transfer.amount <= 0) {
      this.errorMessage = 'Transfer amount must be greater than zero.';
      return;
    }

    this.submitting = true;

    this.transferService.createTransfer(this.transfer).subscribe({
      next: () => {
        this.successMessage = 'Transfer completed successfully!';
        this.submitting = false;

        this.transfer.amount = 0;
        this.transfer.description = '';

        // Refresh balances after the transfer.
        this.loadAccounts();
      },
      error: (error) => {
        console.error('Transfer failed:', error);

        this.errorMessage =
          error.error?.message ||
          error.error ||
          'Transfer failed. Please check your account balances and try again.';

        this.submitting = false;
      }
    });
  }
}
