 // 1. 引入react核心包
 import React from 'react';
 // 2. 引入View 和 Text组件 都react-native提供的组件
 import {View,Text,StyleSheet,Image} from 'react-native';
 // 3. 创建并导出Home组件

 export default class User extends React.Component{
   render(){
     return <View>
       <Image style ={styles.image}  source={{uri:'http://s2.sinaimg.cn/mw690/005WGySnzy74KcfZTkBe1'}} />   
     </View>
   }
 }
 const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:'100%'
  }
})