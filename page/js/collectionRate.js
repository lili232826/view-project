var collectionChart = echarts.init(document.getElementById('collectionRateChart'));
var option = {
	title:{
		text:"各项目收缴率排名（本月）",
		textStyle:{
			color:'#33FFFF',
		},
		left:'center',
		top:'15px'
	},
	grid:{
		left:'140'
	},
	xAxis:[{
		
		type:'value',
		splitLine:{
			show:false
		},
		axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: '#fff',  
                fontWeight: '80'
            }
        }
	}],
	yAxis:[{
		type:'category',
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
		splitLine:{
			show:false
		},
		data:['天津丽湾小区','新新天第','金泰先锋','金泰城丽湾','富地大厦','国益大厦','国际大厦','金泰大厦','CBD国际大厦','神华机车分公司项目','中国移动北京基地','金泰集团办公楼','京煤集团办公楼']
	}],
	series:[{
		type:'bar',
		 barWidth: 12,
		 itemStyle: {
                normal: {
                    //barBorderRadius: 20, //统计条弧度
                    color: {

                        colorStops: [{
                            offset: 0,
                            color: '#00b0ff' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#7052f4' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                },
            },
       
		 label: {
			
            normal: {
                show: true,
				position:'right',
                formatter: function(v) {
                    var val = v.data;
                    if (val == 0) {
                        return '';
                    }
                    return val+'%';
                },
                color: '#fff'
            }
        },
		data:[66.6,70.6,76.6,86.6,97.9,98.7,99.3,99.6,99.8,100,100,100,100]
	}],
	
}
collectionChart.setOption(option);
