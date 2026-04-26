import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({ providedIn: 'root' })
export class Api {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  get<T>(path: string, params?: Record<string, string | number | boolean>): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, {
      params: this.toHttpParams(params),
    });
  }

  post<TResponse, TBody>(path: string, body: TBody): Observable<TResponse> {
    return this.http.post<TResponse>(`${this.baseUrl}/${path}`, body);
  }

  put<TResponse, TBody>(path: string, body: TBody): Observable<TResponse> {
    return this.http.put<TResponse>(`${this.baseUrl}/${path}`, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`);
  }

  private toHttpParams(params?: Record<string, string | number | boolean>): HttpParams | undefined {
    if (!params) return undefined;
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return httpParams;
  }
}