var myChart = echarts.init(document.getElementById('energyConsumptionChart'));
var option = {
	title:{
		text:"各项目能耗情况",
		textStyle:{
			color:'#33FFFF',
		},
		left:'center',
		top:'15px'
	},
	grid:{
		left:'200'
	},
	xAxis:[{
		
		type:'value',
		splitLine:{
			show:false
		},
		axisLabel: {
            formatter: '{value}万',
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
		data:['天坛公园','金泰国益大厦','金泰富地大厦','燕京理工学院','中国移动(美惠大厦)','北京工商大学(良乡校区)',
					'北京麦当劳食品有限公司','京煤集团办公楼','金泰集团办公楼','北京东苑中医医院','CBD国际大厦','神华机车分公司项目',
					'中国移动北京基地','金泰大厦','金泰先锋','金泰城·丽湾小区','天津丽湾小区','新新天第小区','金泰国际大厦']
		}],
	series:[{
		type:'bar',
		 barWidth: 12,
		 itemStyle: {
                normal: {
                   // barBorderRadius: 20, //统计条弧度
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
                    var num = v.data;
										var result = [ ], counter = 0;
										num = (num || 0).toString().split('');
										for (var i = num.length - 1; i >= 0; i--) {
												counter++;
												result.unshift(num[i]);
												if (!(counter % 3) && i != 0) { result.unshift(','); }
										}
										return result.join('')+'万';
                },
                color: '#fff'
            }
        },
		data:[6,8,10,10,12,18,21,22,23,25,26,28,30,30,31,32,33,34,37]
	}],
	
}
myChart.setOption(option);
/* $(function(){
	var sum = 0;
	var arr = '6,8,10,10,12,18,21,22,23,25,26,28,30,30,31,32,33,34,37';
	var a = arr.split(",");
	for(var i =0;i<a.length;i++){
		sum += parseInt(a[i]);
	}
	console.log(sum);
}) */
