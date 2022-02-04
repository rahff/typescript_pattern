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
}
export const rootStore = new Store();

