import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../shared/auth.service';

import { ErrorMessageHandler } from '../../helpers/error-handler';
/**
 * Service - ApiService
 *
 * Handles all HTTP server communication
 */
@Injectable()
export class ApiService {

  public service: any;
  constructor(
    private http: HttpClient, 
    private errorHandler: ErrorMessageHandler,
    private authenticationService: AuthService
  ) {
  }

  /**
   * Get default headers for a request
   */
  get headers() {
    if (this.authenticationService.currentUserValue) {
      var token = this.authenticationService.getToken();
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token.token,
      })
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Access-Control-Allow-Origin': '*',
      })
    }
  }

  get fileUploadHeaders() {
    var token = this.authenticationService.getToken();
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token.token,
    })
  }

  private handleError(error: HttpErrorResponse, handler: ErrorMessageHandler) {
    console.log(error , error.error)
    if (error.error instanceof ProgressEvent) {
      handler.showErrorMessage("Couldn't connect to remote server.");
    } else if (error.error) {
      if (error.error.code == 401) {
        this.authenticationService.logout()
        window.location.href = '/'
      }
      handler.showErrorMessage(error.error.error.message)
      return throwError(
        error.error.error.message
      );
    } else {
      handler.showErrorMessage(error.error.error.message)
      return throwError(
        error.error.error.message
      );
    }
    //handler.showErrorMessage('Could not connect to remote server.')
    return throwError(
      'Could not connect to remote server.'
    );
  }

  getBaseUrl(service: string) {
    return 'http://localhost:2400/api/v1/'
  }

  setService(service: string) {
    this.service = service;
  }

  get(path: string, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .get<any>(this.getBaseUrl(service) + `${path}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      ); 
  }

  put(path: string, body: Object = {}, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .put<any>(this.getBaseUrl(service) + `${path}`, JSON.stringify(body), { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      )
  }

  post(path: string, body: Object = {}, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .post<any>(this.getBaseUrl(service) + `${path}`, JSON.stringify(body), { headers: this.headers }
      )
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }

  postFormData(path: string, body: Object = {}, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .post<any>(this.getBaseUrl(service) + `${path}`, body, { headers: this.fileUploadHeaders }
      )
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }

  putFormData(path: string, body: Object = {}, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .post<any>(this.getBaseUrl(service) + `${path}`, body, { headers: this.fileUploadHeaders }
      )
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }


  putimageUpload(path: string, body: Object = {}, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .put<any>(this.getBaseUrl(service) + `${path}`, body, { headers: this.fileUploadHeaders }
      )
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }

  delete(path: string, service: string): Observable<any> {
    this.setService(service);
    return this.http
      .delete<any>(this.getBaseUrl(service) + `${path}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err, this.errorHandler))
      );
  }


}
