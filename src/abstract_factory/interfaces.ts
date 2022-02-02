export interface FurnitureFactory {
    createChair(): Chair;

    createTable(): Table;
}
export interface Chair {
    sitDown: ()=> string;
    sitWithTable: (table: Table)=> string;
}
export interface Table {
    putOn: ()=> string;
    sitWith: (chair: Chair)=> string;
}