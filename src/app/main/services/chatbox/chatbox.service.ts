import { HttpClient, HttpResponse } from '@angular/common/http';
import { HtmlParser, XmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {

  constructor(private httpClient: HttpClient) { }

  // Get Message List menu items
  public getMessageList(MenuId: string): Observable<any> {
     return this.httpClient.get('./assets/json/chatbox.json');
    // return this.httpClient.get("https://luakktbcqh.execute-api.us-east-1.amazonaws.com/dev/chatops", { responseType: 'text' });
  }

}
