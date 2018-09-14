// 1. 创建一个电影详情的组件
//1.引入react的默认组件
import React from 'react'
//引入reactNative一些组件
import {View,Text,StyleSheet,Image,ActivityIndicator} from 'react-native';

//2. 创建并导出电影详情组件

export default class MovieDetail extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		isLoaded:false,
	  		movie:{
			    "rating": {
			        "max": 10,
			        "average": 6.2,
			        "stars": "35",
			        "min": 0
			    },
			    "reviews_count": 199,
			    "wish_count": 20024,
			    "douban_site": "",
			    "year": "2018",
			    "images": {
			        "small": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2530572643.webp",
			        "large": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2530572643.webp",
			        "medium": "http://img7.doubanio.com/view/photo/s_ratio_poster/public/p2530572643.webp"
			    },
			    "alt": "https://movie.douban.com/subject/26426194/",
			    "id": "26426194",
			    "mobile_url": "https://movie.douban.com/subject/26426194/mobile",
			    "title": "巨齿鲨",
			    "do_count": null,
			    "share_url": "http://m.douban.com/movie/subject/26426194",
			    "seasons_count": null,
			    "schedule_url": "https://movie.douban.com/subject/26426194/cinema/",
			    "episodes_count": null,
			    "countries": [
			        "美国",
			        "中国大陆",
			        "香港"
			    ],
			    "genres": [
			        "动作",
			        "科幻",
			        "惊悚"
			    ],
			    "collect_count": 10622,
			    "casts": [
			        {
			            "alt": "https://movie.douban.com/celebrity/1049484/",
			            "avatars": {
			                "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p424.webp",
			                "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p424.webp",
			                "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p424.webp"
			            },
			            "name": "杰森·斯坦森",
			            "id": "1049484"
			        },
			        {
			            "alt": "https://movie.douban.com/celebrity/1040990/",
			            "avatars": {
			                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37168.webp",
			                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37168.webp",
			                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37168.webp"
			            },
			            "name": "李冰冰",
			            "id": "1040990"
			        },
			        {
			            "alt": "https://movie.douban.com/celebrity/1004593/",
			            "avatars": {
			                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9747.webp",
			                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9747.webp",
			                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9747.webp"
			            },
			            "name": "雷恩·威尔森",
			            "id": "1004593"
			        },
			        {
			            "alt": "https://movie.douban.com/celebrity/1344655/",
			            "avatars": {
			                "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437836004.32.webp",
			                "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437836004.32.webp",
			                "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437836004.32.webp"
			            },
			            "name": "鲁比·罗丝",
			            "id": "1344655"
			        }
			    ],
			    "current_season": null,
			    "original_title": "The Meg",
			    "summary": "一项由中国主导的国际科研项目，正在马里亚纳海沟深处进行时，遭遇未知生物攻击，科研人员被困海底。前美国海军陆战队深海潜水专家乔纳斯·泰勒受命前往营救，再度遭遇数年前曾经在深海给自己留下终身难以磨灭记忆的史前生物巨齿鲨。乔纳斯联手科研项目中的中国女科学家张苏茵成功营救了被困人员，但营救行动却意外造成了巨齿鲨逃离深海。当史前巨兽重返浅海，人类将为自己对大自然的贪婪付出惨重的代价......",
			    "subtype": "movie",
			    "directors": [
			        {
			            "alt": "https://movie.douban.com/celebrity/1022710/",
			            "avatars": {
			                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379831737.28.webp",
			                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379831737.28.webp",
			                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1379831737.28.webp"
			            },
			            "name": "乔·德特杜巴",
			            "id": "1022710"
			        }
			    ],
			    "comments_count": 4419,
			    "ratings_count": 8504,
			    "aka": [
			        "极悍巨鲨(港)",
			        "麦格"
			    ]
			}
	  }
	}
	//组件渲染之前的函数 通常在这个函数去发送请求
	componentWillMount(){
		// 1.拼接url
		var url = 'https://api.douban.com/v2/movie/subject/'+this.props.id;
		// 2. 使用fetch根据url请求数据
		fetch(url).then((res) => res.json()).then((data) => {
				// 3. 把当前返回的数据去设置到状态 把data设置到状态的movie属性上
				this.setState({
					movie:data,
					isLoaded:true
				})
		}).catch((err) =>{})
	}
	render(){
		if(this.state.isLoaded == false){
			return <Image style={styles.movieImage} source={{uri:'http://img.zcool.cn/community/01da5f58a2cd22a801219c77708f43.gif'}}></Image>
		}else{
			return <View style={styles.movie}>
					<View style={styles.movieImage}>
						{/*图片网络地址的地址的方式已经是一个表达式了 不要再写{} 不能写成{this.state.movie.images.small}*/}
						<Image style={styles.image} source={{uri:this.state.movie.images.small}}></Image>
					</View>
					<View style={styles.movieName}>
						<Text style={styles.movieNameText}>{this.state.movie.title}</Text>
					</View>
					<View style={styles.movieCasts}>
						<Text style={styles.movieCastsTitle}>主要演员：</Text>
						<View style={styles.castsInfo}>
							{/*使用es6 map遍历来遍历数组 遍历这个电影演员数组*/}
							{this.state.movie.casts.map((item,index) => (
								<View style={styles.actor} key={index}>
									<Image style={styles.actorImage} source={{uri:item.avatars.small}}></Image>
									<Text>{item.name}</Text>
								</View>
							))}						 
						</View>
					</View>
					<View style={styles.movieSummary}>
							<Text style={styles.movieSummaryTitle}>电影简介：</Text>
							<Text style={styles.movieSummaryText}>{this.state.movie.summary}</Text>
					</View>
			</View>
		}		
	}
}


const styles = StyleSheet.create({
	//电影详情大容器
	movie:{
		//给容器设置宽度和高度
		width:'100%',
		height:'100%',
		padding:20
	},
	//电影图片容器
	movieImage:{
		//给电影的图标设置宽高
		width:'100%',
		height:200,
		//由于父元素默认是flex垂直方向布局 水平居中就要使用侧轴居中 alignItems:'center'
		alignItems:'center'
	},
	image:{
		width:200,
		height:200
	},
	//电影名称盒子
	movieName:{
		width:'100%',
		alignItems:'center'
	},
	//电影名称的文本
	movieNameText:{
		padding:10,
		fontSize:20,
		//font-weight这个600不是px不是px值的就还是带引号
		fontWeight:"600"
	},
	//所有演员盒子
	movieCasts:{},
	// 所有演员标题的文字
	movieCastsTitle:{
		fontSize:20,
		fontWeight:"600"
	},
	//演员信息
	castsInfo:{
		//设置演员信息水平排列
		flexDirection:"row",
		paddingTop:10,
		paddingBottom:10
	},
	//每个演员盒子
	actor:{
		marginLeft:5,
		marginRight:5,
		//让演员盒子侧轴居中
		alignItems:"center"
	},
	//每个演员头像
	actorImage:{
		width:100,
		height:100
	},
	//剧情简介
	movieSummary:{

	},
	//剧情简介标题文字
	movieSummaryTitle:{
		fontSize:20,
		fontWeight:"600"
	},
	movieSummaryText:{
		paddingTop:10,
		paddingBottom:10,
	}

})