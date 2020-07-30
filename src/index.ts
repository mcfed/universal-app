import router from "./router";
import CarAction from "./action";
import reducer from "./reducer";
import * as model from "./model";
import * as container from "./container";

const saga=CarAction
export { saga, reducer,router, model, container };
export default container;
