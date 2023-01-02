export interface RemoveItemFromState {
  key: string;
  value: string;
}

export class HelperReducers<T extends object> {
  private map: Map<string, T> = new Map<string, T>();

  dataFilter = (payload: T[]): T[] => {
    payload.forEach((data: T): Map<string, T> | void => {
      if ('id' in data) return this.map.set(data['id'] as string, data);
      if ('name' in data) return this.map.set(data['name'] as string, data);
      if ('email' in data) return this.map.set(data['email'] as string, data);
    });

    const data: T[] = [];
    this.map.forEach((item: T) => data.push(item));
    return data;
  };

  dataRemove = (state: T[], { key, value }: RemoveItemFromState): T[] => {
    return state.filter(item => {
      return item[key] !== value;
    });
  };

  /** Append a new array of data to the state of the old array.*/
  addArray = (state: T[], { payload }: { payload: T[] }): T[] => {
    return this.dataFilter([...state, ...payload]);
  };
  /** Append a new item to the state of the old array.*/
  addOne = (state: T[], { payload }: { payload: T }): T[] => {
    return this.dataFilter([...state, payload]);
  };
  /** Add new item to the state.*/
  newItem = (_: unknown, { payload }: { payload: T }): T => payload;

  /** Remove the item from the state of the array.*/
  deleteOne = (state: T[], { payload }: { payload: RemoveItemFromState }): T[] => {
    return this.dataRemove(state, payload);
  };
}
