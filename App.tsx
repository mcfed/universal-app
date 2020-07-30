/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from "react-redux";
import { StoreManager } from "@mcfed/core";
// @ts-ignore
import { createMemoryHistory } from "history";
import * as DemoModule from "./src";

// @ts-ignore
const store = new StoreManager(createMemoryHistory(), [], []);
// @ts-ignore
const ListContainer = store.loadRouterModule(DemoModule).ListContainer

const App= () => {
  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
  //         <View style={styles.body}>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step One</Text>
  //             <Text style={styles.sectionDescription}>
  //               Edit <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>See Your Changes</Text>
  //             <Text style={styles.sectionDescription}>
  //               <ReloadInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Debug</Text>
  //             <Text style={styles.sectionDescription}>
  //               <DebugInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Learn More</Text>
  //             <Text style={styles.sectionDescription}>
  //               Read the docs to discover what to do next:
  //             </Text>
  //           </View>
  //           <LearnMoreLinks />
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );
  return (<Provider store={store.getStore()}>
      <ListContainer></ListContainer>
  </Provider>)
};

export default App;
