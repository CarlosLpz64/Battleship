import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  index(): Observable<any>{
    const url = environment.baseURL + '/sesiones';
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.get<any>(url, {headers});
  }

  crearpartida(data: any): Observable<any>{
    const url = environment.baseURL + '/sesiones';
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.post<any>(url, data, {headers});
  }

  show(id: string): Observable<any>{
    const url = environment.baseURL + '/sesiones/' + id;
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.get<any>(url, {headers});
  }

  updateList(data: any, id: string): Observable<any>{
    const url = environment.baseURL + '/sesiones/' + id;
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.put<any>(url, data, {headers});
  }

  ganador(data: any, id: string): Observable<any>{
    const url = environment.baseURL + '/ActGyE/' + id;
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.put<any>(url, data, {headers});
  }

  setInvitado(data: any, id: string): Observable<any>{
    const url = environment.baseURL + '/ActInvitado/' + id;
    const headers = { 'Authorization': ('Bearer ' + this.cookie.get("Token"))};
    return this.http.put<any>(url, data, {headers});
  }
}
