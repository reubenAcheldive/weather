import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeather } from '../store';

export const weatherSelectorFetcher =
  createFeatureSelector<IWeather>('weatherFeature');

export const autoComplete = createSelector(
  weatherSelectorFetcher,
  (state) => state?.autocomplete
);
export const currentconditions = createSelector(
  weatherSelectorFetcher,
  (state) => state?.currentconditions
);
