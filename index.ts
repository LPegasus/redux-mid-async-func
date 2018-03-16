export type ThunkAction = (dispatch: Function, getState: Function, extraArgument?: any) => Promise<any> | { [key: string]: any };

export interface Thunk {
  (extraArgument?: any): (store: { dispatch: any, getState: any }) => (next: (action: ThunkAction) => Promise<any>) => Promise<any>;
  withExtraArgument?: (extraArgument?: any) => (store: { dispatch: Function; getState: Function }) => (next: any) => (action: ThunkAction) => Promise<any>;
}

function createThunkMiddleware(extraArgument?: any) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return Promise.resolve<any>(action(dispatch, getState, extraArgument));
    }

    return Promise.resolve<any>(next(action));
  };
}

const thunk: Thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
