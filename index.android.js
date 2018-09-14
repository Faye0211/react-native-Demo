/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// 引入底部导航菜单组件
import TabNavigator from 'react-native-tab-navigator';
//引入电影列表组件
import MovieList from './components/moive/MovieList';
// 1. 引入4个页面的组件
import Home from './components/home/Home';
// import Movie from './components/movie/Movie';
import User from './components/user/User';
import MovieDetail from './components/moive/MovieDetail';
//引入路由的包
import { Router, Scene,Actions } from 'react-native-router-flux';

export default class Demo extends Component {
    constructor(props){
      super(props)
      this.state={
          selectedTab:'首页',
      }
    }



  render() {
    return (
        <View style={styles.container} >
            {/* 路由切换 */}
            <View style={styles.routers}>
             <Router>
                <Scene key="root">
                    <Scene key="home" component={Home} title="我是首页" initial={true} />
                    <Scene key="movielist" component={MovieList} title="我是电影列表" />
                    <Scene key="user" component={User} title="我是个人中心" />
                    <Scene key="movieDetail" component={MovieDetail} title="我是电影详情" />
                </Scene>
             </Router>
            </View>





            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '首页'}
                    title="首页"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/home.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/home1.png")} />}
                    onPress={() => this.setState({ selectedTab: '首页' })}>
                    <View></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '电影'}
                    title="电影"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/cart.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/cart1.png")} />}
                    onPress={() => Actions.movielist({'movieType':'in_theaters'})}>
                    <View></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '我的'}
                    title="我的"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./images/user.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/user1.png")} />}
                    onPress={() =>Actions.user()}>
                     <View></View>
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    );
}
}

let styles = StyleSheet.create({
container: {
    flex: 1
},
routers:{
    width:'100%',
    height:'100%'
  }, 
tabText: {
    color: "#000000",
    fontSize: 13
},
selectedTabText: {
    color: "#999999",
    fontSize: 13
},
icon: {
    width: 20,
    height: 20
}
});


AppRegistry.registerComponent('Demo', () => Demo);
