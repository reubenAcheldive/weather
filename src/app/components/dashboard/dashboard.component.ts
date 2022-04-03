import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutocompleteSearchService } from 'src/app/services/autocomplete-search/autocomplete-search.service';
import { initFetchDataByCity } from 'src/app/state/actions/weather.actions';
import { autoComplete } from '../../../app/state/reducers/weather-selctore';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initFetchDataByCity({ city: '' }));
    this.store.select(autoComplete).subscribe((data) => console.log(data));
  }
}
