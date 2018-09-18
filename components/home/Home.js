 // 1. 引入react核心包
 import React from 'react';
 // 2. 引入View 和 Text组件 都react-native提供的组件
 import {View,Text,StyleSheet,Dimensions,Image,TouchableHighlight} from 'react-native';
 // 3. 创建并导出Home组件

 //引入路由的包
import { Router, Scene,Actions } from 'react-native-router-flux';
 //4、引入轮播图组件     
 import Swiper from 'react-native-swiper';

 let { width, height } = Dimensions.get('window');

 export default class User extends React.Component{
  render(){
		return <View style={styles.container}>
			{/*使用轮播图组件*/}
			<View style={styles.slide}>
				<Swiper
	             style={styles.swiperStyle}
	             height={150}
	             horizontal={true}
	             autolay={true}
	             loop={true}
	             paginationStyle={{ bottom: 10 }}
	             showsPagination={true}
	             index={0}
	             dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6 }}
	             activeDotStyle={{ backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6 }}>
	             <View style={styles.swiperItem}>
	                 <Image style={styles.imageStyle} resizeMode="cover" source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3648852533,2287572145&fm=26&gp=0.jpg'}}></Image>
	             </View>
	             <View style={styles.swiperItem}>
	                 <Image style={styles.imageStyle} resizeMode="cover" source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1601634630,1212134589&fm=11&gp=0.jpg'}}></Image>
	             </View>
	             <View style={styles.swiperItem}>
	                 <Image style={styles.imageStyle} resizeMode="cover" source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=951972647,681649292&fm=26&gp=0.jpg'}}></Image>
	             </View>
	             <View style={styles.swiperItem}>
	                 <Image style={styles.imageStyle} resizeMode="cover" source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1359752230,313816565&fm=26&gp=0.jpg'}}></Image>
	             </View>
	         </Swiper>
			</View>
		
      <View style={styles.tabs}>
				{/*如果要写多个类名要使用数组的方式添加*/}
				<View style={[styles.tab,styles.tabOne]} >
					<TouchableHighlight style={styles.goMovieList} underlayColor="pink" onPress={() => 
						Actions.movielist({'movieType':'in_theaters'})
					}>  
						<Text style={styles.tabContent}  >正在热映</Text>
					</TouchableHighlight>  
				</View>
				<View style={styles.tab}>
					<TouchableHighlight style={styles.goMovieList} underlayColor="pink" onPress={() =>  Actions.movielist({'movieType':'coming_soon'})}>  
						<Text style={styles.tabContent} >即将上映</Text>
					</TouchableHighlight>  
				</View>
				<View style={styles.tab}>
					<TouchableHighlight style={styles.goMovieList} underlayColor="pink" onPress={() =>  Actions.movielist({'movieType':'top250'})}>  
						<Text style={styles.tabContent} >Top250</Text>
					</TouchableHighlight>  
				</View>
			</View>
        
      <View style={styles.show}>
      <Image style={styles.imageStyles} source={{uri:'http://img5.duitang.com/uploads/blog/201405/10/20140510220310_yFHww.jpeg'}}  />
      </View>
		</View>
	}
 }
 const styles = StyleSheet.create({
  container: {
      flex: 1
  },    
  slide:{
    width:'100%',
    height:230
  },    
  swiperStyle: {
      width: width,
      height:150
  },
  swiperItem: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
  },
  goMovieList:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    //主轴是垂直的 控制主轴居中 垂直居中
    justifyContent: 'center'
  },
  imageStyle: {
      flex: 1,
      width:width,
      height:150,
  },
  tabs:{
    flex:1,
    height:50,
    //给父元素设置flex布局方向 因为react-native默认布局方向是垂直如果需要水平排列要设置row
    flexDirection:'row'
  },
  tab:{
    //子元素占父元素1份 有3个子元素就是1/3
    flex:1,
    height:50,
    //子元素的flex布局的方向为垂直方向
    flexDirection:'column',
    //次轴的居中方式 由于主轴是垂直的次轴就是水平 水平居中
    alignItems:'center',
    //主轴是垂直的 控制主轴居中 垂直居中
    justifyContent: 'center',
    backgroundColor:'yellowgreen',
    borderLeftWidth:2,
    borderLeftColor:"#fff"    	
  },
  tabOne:{
    borderLeftWidth:0
  },
  tabContent:{
    //如果要改变文字的颜色大小要给文本的组件设置样式 没有继承这一说
    fontSize:18,
    color:'#fff'
  },
  show:{
    flex: 1,
    width:'100%',
    height:150,
    marginTop:'-100%'
  }, 
  imageStyles: {
    flex: 1,
    width:'100%',
    height:150,
 },
});