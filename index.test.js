const redux = require('redux');
const thunk = require('./dist/index');

const store = redux.createStore((s, action) => {
  return s;
}, {}, redux.applyMiddleware(thunk.default.withExtraArgument({ log: console.log })));

(async () => {
  await store.dispatch(async (dispatch, getState, { log }) => {
    const n = Date.now();
    log('pause');
    await new Promise(r => setTimeout(r, 2000));
    log('pause end', Date.now() - n);
  });
  await console.log('finish');
})();
