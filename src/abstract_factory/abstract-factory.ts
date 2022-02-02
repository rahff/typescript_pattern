import { Chair, FurnitureFactory, Table } from "./interfaces";
import {
  ChairArtDeco,
  ChairNormal,
  TableArtDeco,
  TableNormal,
} from "./produducts";

export class ArtDecoFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ChairArtDeco();
  }
  public createTable(): Table {
    return new TableArtDeco();
  }
}

export class NormalFactory implements FurnitureFactory {
  public createChair(): Chair {
    return new ChairNormal();
  }
  public createTable(): Table {
    return new TableNormal();
  }
}
