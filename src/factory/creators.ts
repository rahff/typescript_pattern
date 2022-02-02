import { Button } from "./interface";
import { LinuxButton, MacOsButton, WindowsButton } from "./product";


 export abstract class ButtonCreator {

    public abstract createButton(text: string): Button;

    public parseButtonAttribute(button: Button): string {
        if(button.body.split(' ')[0].length < 7){
            throw new Error("syntaxe error");
        }
       return button.body.split(' ')[1].split('=')[1].split('>')[0];
    }
}


 export class WindowsButtonCreator extends ButtonCreator {
  
    public createButton(text: string): Button {
        return new WindowsButton(text);
    }
 
}
export class LinuxButtonCreator extends ButtonCreator {
    public createButton(text: string): Button {
        return new LinuxButton(text);
    }
}
export class MacOsButtonCreator extends ButtonCreator {
    public createButton(text: string): Button {
        return new MacOsButton(text);
    }
}