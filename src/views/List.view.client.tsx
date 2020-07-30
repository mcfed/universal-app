import React, { ReactNode, Component } from "react";
import { IRListProps, IRListState,  PK } from "@mcfed/crud";
import { RListPage } from "@mcfed/crud";
import {ButtonGroups, DataTable, Panel} from '@mcfed/components';
import { ICarAction, IReducerState } from "../interface";
import Model from "../model";
import { I18nProps } from "../i18n";

export interface ListProps<M> extends IRListProps, I18nProps {
  actions: ICarAction;
  reducer: IReducerState;
  locales: Function;
  items: M[];
  item: M;
  dicts: any;
}

interface ListState<M> extends IRListState {}
export default class ListView<M extends Model> extends RListPage<
  ListProps<M>,
  ListState<M>
> {
  mergeTableConfig(config: any): Object {
    return config;
  }
  viewMount(): void {
    this.handleFilter(this.searchParams());
  }
  handleFilter(value: Object) {
    const {
      actions,
      match: { params },
    } = this.props;
    actions.fetchPage(Object.assign({}, value, params));
  }
  searchParams(): object {
    // const { actions, querys } = this.props;
    const defaultParams: Object = {};

    return Object.assign(defaultParams);
  }
  handlerMenu(rowkeys: PK | PK[], actionType: string): void {
    const { actions } = this.props;
    if (actionType === "add") {
      this.goAdd();
    } else if (actionType === "edit") {
      this.goEdit(rowkeys as PK);
    } else if (actionType === "detail") {
      this.goDetail(rowkeys as PK);
    } else if (actionType === "delete") {
      actions.fetchDelete(rowkeys);
    }
    this.clearSelectRows();
  }
  renderOptionItem(item: { label: string; value: string }, idx: PK): ReactNode {

    return null;
  }
  renderSearchForm(): ReactNode {
   
    return null;
  }
  render(): ReactNode {
    const {reducer, items, locale} = this.props;
    let tableConf: TableProps<M> = {
      rowKey: 'id',
      dataSource: items,
      columns: [
        {
          title:  'calories' ,
          key: 'calories',
          dataIndex: 'calories'
        },
        {
          title: 'title' ,
          key: 'title',
          dataIndex: 'title'
        },
        {
          title: locale('GLOBAL.COLUMNS.OPTIONS'),
          key: 'appIndex',
          dataIndex: 'appIndex',
          width: 190,
        }
      ]
    };

    return (
      <DataTable
        {...this.mergeTableConfig(tableConf)}
        rowSelection={null}
        page={reducer.page}
      />
    );
    
  }
}
