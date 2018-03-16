export declare type ThunkAction = (dispatch: Function, getState: Function, extraArgument?: any) => Promise<any> | {
    [key: string]: any;
};
export interface Thunk {
    (extraArgument?: any): (store: {
        dispatch: any;
        getState: any;
    }) => (next: (action: ThunkAction) => Promise<any>) => Promise<any>;
    withExtraArgument?: (extraArgument?: any) => (store: {
        dispatch: Function;
        getState: Function;
    }) => (next: any) => (action: ThunkAction) => Promise<any>;
}
declare const thunk: Thunk;
export default thunk;
