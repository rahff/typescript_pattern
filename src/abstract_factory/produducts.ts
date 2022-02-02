import { Chair, Table } from "./interfaces";

export class ChairArtDeco implements Chair {
  public sitDown(): string {
    return "I'm sit on my art deco chair";
  }
  public sitWithTable(table: Table): string{
    return `I'm sit on my art deco chair and I ${table.putOn()}`;
  };
}
export class ChairNormal implements Chair {
    public sitDown(): string {
      return "I'm sit on my normal chair";
    }
    public sitWithTable(table: Table): string{
      return `I'm sit on my normal chair and I ${table.putOn()}`;
    };
}
export class TableArtDeco implements Table {
    public putOn(): string{
        return 'put something on my art deco table'
    }
    public sitWith(chair: Chair): string{
        return `${chair.sitDown()} with my art deco table`;
    };
  }
  export class TableNormal implements Table {
    public putOn(): string{
        return 'put something on my normal table'
    }
    public sitWith(chair: Chair): string{
        return `${chair.sitDown()} with my normal table`;
    };
  }
    
  