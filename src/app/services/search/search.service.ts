import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
    ) { }

  getDetailsCEP(cep: any){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
