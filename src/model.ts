import { ORMModel } from "@mcfed/core";
import { IModel } from "./interface";
import { AnyAction } from "redux";
import { SessionBoundModel} from "@mcfed/core/dist/model";

const { attr, pk, BaseModel } = ORMModel;

export const namespace = "abcd";

export default class Abcd extends BaseModel implements IModel {
  constructor(props: any) {
    super(props);
    //@ts-ignore
    this.initFields(props);
  }
  static modelName: string = namespace;
  static reducers = {
    newItem: (action: AnyAction, modelClass: any) => {
      modelClass.create(action.payload);
    },
    savePage: (action: AnyAction, modelClass: any) => {
      modelClass
        .all()
        .toModelArray()
        .forEach((model: typeof SessionBoundModel) => model.delete());
      action.payload.list.map((m: typeof SessionBoundModel) =>
        modelClass.create(m)
      );
    },
    saveList: (action: AnyAction, modelClass: any) => {
      action.payload.list.map((m: typeof SessionBoundModel) =>
        modelClass.create(m)
      );
    },
    updateItem: (action: AnyAction, modelClass: any) => {
      modelClass.withId(action.payload.id).update(action.payload);
    },
    saveItem: (action: AnyAction, modelClass: any) => {
      modelClass.upsert(action.payload);
    },
    deleteItem: (action: AnyAction, modelClass: any) => {
      const model = modelClass.withId(action.payload);
      model.delete();
    },
  };
  @pk()
  id!: number;
  @attr()
  name!: string;
  @attr()
  calories!: number;
  @attr()
  fat!: number;
  @attr()
  carbs!: number;
  @attr()
  protein!: number;

  getName() {}
}
