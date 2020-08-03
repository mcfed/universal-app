# universal-app

# 安装与运行

## 前置条件
- web: 运行前置条件 `node`
- ios: 运行前置条件`xcode` 、 `ios simulate` 
- android: 运行前置条件 `android simulate`
- Macos: 运行前置条件`xcode`
- Windows:  运行前置条件`.net framework c++ develop v141  vs19环境`,已集成 react-native-window ，运行环境配置太变态
- linux: 没有 react-native-linux 包。，只能采用 web+ electron

## 项目依赖

- 安装依赖 
    ```npm install```

- 运行项目
   `react-native`官方支持 `ios`、`Android` 平台启动开发环境命令`npm start`
   `react-native-(windows|macos)`非官方支持 `Windows `、`macos` 平台启动开发环境命令`npm run start:windows`或`npm run start:macos`
   `react-native-web`非官方支持 `web` 平台启动开发环境命令`npm start:web`

- 运行客户端
    + ios:```npm start && npx react-native run-ios``` 
    + android: ```npm start &&npx react-native run-android```
    + macos :```npm run start:macos && npx react-native run-macos```
    + windows :```npm run start:windows && npx react-native run-window```
    + web : ```npm run start:web && open http：//localhost:8081/index.html``` 
    + desktop : ```npm run start:desktop && open http：//localhost:8081/desktop.html``` 



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


