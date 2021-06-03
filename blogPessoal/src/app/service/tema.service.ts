import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{ //Tema[] traz um array de temas
    return this.http.get<Tema[]>(`${environment.server}/tema`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{ //Não precisa de um array, pois é postado um tema por vez
    return this.http.post<Tema>(`${environment.server}/tema`, tema, this.token)
  }

}
