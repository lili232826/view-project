var incomeDistributionChart = echarts.init(document.getElementById('incomeDistributionChart'));
var option = {
	title:{
		text:"写字楼收入（本年）",
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
		data:['富地大厦','国益大厦','国际大厦','金泰大厦','CBD国际大厦']
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
		data:[1980,2450,2900,3000,3300]
	}],
	
}
incomeDistributionChart.setOption(option);
$(function(){
	var list = $(".content-list");
	var dataJson = [{
			title:'全部',
			list:[300,300,400,500,600,700,700,800,1100,1100,1500,1600,1980,2400,2450,2900,3000,3300],
			name:['北京工商大学(良乡校区)','神华机车分公司项目','金泰集团办公楼','京煤集团办公楼','北京麦当劳食品有限公司','北京东苑中医医院',
			'燕京理工学院','中国移动北京基地','新新天第小区','中国移动(美惠大厦)','天津丽湾小区','金泰先锋','金泰城·丽湾小区','富地大厦',
			'天坛公园','国益大厦','国际大厦','金泰大厦','CBD国际大厦']
		},{
			title:'写字楼收入',
			list:[1980,2450,2900,3000,3300],
			name:['富地大厦','国益大厦','国际大厦','金泰大厦','CBD国际大厦']
		},{
			title:'高档小区',
			list:[800,1100,1500,1600],
			name:['新新天第小区','天津丽湾小区','金泰先锋','金泰城·丽湾小区']
		},{
			title:'办公楼',
			list:[400,500,1100],
			name:['金泰集团办公楼','京煤集团办公楼','中国移动(美惠大厦)']
		},{
			title:'工业园区',
			list:[300,700],
			name:['神华机车分公司项目','中国移动北京基地']
		},{
			title:'学校楼',
			list:[300,700],
			name:['北京工商大学(良乡校区)','燕京理工学院']
		},{
			title:'商业',
			list:[500],
			name:['北京麦当劳食品有限公司']
		},{
			title:'医院、园林绿化',
			list:[600,2400],
			name:['北京东苑中医医院','天坛公园']
		}
		]
	for(var i = 0;i<list.length;i++){
		$(list[i]).on("click",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass('active');
				incomeDistributionChart.setOption({
					title:{
						text:dataJson[index].title+"（本年）",
					},
					yAxis:[{
						data:dataJson[index].name
					}],
					series:[{
						data:dataJson[index].list
					}]
				})
			
		})
	}
})
