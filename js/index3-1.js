window.onresize = function(){
	bjMap.resize();
	}
var beijing = "data/beijing.json";

echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    /* var cityMap = {
        "北京市": beijing,
        "景德镇市": jingdezhen,
        "萍乡市": pingxiang,
        "九江市": jiujiang,
        "新余市": xinyu,
        "鹰潭市": yingtan,
        "赣州市": ganzhou,
        "吉安市": jian,
        "宜春市": yichun,
        "抚州市": fuzhou,
        "上饶市": shangrao
    }; */
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
		"金泰集团办公楼":[116.362555,39.894275]
    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',//写字楼
        '2': 'rgba(255, 235, 59, .7)',//高档小区
        '3': 'rgba(147, 235, 248, 1)'//工业园区
    };
	var levelName = {
		'1': '写字楼',//
		'2': '高档小区',//
		'3': '工业园区'//
	};
	var defaultOpt = {
		mapName: 'china',     // 地图展示
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
        /**
         * name 地图名
        **/
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
		console.log(res,"res");
		return res;
	};
/* 	'1': 'rgba(241, 109, 115, .8)',//写字楼
	'2': 'rgba(255, 235, 59, .7)',//高档小区
	'3': 'rgba(147, 235, 248, 1)'//工业园区 */
    var option = {
    	//backgroundColor: opt.bgColor,
		legend: {
                textStyle:{
				 
					color: '#ffffff'//字体颜色
				}
         },
		dataRange: {
         min: 0,
         max: 5,
         x: '5%',
         y: '80%',
				 textStyle: {
							color: '#fff',
							fontSize: 12,
					},
         splitList: [{
                 start: 2.5,
                 end: 3.5,
                 label: '工业园区',
                 color: 'rgba(147, 235, 248, 1)'
             }, {
                 start: 1.5,
                 end: 2.5,
                 label: '高档小区',
                 color: 'rgba(255, 235, 59, .7)'
             },

             {
                 start:0,
                 end: 1.5,
                 label: '写字楼',
                 color: 'rgba(241, 109, 115, .8)'
             },
              
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
        geo: {
        	map: opt.mapName,
            roam: true,//缩放启动
            zoom: 1,
			scaleLimit:{min:1,max:3},
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
									//show:false,
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
										//opacity:0
                }
            },
            regions: opt.activeArea.map(function(item){
                if(typeof item !== 'string'){
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                }else{
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
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
        },]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params){
        var _self = this;
    	console.log("click")
    });
    return chart;
};

$.getJSON(beijing, function(geoJson){
    echarts.registerMap('北京', geoJson);
    var myChart = echarts.extendsMap('bjMap', {
    	bgColor: '#154e90', // 画布背景色
    	mapName: '北京',    // 地图名
    	goDown: true,       // 是否下钻
    	// 下钻回调
    	callback: function(name, option, instance){
    		console.log(name, option, instance);
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
    	}]
    });
})

