import { AuthActionsMap, TodoActionsMap } from "./actions";
import { rootStore, Store } from "./global-store";
import { AppState, AuthState, Todo, TodoState } from "./interfaces";

abstract class Reducer {
    store: Store
    constructor(store: Store){
        this.store = store
    }
   abstract on(eventName: string, payload: any ): void
}

export class AuthReducer extends Reducer {
    state!: AuthState
    constructor(store: Store){
        super(store);
        this.state = this.store.authState
    }
    on(eventName: AuthActionsMap, payload: any): void {
        switch (eventName) {
            case "logUser":
                this.store.onAuthStateAction(this.logUserAction());
                break;
            case "changeNameUser":
                this.store.onAuthStateAction(this.changeNameUser(payload));
            default:
                break;
        }
    }
    private logUserAction(): AuthState {
        return {
            ...this.state,
            isLoggedIn: true
        }
    }
    private changeNameUser(newName: string): AuthState{
        return {
            ...this.state,
            user: {
                email: this.state.user?.email as string,
                name: newName
            }
        }
    }
}
export class TodoReducer extends Reducer {
    state: TodoState
    constructor(store: Store){
        super(store);
        this.state = this.store.todoState
    }
    on(eventName: TodoActionsMap, payload: any): void {
        switch (eventName) {
            case "addTodo":
            this.store.onTodoStateAction(this.addTodoAction(payload))    
                break;
                case "deleteTodo":
                    this.store.onTodoStateAction(this.deleteTodoAction(payload))    
                        break;
            default:
                break;
        }
    } 
    private addTodoAction(todo: Todo): TodoState {
        return {
            ...this.state,
            todos: [...this.state.todos, todo]
        }
    }
    private deleteTodoAction(todo: Todo): TodoState {
        return {
            ...this.state,
            todos: this.state.todos.filter((t: Todo)=> t !== todo)
        }
    }
}
export const todoReducer = new TodoReducer(rootStore);
export const authReducer = new AuthReducer(rootStore);