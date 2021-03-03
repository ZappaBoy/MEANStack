export class Entity {
  id: string;
  data: Data = new Data();
}

export class Data {
  author: string;
  date: Date = new Date();
  content: string;
  price: number = 0;
}
