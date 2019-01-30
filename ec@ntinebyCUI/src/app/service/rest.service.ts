import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Ticket } from '../class/ticket';

/* Url des Api : développement; test; production */

const dev = "http://localhost:64849/api/";
const test = "";
const prod = "";

/* Url utilisé lors du déploiement */
const url = dev;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /* File */
  GetFiles(): Observable<any> {
    return this.http.get(url + 'FileApi/GetFiles/').pipe(map(this.extractData));
  }

  GetFile(fileId: Number): Observable<any> {
    return this.http.get(url + 'FileApi/GetFile/' + fileId).pipe(map(this.extractData));
  }

  PostFile(fileId: Number): Observable<any> {
    return this.http.get(url + 'FileApi/PostFile/' + fileId).pipe(map(this.extractData));
  }

  DeleteFile(fileId: Number): Observable<any> {
    return this.http.get(url + 'FileApi/DeleteFile/' + fileId).pipe(map(this.extractData));
  }

  /* Message */
  GetMessages(): Observable<any> {
    return this.http.get(url + 'MessageApi/GetMessages/').pipe(map(this.extractData));
  }

  GetMessage(messageId: Number): Observable<any> {
    return this.http.get(url + 'MessageApi/GetMessage/' + messageId).pipe(map(this.extractData));
  }

  PostMessage(message): Observable<any> {
    return this.http.get(url + 'MessageApi/PostMessage/' + message).pipe(map(this.extractData));
  }

  GetMessagesByTicket(ticketId: Number): Observable<any> {
    return this.http.get(url + 'MessageApi/GetMessagesByTicket/' + ticketId).pipe(map(this.extractData));
  }

  /* Ticket */

  GetTickets(): Observable<any> {
    return this.http.get(url + 'TicketApi/GetTickets/').pipe(map(this.extractData));
  }

  GetTicket(ticketId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/GetTicket/' + ticketId).pipe(map(this.extractData));
  }

  GetTicketByState(stateId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/GetTicketByState/' + stateId).pipe(map(this.extractData));
  }

  ChangeTicketState(userId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/ChangeTicketState/' + userId).pipe(map(this.extractData));
  }

  PutTicket(ticketId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/GetTicket/' + ticketId).pipe(map(this.extractData));
  }

  PostTicket(ticket: Ticket): Observable<any> {
    return this.http.get(url + 'TicketApi/PutTicket/' + ticket).pipe(map(this.extractData));
  }

  DeleteTicket(ticketId : Number): Observable<any> {
    return this.http.get(url + 'TicketApi/DeleteTicket/' + ticketId).pipe(map(this.extractData));
  }

  ArchiveTicket(ticketId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/ArchiveTicket/' + ticketId).pipe(map(this.extractData));
  }

  AssignTicket(ticketId: Number): Observable<any> {
    return this.http.get(url + 'TicketApi/AssignTicket/' + ticketId).pipe(map(this.extractData));
  }  
}
