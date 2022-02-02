import { ArtDecoFactory, NormalFactory } from "./abstract_factory/abstract-factory";
import { FurnitureFactory } from "./abstract_factory/interfaces";
import { ButtonCreator, LinuxButtonCreator, WindowsButtonCreator, MacOsButtonCreator } from "./factory/creators";

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
    if(!choixClient){
        abstractFactory(new ArtDecoFactory());
    }else{
        abstractFactory(new NormalFactory());
    }
}
mainAbstractFactory(0);