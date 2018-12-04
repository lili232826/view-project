window.onresize = function(){
	bjMap.resize();
	}
var beijing = "data/beijing.json";
var zhongguo = "data/china.json";
var hebei = "data/map/data-hebei.json";
var tianjin = "data/map/data-tianjin.json";
var hainan = "data/data-hainan.json";
var xizang = "data/data-xizang.json";
var zhejiang = "data/data-zhejiang.json";
var yunnan = "data/data-yunnan.json";
var xinjiang = "data/data-xinjiang.json";
var sichuan = "/asset/get/s/data-1528970319531-Hy_8n3y-m.json";
var shanxi = "/asset/get/s/data-1528970298351-HyzB32JZ7.json";
var shangxi = "/asset/get/s/data-1528970273819-B1cmnnk-Q.json";
var shanghai = "/asset/get/s/data-1528970254015-HJLfhnyWX.json";
var shangdong = "/asset/get/s/data-1528970240242-Byu-hhybX.json";
var qinghai = "/asset/get/s/data-1528970209434-Bytyh3kZ7.json";
var ningxia = "/asset/get/s/data-1528970150882-SJJ2j2yWQ.json";
var neimenggu = "/asset/get/s/data-1528970102554-HyJKo31bQ.json";
var liaoning = "/asset/get/s/data-1528970052404-BJhHihkbQ.json";
var jilin = "/asset/get/s/data-1528970024458-rkeEjhy-Q.json";
var jiangxi = "/asset/get/s/data-1528969991368-BkkMi31Zm.json";
var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
var hunan = "/asset/get/s/data-1528969831328-Sykuqh1bX.json";
var hubei = "data/data-hubei.json";
var henan = "/asset/get/s/data-1528969802719-HyXIqhk-m.json";
var heilongjiang = "/asset/get/s/data-1528969789631-ryLHcnJbm.json";
var guizhou = "/asset/get/s/data-1528969712502-Hy_g92yZQ.json";
var guangxi = "/asset/get/s/data-1528969706270-HJMg5hkWQ.json";
var guangdong = "/asset/get/s/data-1528969700634-BkT1qn1WQ.json";
var gansu = "/asset/get/s/data-1528969694316-BJLkc2yZX.json";
var chongqing = "/asset/get/s/data-1528969687660-r1ey9nkbX.json";
var aomen = "/asset/get/s/data-1528969612486-rJ4qtnyZm.json";
var anhui = "/asset/get/s/data-1528969607452-Hkk5tnJ-Q.json";
var fujian = "/asset/get/s/data-1528969599839-S1OFFn1ZQ.json";
var xianggang = "/asset/get/s/data-1528969589857-S1ROthJWm.json";
var type=0;
var fleg=true;//首次北京点击的初始化一次
var myChart=echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));
    var curGeoJson = {};
    var cityMap = {
    		'中国': zhongguo,
    		'上海': shanghai,
    		'河北': hebei,
    		'山西': shangxi,
    		'内蒙古': neimenggu,
    		'辽宁': liaoning,
    		'吉林': jilin,
    		'黑龙江': heilongjiang,
    		'江苏': jiangsu,
    		'浙江': zhejiang,
    		'安徽': anhui,
    		'福建': fujian,
    		'江西': jiangxi,
    		'山东': shangdong,
    		'河南': henan,
    		'湖北': hubei,
    		'湖南': hunan,
    		'广东': guangdong,
    		'广西': guangxi,
    		'海南': hainan,
    		'四川': sichuan,
    		'贵州': guizhou,
    		'云南': yunnan,
    		'西藏': xizang,
    		'陕西': shanxi,
    		'甘肃': gansu,
    		'青海': qinghai,
    		'宁夏': ningxia,
    		'新疆': xinjiang,
    		'北京': beijing,
    		'天津': tianjin,
    		'重庆': chongqing,
    		'香港': xianggang,
    		'澳门': aomen
    };
    var geoCoordMap = {
        '东城': [116.418757,39.917544],
        '西城': [116.366794, 39.915309],
        '丰台': [116.286968, 39.863642],
        '朝阳': [116.4977, 39.949],
        '石景山': [116.195445, 39.914601],
        '海淀': [116.2202, 40.0239],
        '房山': [115.8453, 39.7163],
        '通州': [116.7297, 39.8131],
				'大兴': [116.4716, 39.6352],
				//写字楼
				"金泰国际大厦":[116.506746,39.900005],
				"金泰大厦":[116.44003,39.965995],
				"金泰国益大厦":[116.523164,39.930134],
				"金泰富地大厦":[116.322132,40.048784],
				"CBD国际大厦":[116.458574,39.910374],
				//高档小区  
				"金泰城·丽湾小区":[116.349882,39.87495],
				"新天第小区":[116.38802,39.841148],
				"金泰先锋":[116.506385,39.902333],
				//工业园区
				"中国移动北京基地":[116.113546,39.939849],
				//办公楼
				"京煤集团办公楼":[116.579221,39.953075],
				"中国移动(美惠大厦)":[116.443748,39.936063],
				"金泰集团办公楼":[116.362555,39.894275],
				//学校
				"北京工商大学(良乡校区)":[116.173806,39.72606],
				//商业
				"北京麦当劳食品有限公司":[116.418077,39.920759],
				//医院、园林绿化
				"天坛公园":[116.417246,39.888243],
				"北京东苑中医医院":[116.447763,40.03995]
    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',//写字楼
        '2': 'rgba(255, 235, 59, .7)',//高档小区
        '3': 'rgba(147, 235, 248, .8)',//工业园区
				"4":"rgba(73, 205, 69, .8)",//办公楼
				"5":"rgba(243, 70, 250, .8)",//学校
				"6":"rgba(38, 85, 246, .8)",//商业
				"7":"rgba(250, 89, 22, .8)"//医院、园林绿化
    };
		var levelName = {
			'1': '写字楼',//
			'2': '高档小区',//
			'3': '工业园区',//
			'4':"办公楼",
			"5":"学校",
			"6":"商业",
			"7":"医院、园林绿化 ",
		};
		var defaultOpt = {
			mapName: 'beijing',     // 地图展示
			goDown: false,        // 是否下钻
			bgColor: '#404a59',   // 画布背景色
					activeArea: [],       // 区域高亮,同echarts配置项
					data: [],
					// 下钻回调(点击的地图名、实例对象option、实例对象)
					callback: function(name, option, instance){}
		};
		if(opt) opt = this.util.extend(defaultOpt, opt);
	
		// 层级索引
		var name = [opt.mapName];
		var idx = 0;
		var pos = {
			leftPlus: 115,
			leftCur: 150,
			left: 198,
			top: 50
		};
    
		var line = [[0, 0], [8, 11], [0, 22]];
			// style
		var style = {
			font: '18px "Microsoft YaHei", sans-serif',
			textColor: '#eee',
			lineColor: "rgba(0,114,219,0.9)",//'rgba(147, 235, 248, .8)'
		};

    var handleEvents = {
        /**
				 * i 实例对象
				 * o option
				 * n 地图名
				 **/
				resetOption: function(i, o, n) {
					var breadcrumb = this.createBreadcrumb(n);
					var j = name.indexOf(n);
					console.log(o,"0000")
					var l = o.graphic.length;
					
					if (j < 0) {
							//o.graphic.push(breadcrumb);
							//o.graphic[0].children[0].shape.x2 = 145;
							//o.graphic[0].children[1].shape.x2 = 145;
							if (o.graphic.length > 2) {
									var cityData = [];
									var cityJson;
									for (var x = 0; x < opt.data.length; x++) {
											if(n === opt.data[x].city){
													$([opt.data[x]]).each(function(index,data){
															cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
															cityData.push(cityJson)
													}) 
											}
									}   
									if(cityData!=null){
											o.series[0].data = handleEvents.initSeriesData(cityData);
									}else{
											o.series[0].data = [];
									}
									
									
							}
							name.push(n);
							idx++;
					} else {
							o.graphic.splice(j + 2, l);
							if (o.graphic.length <= 2) {
									o.graphic[0].children[0].shape.x2 = 60;
									o.graphic[0].children[1].shape.x2 = 60;
									o.series[0].data = handleEvents.initSeriesData(opt.data);
							};
							name.splice(j + 1, l);
							idx = j;
							pos.leftCur -= pos.leftPlus * (l - j - 1);
					};

					o.geo.map = n;
					o.geo.zoom = 0.4;
					i.clear();
					i.setOption(o);
					this.zoomAnimation();
					opt.callback(n, o, i);
			},
        /**
				 * name 地图名
				 **/
				createBreadcrumb: function(name) {
						var cityToPinyin = {
								'中国': 'zhongguo',
								'上海': 'shanghai',
								'河北': 'hebei',
								'山西': 'shangxi',
								'内蒙古': 'neimenggu',
								'辽宁': 'liaoning',
								'吉林': 'jilin',
								'黑龙江': 'heilongjiang',
								'江苏': 'jiangsu',
								'浙江': 'zhejiang',
								'安徽': 'anhui',
								'福建': 'fujian',
								'江西': 'jiangxi',
								'山东': 'shangdong',
								'河南': 'henan',
								'湖北': 'hubei',
								'湖南': 'hunan',
								'广东': 'guangdong',
								'广西': 'guangxi',
								'海南': 'hainan',
								'四川': 'sichuan',
								'贵州': 'guizhou',
								'云南': 'yunnan',
								'西藏': 'xizang',
								'陕西': 'shanxi',
								'甘肃': 'gansu',
								'青海': 'qinghai',
								'宁夏': 'ningxia',
								'新疆': 'xinjiang',
								'北京': 'beijing',
								'天津': 'tianjin',
								'重庆': 'chongqing',
								'香港': 'xianggang',
								'澳门': 'aomen'
						};
						var breadcrumb = {
								type: 'group',
								id: name,
								left: pos.leftCur + pos.leftPlus,
								top: pos.top + 3,
								children: [{
										type: 'polyline',
										left: -90,
										top: -5,
										shape: {
												points: line
										},
										style: {
												stroke: '#fff',
												key: name
												// lineWidth: 2,
										},
										onclick: function() {
												var name = this.style.key;
												handleEvents.resetOption(chart, option, name);
										}
								}, {
										type: 'text',
										left: -68,
										top: 'middle',
										style: {
												text: name,
												textAlign: 'center',
												fill: style.textColor,
												font: style.font
										},
										onclick: function() {
												var name = this.style.text;
												handleEvents.resetOption(chart, option, name);
										}
								}, {
										type: 'text',
										left: -68,
										top: 10,
										style: {
												name: name,
												text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
												textAlign: 'center',
												fill: style.textColor,
												font: '12px "Microsoft YaHei", sans-serif',
										},
										onclick: function() {
												// console.log(this.style);
												var name = this.style.name;
												handleEvents.resetOption(chart, option, name);
										}
								}]
						}

						pos.leftCur += pos.leftPlus;

						return breadcrumb;
				},
        
        // 设置effectscatter
        initSeriesData: function(data){
            var temp = [];
            for(var i = 0;i < data.length;i++){
                var geoCoord = geoCoordMap[data[i].name];
                if(geoCoord){
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            };
            return temp;
        },

        zoomAnimation: function(){
            var count = null;
            var zoom = function(per){
                if(!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if(count < 1) window.requestAnimationFrame(function(){
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function(){
                zoom(0.2);
            });
        }
    };
	
		var max = 38,
			min = 2; // todo 
		var maxSize4Pin = 100,
			minSize4Pin = 20;
			var convertData = function(data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value),
						//value: data[i].value,
						//visualMap: false
					});
				}
			}
		//console.log(res,"res");
		return res;
	};
    var option = {
    	//backgroundColor: opt.bgColor,
			legend: {
                textStyle:{
				 
									color: '#ffffff'//字体颜色
								}
      },
			dataRange: {
         x: '2%',
         bottom:"10px",
				textStyle: {
					color: '#fff',
					fontSize: 12,
			  }, 
         splitList: [{
                 start: 6.5,
                 end: 7.5,
                 label: '医院、园林绿化',
                 color: 'rgba(250, 89, 22, 1)'
             },{
                 start: 5.5,
                 end: 6.5,
                 label: '商业',
                 color: 'rgba(38, 85, 246, 1)'
             },{
                 start: 4.5,
                 end: 5.5,
                 label: '学校',
                 color: 'rgba(243, 70, 250, 1)'
             },{
                 start: 3.5,
                 end: 4.5,
                 label: '办公楼',
                 color: 'rgba(73, 205, 69, 1)'
             },{
                 start: 2.5,
                 end: 3.5,
                 label: '工业园区',
                 color: 'rgba(147, 235, 248, 1)'
             }, {
                 start: 1.5,
                 end: 2.5,
                 label: '高档小区',
                 color: 'rgba(255, 235, 59, .7)'
             },{
                 start:0,
                 end: 1.5,
                 label: '写字楼',
                 color: 'rgba(241, 109, 115, .8)'
             } 
         ],
         //color:["rgba(241, 109, 115, .8)","rgba(255, 235, 59, .7)","rgba(147, 235, 248, 1)"],

     },
			tooltip : {
				trigger: 'item',
				formatter:function(params){
					var index=params.data.value[3];
					//console.log(,,"pppppppppp",levelName);
									return levelName[index]+"<br/>"+params.data.name;
							},
				textStyle:{
					fontSize:12
				}
			},
			graphic: [{
					id: name[idx],
					type: 'group',
					left: pos.left + 2,
					top: pos.top,
					children: [{
							type: 'polyline',
							left: 90,
							top: -12,
							shape: {
									points: line
							},
							style: {
									stroke: 'transparent',
									key: name[0]
							},
							onclick: function() {
									var name = this.style.key;
									handleEvents.resetOption(chart, option, name);
							}
					}, {
							type: 'text',
							left: 0,
							top: 'middle',
							style: {
								// text: '中国',
									textAlign: 'center',
									fill: style.textColor,
									font: style.font
							},
							onclick: function() {
								// handleEvents.resetOption(chart, option, '中国');
							}
					}, {
							type: 'text',
							left: 0,
							top: 10,
							style: {
									//text: 'China',
									textAlign: 'center',
									fill: style.textColor,
									font: '12px "Microsoft YaHei", sans-serif',
							},
							onclick: function() {
									//handleEvents.resetOption(chart, option, '中国');
							}
					}]
			}],
			geo: {
				map: opt.mapName,
				roam: true,//缩放启动
				zoom: 1,
				scaleLimit:{min:1,max:10},
        label: {
						normal: {
								show: true,
								textStyle: {
										color: '#fff'
								}
						},
						emphasis: {
								textStyle: {
										color: '#fff'
								}
						}
				},
				itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 114, 219, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0, 
                            color: 'rgba(1, 122, 214, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(1, 122, 214, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(1, 122, 214, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
										/* areaColor: '#389BB7',
										borderWidth: 0 */
                    areaColor: {
                    			type: 'radial',
                    			x: 0.5,
                    			y: 0.5,
                    			r: 0.8,
                    			colorStops: [{
                    					offset: 0, 
                    					color: 'rgba(1, 122, 214, 0)' // 0% 处的颜色
                    			}, {
                    					offset: 1, 
                    					color: 'rgba(1, 122, 214, .2)' // 100% 处的颜色
                    			}],
                    			globalCoord: false // 缺省为 false
                    	},
                    	borderWidth: 1,
                    	borderColor: 'rgba(0, 114, 219, 1)',
                }
            },
        regions: [{
					name:"河北",
					selected:true,
					itemStyle:{
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 1 
						}
						
					}
				},
				{
					name:"北京",
					selected:true,
					itemStyle:{
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 1 
						}
						
					}
				},{
					name:"天津",
					selected:true,
					itemStyle:{
						emphasis: {
							areaColor: '#389BB7',
							borderWidth: 1 
						}
						
					}
				}]
      },
      series: [{
            type: 'effectScatter',
						name:"",
            coordinateSystem: 'geo',
            // symbol: 'diamond',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 6,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: function(params){
                        return levelColorMap[params.value[3]];
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: handleEvents.initSeriesData(opt.data)
        }]
    };

    chart.setOption(option);
		// 添加事件
		chart.on('click', function(params) {
				var _self = this;
				if (opt.goDown && params.name !== name[idx]) {
						if (cityMap[params.name]) {
								var url = cityMap[params.name];
								$.get(url, function(response) {
										//console.log(response);
										curGeoJson = response;
										echarts.registerMap(params.name, response);
										handleEvents.resetOption(_self, option, params.name);
								});
						}
				}
		});
		chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0
    });
    return chart;
};
setBeijing();

$(".map-tab>span").click(function(){
	echarts.init(document.getElementById('bjMap')).dispose();//销毁前一个实例
	$(this).addClass("active").siblings('span').removeClass("active");
	index=$(this).index();
	type=index;
	console.log(index,'index');
	var myChart=null;
	if(index==1){
		//fleg=false;
		$.getJSON(zhongguo, function(geoJson){
		    echarts.registerMap('中国', geoJson);
		    myChart = echarts.extendsMap('bjMap', {
		    	bgColor: '#154e90', // 画布背景色
		    	mapName: '中国',    // 地图名
		    	goDown: true,       // 是否下钻
		    	// 下钻回调
		    	callback: function(name, option, instance){
							// 添加事件
							instance.on('click', function(params){
									var _self = this;
									//console.log(params.dataIndex,params.componentType,"click")
									//点击项目展示详情页
									if(params.componentType=='series'){
										console.log("99999")
										showItem(params.dataIndex);
										
									}
								return false;	
							});
		    	},
		        // 数据展示            	
		    	data: [{
		    		name: '金泰国际大厦',
		    		value: 10,
		    		level: 1
		    	}, {
		    		name: '金泰大厦',
		    		value: 12,
		    		level: 1
		    	}, {
		    		name: '金泰国益大厦',
		    		value: 11,
		    		level: 1
		    	}, {
		    		name: '金泰富地大厦',
		    		value: 16,
		    		level: 1
		    	}, {
		    		name: 'CBD国际大厦',
		    		value: 12,
		    		level: 1
		    	},{
		    		name: '金泰城·丽湾小区',
		    		value: 12,
		    		level: 2
		    	},{
		    		name: '新天第小区',
		    		value: 12,
		    		level: 2
		    	},{
		    		name: '金泰先锋',
		    		value: 12,
		    		level: 2
		    	},{
		    		name: '中国移动北京基地',
		    		value: 12,
		    		level: 3
		    	},{
		    		name: '京煤集团办公楼',
		    		value: 12,
		    		level: 4
		    	},{
		    		name: '中国移动(美惠大厦)',
		    		value: 12,
		    		level: 4
		    	},{
		    		name: '金泰集团办公楼',
		    		value: 12,
		    		level: 4
		    	},{
		    		name: '北京工商大学(良乡校区)',
		    		value: 12,
		    		level: 5
		    	},{
		    		name: '北京麦当劳食品有限公司',
		    		value: 12,
		    		level: 6
		    	},{
		    		name: '天坛公园',
		    		value: 12,
		    		level: 7
		    	},{
		    		name: '北京东苑中医医院',
		    		value: 12,
		    		level: 7
		    	}]
		    });
		})
	}else{
		setBeijing();
	}
})

function showItem(dataIndex){
	layui.use('layer', function(){
		var layer = layui.layer;
		layer.config({
			skin: 'demo-class'
		})
		layer.open({
			type: 2,
			title:false,
			shade:true,
			shade: [0.8, '#0f0f10'],
			area: ['720px', '540px'],
			skin: 'view-class',
			content: ['page/item_details.html','no'] //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
		});
	});       
}

function setBeijing(){
	echarts.init(document.getElementById('bjMap')).dispose();//销毁前一个实例
	$.getJSON(beijing, function(geoJson){
	    echarts.registerMap('北京', geoJson);
	    var myChart = echarts.extendsMap('bjMap', {
	    	bgColor: '#154e90', // 画布背景色
	    	mapName: '北京',    // 地图名
	    	goDown: true,       // 是否下钻
	    	// 下钻回调
	    	callback: function(name, option, instance){
					
	    		//console.log(name, option, instance,"");
	    	},
	        // 数据展示            	
	    	data: [{
	    		name: '金泰国际大厦',
					selected:true,
	    		value: 10,
	    		level: 1
	    	}, {
	    		name: '金泰大厦',
					selected:true,
	    		value: 12,
	    		level: 1
	    	}, {
	    		name: '金泰国益大厦',selected:true,
	    		value: 11,
	    		level: 1
	    	}, {
	    		name: '金泰富地大厦',selected:true,
	    		value: 16,
	    		level: 1
	    	}, {
	    		name: 'CBD国际大厦',selected:true,
	    		value: 12,
	    		level: 1
	    	},{
	    		name: '金泰城·丽湾小区',selected:true,
	    		value: 12,
	    		level: 2
	    	},{
	    		name: '新天第小区',selected:true,
	    		value: 12,
	    		level: 2
	    	},{
	    		name: '金泰先锋',selected:true,
	    		value: 12,
	    		level: 2
	    	},{
	    		name: '中国移动北京基地',selected:true,
	    		value: 12,
	    		level: 3
	    	},{
	    		name: '京煤集团办公楼',selected:true,
	    		value: 12,
	    		level: 4
	    	},{
	    		name: '中国移动(美惠大厦)',selected:true,
	    		value: 12,
	    		level: 4
	    	},{
	    		name: '金泰集团办公楼',selected:true,
	    		value: 12,
	    		level: 4
	    	},{
	    		name: '北京工商大学(良乡校区)',selected:true,
	    		value: 12,
	    		level: 5
	    	},{
	    		name: '北京麦当劳食品有限公司',selected:true,
	    		value: 12,
	    		level: 6
	    	},{
	    		name: '天坛公园',selected:true,
	    		value: 12,
	    		level: 7
	    	},{
	    		name: '北京东苑中医医院',selected:true,
	    		value: 12,
	    		level: 7
	    	}],
				
	    });
			// 添加事件
			//console.log(myChart,'oooooo')
			myChart.on('click', function(params) {
					var _self = this;
					//点击项目展示详情页
					if(params.componentType=='series'&&type==0&&fleg){
						console.log("99999")
						showItem(params.dataIndex)
					}
					
			});
	})
	
}
