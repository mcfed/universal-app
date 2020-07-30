import * as Containers from "./container";

function computePath(context:String,path:String){
  return [context,path].join("/")
}

function routes(path:String): Array<any> {
  return [
    {
      path: computePath(path, ""),
      name:path,
      exact: true,
      component: Containers.ListContainer,
    },
  //   {
  //     name:[path,"add"].join("."),
  //     path: computePath(path, "add"),
  //     component: Containers.FormContainer,
  //   },
  //   {
  //     name:[path,"edit"].join("."),
  //     path: computePath(path, "edit"),
  //     component: Containers.FormContainer,
  //   },
  //   {
  //     name:[path,"detail"].join("."),
  //     path: computePath(path, "detail"),
  //     component: Containers.DetailContainer,
  //   },
  ];
}
export default routes;
