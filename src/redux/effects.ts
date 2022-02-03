import { rejects } from "assert";
import { resolve } from "path/posix";
import { AuthActionsMap, TodoActionsMap } from "./actions";
import { AuthState, Todo, User } from "./interfaces";
import { authReducer, AuthReducer, Reducer, todoReducer, TodoReducer } from "./reducers";

abstract class Effect  {
    reducer: Reducer
    constructor(reducer: Reducer){
        this.reducer = reducer
    }
    abstract on(actionName: string, payload: any): void
}

export class AuthEffect extends Effect {
    constructor(reducer: AuthReducer){
        super(reducer);
    }
    on(actionName: AuthActionsMap, payload: any): void {
        switch (actionName) {
            case "fetchUser":
            this.fetchUser().then((user: User)=> this.reducer.on("logUser", user) )  
                break;
        
            default:
                break;
        }
    }
    private async fetchUser(): Promise<User>{
        
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({name: "tester", email: "tester@gmail.com"})
            }, 800);
        })
     }
}
export class TodoEffect extends Effect {
    constructor(reducer: TodoReducer){
        super(reducer)
    }
    on(actionName: TodoActionsMap, payload: any): void {
        switch (actionName) {
            case "fetchTodo":
                this.fetchTodo().then((todo: Todo)=> this.reducer.on('addTodo', todo))
                break;
        
            default:
                break;
        }
    }
    private fetchTodo(): Promise<Todo>{
        return new Promise((resolve, rejects)=>{
            setTimeout(() => {
                resolve({description: "nouvelle todo", status: false})
            }, 800);
        })
    }
}

export const authEffect = new AuthEffect(authReducer);
export const todoEffect = new TodoEffect(todoReducer);