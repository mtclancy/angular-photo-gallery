import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;
        const paramMap = new Map(Object.keys(route.params).map(key => [key, route.params[key]]));
        while (route.firstChild) {
          route = route.firstChild;
          Object.keys(route.params).forEach(key => paramMap.set(key, route.params[key]));
        }
        const {
          url,
          root: { queryParams },
        } = routerState;

        const params = Object.fromEntries(paramMap);

        return { url, params, queryParams };
    }
}
