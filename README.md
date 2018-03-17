# redux-mid-async-func
## what the different between redux-thunk
Use Promise.resolve to return dispatch result.

## Which situation you need it
Imagine you have two apis. API-1 and API-2. There're no dependence between them.
```javascript
const thunk1 = (dispatch, getState) => {
  API1.fetch({data: getState().data1}).then(resp => dispatch({ type: 'API1.success', payload: resp }));
}

const thunk2 = (dispatch, getState) =>{
  API2.fetch({data: getState().data2}).then(resp => dispatch({ type: 'API2.success', payload: resp }));
}

store.dispatch(thunk1);
store.dispatch(thunk2);
```

One day, API-2 in some situation need some data depends on API-1. And some additional actions need to be dispatched after thunk1 and thunk2 finished.
With redux-thunk you don't now whether have async FUNCs been finished. So here, you may use redux-mid-async-func.

## How to use
What different with thunk is that, please ensure all the thunk FUNCs return a Promise.
```javascript
const thunk1 = async(dispatch, getState) => {
  return new Promise(r => {
    API1.fetch({data: getState().data1}).then(resp => r(dispatch({ type: 'API1.success', payload: resp })));
  });
}
const thunk2 = async(dispatch, getState) => {
  return new Promise(r => {
    API2.fetch({data: getState().data2}).then(resp => r(dispatch({ type: 'API2.success', payload: resp })));
  });
}

(async() => {
  await store.dispatch(thunk1);
  await store.dispatch(thunk2);
})();
```
