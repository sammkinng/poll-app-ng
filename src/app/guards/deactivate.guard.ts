import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

export const deactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
