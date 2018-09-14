 // 1. 引入react核心包
 import React from 'react';
 // 2. 引入View 和 Text组件 都react-native提供的组件
 import {View,Text} from 'react-native';
 // 3. 创建并导出Home组件

 export default class User extends React.Component{
   render(){
     return <View>
       <Text>我是个人中心</Text>
     </View>
   }
 }