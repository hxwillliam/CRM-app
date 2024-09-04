import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../model/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayServiceService {

  holidaysUrl: string;

  constructor(private http: HttpClient) {
    this.holidaysUrl = 'http://localhost:8080/v1/api/holidays';
  }

  public getHolidays(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.holidaysUrl);
  }

  public addHoliday(holiday: Holiday, idHolidayType: number) {
    const body = { holiday, idHolidayType };
    return this.http.post<Holiday>(this.holidaysUrl, body);
  }

  public deleteHoliday(holiday: Holiday){
    const url = `${this.holidaysUrl}/${holiday.idHoliday}`; 
    return this.http.delete<void>(url)
  }

  public modifyHoliday(id:number, holiday: Holiday){
    const url = `${this.holidaysUrl}/${id}`; 
    return this.http.put<Holiday>(url,holiday)
  }

  public getHolidayById(id: number){
    const url = `${this.holidaysUrl}/${id}`;
    return this.http.get<Holiday>(url)
  }
}
