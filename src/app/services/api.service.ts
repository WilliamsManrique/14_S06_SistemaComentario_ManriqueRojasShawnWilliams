import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getComentarios() {
    return this.http.get<any[]>(this.URL);
  }

  crearComentario(data: any) {
    return this.http.post(this.URL, data);
  }
}
