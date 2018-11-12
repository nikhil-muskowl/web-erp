import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public responseData: any;
  private url;
  constructor(
    public http: HttpClient,
    private configService: ConfigService
  ) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  list() {
    this.url = this.configService.url + 'leave_managment_module/api/holidays_api';
    this.formData.append('language_id', '1');
    return this.http.post(this.url, this.formData, { headers: this.headers });
  }

}
