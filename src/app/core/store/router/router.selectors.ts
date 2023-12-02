import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';

export const selectRouter =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectRouterState = createSelector(
  selectRouter,
  (router) => router.state
);

export const selectRouteParams = createSelector(
  selectRouterState,
  (routerState) => routerState.params
);

export const selectQueryParams = createSelector(
  selectRouterState,
  (routerState) => routerState.queryParams
);
