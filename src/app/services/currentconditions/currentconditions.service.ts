import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentCondition } from 'src/app/components/interfaces/currentconditions.model';
import { KEY } from '../key';

@Injectable({
  providedIn: 'root',
})
export class CurrentconditionsService {
  constructor(private http: HttpClient) {}
  async getConditions(key: string): Promise<Observable<ICurrentCondition>> {
    return this.http.get<ICurrentCondition>(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${KEY}`
    );
  }
}
