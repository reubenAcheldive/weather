import { on, createReducer } from '@ngrx/store';
import { IAutoComplete } from 'src/app/components/interfaces/autocomplete.model';
import { ICurrentCondition } from 'src/app/components/interfaces/currentconditions.model';
import * as weatherActions from '../actions/weather.actions';
export interface IWeather {
  autocomplete: IAutoComplete[] | [];
  currentconditions: ICurrentCondition[] | [];
}

export const initialShoppingList: IWeather | null = {
  autocomplete: [],
  currentconditions: [],
};
export const weatherReducer = createReducer(
  initialShoppingList,
  on(weatherActions.successFetchDataByCity, (state, { result }) => ({
    ...state,
    autocomplete: state.autocomplete.concat(...(result as [])),
  }))
);
