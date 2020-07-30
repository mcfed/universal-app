# universal-app

# 安装与运行

## 前置条件
- web: 运行前置条件 `node`
- ios: 运行前置条件`xcode` 、 `ios simlate` 
- android: 运行前置条件 `android simlate`
- Macos: 运行前置条件`xcode`
- Windows:  运行前置条件`.net framework`,没有平台环境，没有集成 react-native-window 包
- linux: 没有 react-native-linux 包。，只能采用 web+ electron

## 项目依赖

- 安装依赖 
    ```npm install```

- 运行项目
    ```npm start ```
- 运行客户端
    + ios:```npx react-native run-ios``` 
    + android: ```npmx react-native run-android```
    + macos :```npx react-native run-macos```
    + windows :```npx react-native run-window```
    + web : ```npm run start:web && open http：//localhost:8081/index.html``` 






# 目录结构


```
├── App.tsx                 // 应用主体框架
├── README.md
├── __tests__
├── android                 //android 项目目录
├── app.json
├── babel.config.js         // babel config
├── client.html             // client 页面入口
├── index.client.js  
├── index.html              //  web 页面入口
├── index.js
├── index.web.js
├── ios                     // iOS项目目录
├── macos                   // Mac项目目录
├── metro.config.client.js  //Metro 配置文件
├── metro.config.js
├── metro.config.macos.js
├── metro.config.web.js
├── package.json
├── react-native.config.js  //react-native配置
├── src                     //src 源码
├── tsconfig.json           //ts-config
├── yarn-error.log
└── yarn.lock
```


