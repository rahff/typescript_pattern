
export interface AppState{
    authState: AuthState,
    todoState: TodoState
}
export type KeyAuthState = keyof AuthState;
export type KeyTodoState = keyof TodoState;
export interface AuthState {
    user: User | null,
    isLoggedIn: boolean
}
export interface User {
    name: string,
    email: string
}
export interface TodoState {
    todos: Todo[]
}
export interface Todo{
    description: string,
    status: boolean
}