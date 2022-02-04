import { rootStore, Store } from "./global-store";
import { AppState, AuthState, KeyAuthState, KeyTodoState, TodoState } from "./interfaces";

export abstract class Selector {
    constructor(){}
    abstract selectFeature(key: string): any;
    abstract select(feature: Partial<AppState>, key: string): Object;
}

export class TodoSelector extends Selector {
    store: Store;
    constructor(store: Store){
        super()
        this.store = store
    }

    selectFeature(key: KeyTodoState): any {
        try {
            return this.store.todoState[key];
        } catch (error) {
            return {}
        }
    }
    select(feature: any, key: string): Object {
        try {
            return feature[key];
        } catch (error) {
            return {};
        }
    }
}

export class AuthSelector extends Selector {
    store: Store;
    constructor(store: Store){
        super()
        this.store = store
    }

    selectFeature(key: KeyAuthState): any {
        try {
            return this.store.authState[key]
        } catch (error) {
            return {};
        }
    }
    select(feature: any, key: string): Object {
        try {
            return feature[key];
        } catch (error) {
            return {};
        }
    }
}

export const todoSelector = new TodoSelector(rootStore);
export const authSelector = new AuthSelector(rootStore);