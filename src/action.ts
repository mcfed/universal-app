import { InjectFactory, Middleware } from "@mcfed/core";
import Api from "./api";
import Reducer from "./reducer";
import { ICarAction } from "./interface";

// console.log("Middleware", Middleware.MiddlewareFactory);
const { MiddlewareFactory } = Middleware;
const { Injectable } = InjectFactory;
// const { param, loading } = Decorator;

@Injectable
export default class CarAction implements ICarAction {
  constructor(
    public readonly reducer: Reducer,
    public readonly api: Api,
    //@ts-ignore
    public readonly middleware: MiddlewareFactory
  ) {
    // super(reducer, api, middleware);
    // this.api  = new Api()
    // this.reducer = new Reducer()
    // this.middleware = new MiddlewareFactory()
  }
  async fetchDelete(value: any) {}
  async fetchSave(value: any) {}
  async fetchPage(value: any) {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "First Item",
        calories: 300,
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Second Item",
        calories: 300,
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Third Item",
        calories: 300,
      },
    ];
    // console.log("reducer",this.reducer);
    this.reducer.saveList({ list: DATA });
  }
  async fetchItem() {}
}
