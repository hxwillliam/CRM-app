import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayType } from '../model/holiday-type';

@Injectable({
  providedIn: 'root'
})
export class HolidayTypeServiceService {

  holidayUrl: string;

  constructor(private http: HttpClient) {
    this.holidayUrl = 'http://localhost:8080/v1/api/holidayType';
  }

  public getHolidayTypes(): Observable<HolidayType[]> {
    return this.http.get<HolidayType[]>(this.holidayUrl);
  }

  public addHolidayType(user: HolidayType) {
    return this.http.post<HolidayType>(this.holidayUrl, HolidayType);
  }

  public deleteHolidayType(holidayType: HolidayType){
    const url = `${this.holidayUrl}/${holidayType.idHolidayType}`; 
    return this.http.delete<void>(url)
  }

  public modifyHolidayType(id:number, holiday: HolidayType){
    const url = `${this.holidayUrl}/${id}`; 
    return this.http.put<HolidayType>(url,holiday)
  }
}
