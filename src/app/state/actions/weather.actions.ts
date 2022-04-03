import { createAction, props } from '@ngrx/store';
import { IAutoComplete } from 'src/app/components/interfaces/autocomplete.model';
import { ICurrentCondition } from 'src/app/components/interfaces/currentconditions.model';

export const initFetchDataByCity = createAction(
  '[init fetch all data by city origin]',
  props<{ city: string }>()
);
export const successFetchDataByCity = createAction(
  '[Success fetch all data by city origin]',
  props<{ result:IAutoComplete[]  }>()
);
export const FailFetchDataByCity = createAction(
  '[Fail fetch all data by city origin]',
  props<{error:any }>()
);

export const fetchDetailsByKey = createAction(
  '[fetch weather  details]',
  props<{ result: ICurrentCondition[] }>()
);
