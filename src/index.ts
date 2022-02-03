import { ArtDecoFactory, NormalFactory } from "./abstract_factory/abstract-factory";
import { FurnitureFactory } from "./abstract_factory/interfaces";
import { ButtonCreator, LinuxButtonCreator, WindowsButtonCreator, MacOsButtonCreator } from "./factory/creators";
import { rootStore } from "./redux/global-store";
import { todoAction, authAction } from './redux/actions'
import { Todo, User } from "./redux/interfaces";
function factory(creator: ButtonCreator) {
  
   const button = creator.createButton("Submit");
   console.log(button.render());
   console.log(creator.parseButtonAttribute(button));
   
   
}

function mainFactory(os: string): void{
    if( os === "Windows"){
        console.log('App: Launched with Windows.');
        factory(new WindowsButtonCreator());
    }else if ( os === "Linux"){
        console.log('App: Launched with Linux.');
        factory(new LinuxButtonCreator());
    }else if ( os === "MacOs"){
        console.log('App: Launched with Macos');
        factory(new MacOsButtonCreator());
    }

}
mainFactory("Linux");

function abstractFactory(factory: FurnitureFactory): void {
    const chaise = factory.createChair();
    const table = factory.createTable();
    console.log('choix du client: ', `${chaise.sitWithTable(table)}` );
    
}
function mainAbstractFactory(choixClient: number): void {
    console.log("*********************");
    if(!choixClient){
        abstractFactory(new ArtDecoFactory());
    }else{
        abstractFactory(new NormalFactory());
    }
}
mainAbstractFactory(0);

function mainRedux(){
    console.log("******************************");
    const authState = rootStore.getAuthState();
    const todoState = rootStore.getTodoState();
    console.log("before action",authState);
    console.log("before action",todoState);
    const newTodo: Todo = { description: 'test', status: false }
    const user: User = { name: "tester", email: "tester@gmail.com" }
    todoAction.asyncDispatch("fetchTodo", newTodo);
    authAction.asyncDispatch("fetchUser", user);
    setTimeout(() => {
        console.log("after action",rootStore.authState);
        console.log("after action",rootStore.todoState);
        const selectUser = rootStore.authSelector('user');
        console.log("selector: ", selectUser);
    }, 900);
}
mainRedux();
