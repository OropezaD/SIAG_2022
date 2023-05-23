import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment'
import {SeguimientosSet} from "../interfaces/seguimientos.interface";

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  constructor(private http: HttpClient) {
  }

  getPost(query: string){
    return this.http.get<Array<SeguimientosSet>>(`${environment.backUrl}seguimientos`,{
      params: {query}
    });
  }

}
