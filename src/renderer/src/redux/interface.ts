export interface List {
  skip?: number;
  limit?: number;
}

export interface BaseOperations<Update, Create> {
  update?: (body: Update) => Promise<void>;
  create?: (body: Create) => Promise<void>;
  list?: (body?: List) => Promise<void>;
  get?: (data: { id: string }) => Promise<void>;
  remove?: (data: { id: string }) => Promise<void>;
}
