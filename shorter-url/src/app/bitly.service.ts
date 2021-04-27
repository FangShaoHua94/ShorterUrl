import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  token = "Bearer be06133fd13e7cc516268afdde633a291f129a60"


  constructor(private http: HttpClient) { }

  getShorterUrl(url: string) {
    // console.log(url)
    const request_url = 'https://api-ssl.bitly.com/v4/shorten'
    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json'
    })
    const body = {
      "group_guid": "Bl4r67nqWke",
      "domain": "bit.ly",
      "long_url": url
    }
    return this.http.post(request_url, body, {headers:headers})
  }
}
