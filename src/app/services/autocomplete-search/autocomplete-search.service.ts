import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { IAutoComplete } from 'src/app/components/interfaces/autocomplete.model';
import { KEY } from '../key';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteSearchService {
  constructor(private http: HttpClient) {}

  AutoComplete(city: string): Observable<IAutoComplete[]> {
    // return this.http.get<IAutoComplete>(
    //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${KEY}&q=${city}`);
    return this.http.get<IAutoComplete[]>(
      '../../../assets/jsonFiles/autocomplete.json'
    );
  }
}
