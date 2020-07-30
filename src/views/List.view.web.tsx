import React, { ReactNode, Component } from "react";
import { IRListProps, IRListState,  PK } from "@mcfed/crud";
import { RListPage } from "@mcfed/crud";
import { ICarAction, IReducerState } from "../interface";
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Model from "../model";
// import { Text, View } from "../../components/Themed";
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
    const {locales,items} =this.props
    
   

    function Item({ title, calories }: any) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>
            {title} {calories} {locales("GLOBAL.NEW", { text: title })}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>1111222</Text>
        <SafeAreaView>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Item title={item.name} calories={item.calories} />
            )}
            keyExtractor={(item: any) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});