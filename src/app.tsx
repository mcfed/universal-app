import React from "react";
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { StoreManager } from "@mcfed/core";
import {
  UIRouter,
  UIView,
  pushStateLocationPlugin,
  trace,
  UIRouterReact,
  ReactStateDeclaration,
} from "@uirouter/react";
import i18n from './i18n'
import * as DemoModule from ".";
import {messageMiddleware} from './redux-message'

global.API_PREFIX = "/usercenter";

const store = new StoreManager(
  createHashHistory(),
  [],
  [createLogger(),messageMiddleware]
);
store.loadRouterModule(DemoModule)

const list: ReactStateDeclaration = {
  name: "list",
  component: DemoModule.container.ListContainer,
  url: "/list",
};

const edit: ReactStateDeclaration = {
  name: "list.edit",
  component: DemoModule.container.FormContainer,
  url: "/edit",
};

const routerConfig = (router: UIRouterReact) => {
  router.urlRouter.otherwise("/home");
  trace.enable(1);
};

// const router = new UIRouterReact();
// activate plugins
// router.plugin(servicesPlugin);
// router.plugin(pushStateLocationPlugin);
// register states
// router.stateRegistry.register(list);
// router.stateRegistry.register(edit);
// start the router
function UILayout(){
  return (
    <div>
      12121
      <UIView>
        <p>Content will load here...</p>
      </UIView>
    </div>
  );
}

const App = () => (
  <Provider store={store.getStore()}>
    <I18nextProvider i18n={i18n}>
      <UIRouter plugins={[pushStateLocationPlugin]} states={[list,edit]}>
        <UILayout></UILayout>
      </UIRouter>
    </I18nextProvider>
  </Provider>
);

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
};


render(App);

// serviceWorker.unregister();
