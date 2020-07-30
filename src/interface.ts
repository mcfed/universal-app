import { PK } from "@mcfed/crud";

export interface IModel {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface IAction {
}

export interface IReducer{
  getReducer():void
}

export interface IApi{
}

export interface IReducerState{
  page?:{
    pageSize?:number,
    total?:number,
    current?: number
  }
}

export interface ICarReducer extends IReducer {
}

export interface ICarAction extends IAction {
  fetchItem(): void;
  fetchPage(value: any): void;
  fetchSave(value: any): void;
  fetchDelete(value:any):void;
}

