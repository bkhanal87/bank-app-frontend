import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private baseUrl = 'http://localhost:8080/transfers';

  constructor(private http: HttpClient) {}

  createTransfer(transfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(this.baseUrl, transfer);
  }
}