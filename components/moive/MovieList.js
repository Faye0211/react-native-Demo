 // 1. 引入react核心包
 import React from 'react';
 // 2. 引入View 和 Text组件 都react-native提供的组件
 import {View,Text,FlatList,StyleSheet,Image,TouchableOpacity,ActivityIndicator} from 'react-native';

 //引入路由的包
import { Router, Scene,Actions } from 'react-native-router-flux';
 // 3. 创建并导出Home组件

 export default class User extends React.Component{
  constructor(props) {
	  super(props);
	  // 4. 定义一个用来存储电影列表的数组
	  this.state = {
        isLoaded:false,//数据还没有请求完毕
	  	movieList: [{
    "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
    },
    "genres": [
        "喜剧",
        "冒险"
    ],
    "title": "爱情公寓",
    "casts": [
        {
            "alt": "https://movie.douban.com/celebrity/1313841/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420296836.46.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420296836.46.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1420296836.46.webp"
            },
            "name": "陈赫",
            "id": "1313841"
        },
        {
            "alt": "https://movie.douban.com/celebrity/1313784/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490251985.48.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490251985.48.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1490251985.48.webp"
            },
            "name": "娄艺潇",
            "id": "1313784"
        },
        {
            "alt": "https://movie.douban.com/celebrity/1274361/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504859738.26.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504859738.26.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504859738.26.webp"
            },
            "name": "邓家佳",
            "id": "1274361"
        }
    ],
    "collect_count": 16951,
    "original_title": "爱情公寓",
    "subtype": "movie",
    "directors": [
        {
            "alt": "https://movie.douban.com/celebrity/1313918/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526270943.26.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526270943.26.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526270943.26.webp"
            },
            "name": "韦正",
            "id": "1313918"
        }
    ],
    "year": "2018",
    "images": {
        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2521648155.webp",
        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2521648155.webp",
        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2521648155.webp"
    },
    "alt": "https://movie.douban.com/subject/24852545/",
    "id": "24852545"
}]
	  }
  }
  
  // 生命周期里面请求数据
  componentWillMount(){
    var url='http://api.douban.com/v2/movie/'+this.props.movieType;
    fetch(url).then((res)=>res.json()).then((data)=>{
      this.setState({
        movieList:data.subjects,
        isLoaded:true
      })
    }).catch((err)=>{

    })
  }
  _keyExtractor(item,index){
		return index;
	}
   render(){

    if(this.state.isLoaded == false){
      return <ActivityIndicator size="large" color="#00ff00" />
  }else{
     return <View>
       <Text>我是电影列表</Text>
       <FlatList
        data={this.state.movieList}
        keyExtractor={this._keyExtractor}
        renderItem={({item,key}) => (
          <TouchableOpacity onPress={() => Actions.movieDetail({'id':item.id})}>
                           <View style = {styles.item}>                          
                                <View style = {styles.itemImage}>
                                    <Image
                                        style ={styles.image}
                                        source ={{uri:item.images.large}}/>
                                </View>
                                <View style = {styles.itemContent}>
                                    <Text style ={styles.itemHeader}  >电影名称：{item.title}</Text>
                                    <Text style ={styles.itemMeta}>电影类型: {item.genres.join('、')}</Text>
                                    <Text style ={styles.itemMeta}>电影年份：{item.year}</Text>
                                    <Text style ={styles.redText}>电影评分：{item.rating.average}</Text> 
                                </View>                             
                           </View>
                        </TouchableOpacity>
          )}
      />
     </View>
    }
   }
 }
 
const styles = StyleSheet.create({
	item:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        marginBottom:6,
        flex:1,
    },
    image: {
        height: 150,
        width: 150,
        justifyContent: 'center',
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6,
    },
    redText:{
        color:'#db2828',
	}
})