import { AuthState, Todo, TodoState } from "./interfaces";
import { authReducer, todoReducer } from "./reducers";


export type TodoActionsMap = "addTodo" | "deleteTodo";
export type AuthActionsMap = "logUser" | "changeNameUser";

abstract class Actions {
    constructor() {}
   abstract dispatch(actionName: string, payload: any): void
}



export class TodoAction extends Actions {

    dispatch(actionName: TodoActionsMap, payload: any) {
        todoReducer.on(actionName, payload)
    };
}
export class AuthAction extends Actions {
    dispatch(actionName: AuthActionsMap, payload: any) {
        authReducer.on(actionName, payload)
    };
}
export const todoAction = new TodoAction();
export const authAction = new AuthAction();

