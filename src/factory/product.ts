import { Button } from "./interface";

export class WindowsButton implements Button {
    body!: string;
    text: string;
    constructor(text: string){
        this.text = text
    }
    public onClick(): string {
        return 'Button windows dit: jai été cliqué'
    }
    render(): string {
        this.body = `<button data-attr='windows'>${this.text}</button>`;
       return this.body;
    }
}

export class LinuxButton implements Button {
    text: string;
    body!: string;
    constructor(text: string){
        this.text = text
    }
    public onClick(): string {
        return 'Button Linux dit: jai été cliqué'
    }
    render(): string {
        this.body = `<button data-attr='Linux'>${this.text}</button>`;
       return this.body;
    }
}
export class MacOsButton implements Button {
    text: string;
    body!: string;
    constructor(text: string){
        this.text = text
    }
    public onClick(): string {
        return 'Button MacOs dit: jai été cliqué'
    }
    render(): string {
        this.body = `<button data-attr='MacOs'>${this.text}</button>`;
       return this.body;
    }
}