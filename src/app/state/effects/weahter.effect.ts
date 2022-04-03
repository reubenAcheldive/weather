import { Injectable } from '@angular/core';
import { createEffect, Effect, Actions, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { exhaustMap, Observable, map, catchError, of } from 'rxjs';
import { AutocompleteSearchService } from 'src/app/services/autocomplete-search/autocomplete-search.service';
import {
  successFetchDataByCity,
  fetchDetailsByKey,
  FailFetchDataByCity,
  initFetchDataByCity,
} from '../actions/weather.actions';
@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private autocompleteService: AutocompleteSearchService
  ) {}

  autoComplete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initFetchDataByCity),
      exhaustMap(({ city }) => {
        return this.autocompleteService.AutoComplete(city).pipe(
          map((action) => {
              console.log(action);
              
            return successFetchDataByCity({ result: action });
          }),
          catchError((error) => of(FailFetchDataByCity({ error })))
        );
      })
    );
  });
}
