"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
    return function (_a) {
        var dispatch = _a.dispatch, getState = _a.getState;
        return function (next) { return function (action) {
            if (typeof action === 'function') {
                return Promise.resolve(action(dispatch, getState, extraArgument));
            }
            return Promise.resolve(next(action));
        }; };
    };
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
exports.default = thunk;
