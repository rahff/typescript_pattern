import { AppState, AuthState, KeyAuthState, KeyTodoState, TodoState } from "./interfaces";


const initialAuthState: AuthState = { isLoggedIn: false, user: null };
const initialTodoState: TodoState = { todos: [] };

export class Store implements AppState {
    authState: AuthState;
    todoState: TodoState;
    constructor(){
        this.authState = initialAuthState
        this.todoState = initialTodoState
    }
    getAuthState(): AuthState {
        return this.authState;
    }
    getTodoState(): TodoState {
        return this.todoState
    }
    onAuthStateAction(newState: AuthState): void{
        this.authState = newState;
    }
    onTodoStateAction(newState: TodoState): void {
        this.todoState = newState;
    }
    authSelector(key: KeyAuthState): Partial<AuthState> {
        return this.authState[key] as Partial<AuthState>;
    }
    todoFeatureSelector(key: KeyTodoState): Partial<TodoState> {
        return this.todoState[key] as Partial<TodoState>;
    }
}
export const rootStore = new Store();

