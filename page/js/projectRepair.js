var myChart1 = echarts.init(document.getElementById('projectRepairChart'));
var option1 = {
		title:{
			text:'本月各项目维修维保情况',
			textStyle:{
				color:'#33FFFF'
			},
			left:'center'
		},
		color:["#f6d54a","#f69846","#44aff0","#45dbf7","#f845f1","#ad46f3","#5045f6","#4777f5"],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['供配电','停车场','门禁','视频监控','可视对讲','给排水','消防','灯光'],
				top:'30px',
				textStyle:{
					color:'#fff'
				}
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
				axisLabel:{
					color:'#fff'
				},
				splitLine:{
					show:false
				},
    },
    yAxis: {
        type: 'category',
				axisLabel:{
					color:'#fff'
				},
        data: ['天坛公园','金泰国益大厦','金泰富地大厦','燕京理工学院','中国移动(美惠大厦)','北京工商大学(良乡校区)',
					'北京麦当劳食品有限公司','京煤集团办公楼','金泰集团办公楼','北京东苑中医医院','CBD国际大厦','神华机车分公司项目',
					'中国移动北京基地','金泰大厦','金泰先锋','金泰城·丽湾小区','天津丽湾小区','新新天第小区','金泰国际大厦'],
					},
    series: [
		{
			name: '供配电',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [15,5,6,7,15,13,20,15,19,24,13,15,15,22,19,28,21,32,23]
		},
		{
			name: '停车场',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [45,35,6,7,11,13,19,15,9,14,13,15,12,22,9,25,21,42,44]
		},
		{
			name: '门禁',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [15,25,44,43,77,45,55,77,66,70,55,78,88,63,97,81,80,78,90]
		},
		{
			name: '视频监控',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'insideRight'
				}
			},
			data: [15,25,44,34,13,43,28,15,33,25,55,34,34,58,38,55,56,35,23]
		},
        {
        	name: '可视对讲',
        	type: 'bar',
        	stack: '总量',
        	label: {
        		normal: {
        			show: true,
        			position: 'insideRight'
        		}
        	},
        	data: [15,25,6,7,11,13,15,15,9,24,13,15,5,22,18,21,21,22,21]
        },
		
        {
            name: '给排水',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [9,11,8,21,21,13,12,15,22,22,5,16,25,15,19,15,15,23,17]
        },
        {
            name: '消防',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2,15,3,9,10,7,11,10,5,0,3,0,1,5,16,5,7,8,9]
        },
        {
            name: '灯光',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [15,5,44,34,11,30,23,30,33,18,40,34,34,38,32,30,43,25,52]
        },
    ]
};

myChart1.setOption(option1);
/* $(function(){
	var dataJson = '48,46,43,49,45,41,47,48,49,40,41,48,48,49,47,45,48,48,49,42,47,42,43,50,45,49,47,44,49,51,48';
	var list = dataJson.split(',');
	var sum = 0;
	for(var i = 0;i<list.length;i++){
			sum += parseInt(list[i]);
	}
	console.log("sum:"+sum);
}) */
