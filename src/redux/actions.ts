import { authEffect, todoEffect } from "./effects";
import { authReducer, todoReducer } from "./reducers";


export type TodoActionsMap = "addTodo" | "deleteTodo" | "fetchTodo";
export type AuthActionsMap = "logUser" | "changeNameUser" | "fetchUser";

abstract class Actions {
    constructor() {}
   abstract dispatch(actionName: string, payload: any): void
   abstract asyncDispatch(actionName: string, payload: any): void
}



export class TodoAction extends Actions {

    dispatch(actionName: TodoActionsMap, payload: any): void {
        todoReducer.on(actionName, payload);
    };
    asyncDispatch(actionName: TodoActionsMap, payload: any): void {
       todoEffect.on(actionName, payload);
    }
}
export class AuthAction extends Actions {
    dispatch(actionName: AuthActionsMap, payload: any): void {
        authReducer.on(actionName, payload)
    };
    asyncDispatch(actionName: AuthActionsMap, payload: any): void {
        authEffect.on(actionName, payload);
    }
}
export const todoAction = new TodoAction();
export const authAction = new AuthAction();

