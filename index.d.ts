export interface Thunk {
    (extraArgument?: any): (store: {
        dispatch: any;
        getState: any;
    }) => (next: (action: any) => Promise<any>) => Promise<any>;
    withExtraArgument?: (extraArgument?: any) => (store: {
        dispatch: Function;
        getState: Function;
    }) => (next: any) => (action: any) => Promise<any>;
}
declare const thunk: Thunk;
export default thunk;
