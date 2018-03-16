"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            return Promise.resolve(action(dispatch, getState, extraArgument));
        }
        return Promise.resolve(next(action));
    };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
exports.default = thunk;
