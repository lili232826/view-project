var myChart1 = echarts.init(document.getElementById('projectOrderChart'));
var myChart2 = echarts.init(document.getElementById('projectOrderCountChart'));
var option1 = {
		title:{
			text:'本月各项目工单情况',
			textStyle:{
				color:'#33FFFF'
			},
			left:'center'
		},
		color: ['#FF4F64', '#2271DD', '#43AFF1', '#FF9D1B', '#FF6426', '#2545E7', '#8356E4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['电','水','燃气','基础设施','服务类'],
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
            name: '电',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [15,25,6,7,11,13,15,15,9,14,13,15,5,22,9,21,21,12,21]
        },
        {
            name: '水',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [9,11,8,21,21,13,12,15,22,12,5,16,25,15,15,15,15,13,21]
        },
        {
            name: '燃气',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2,15,3,9,0,7,11,0,0,0,3,0,0,5,6,5,7,8,8]
        },
        {
            name: '基础设施',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [15,25,44,34,11,43,28,15,33,15,55,34,34,78,32,45,76,55,90]
        },
        {
            name: '服务类',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [45,25,44,43,77,45,55,77,66,90,55,78,88,78,140,120,90,130,90]
        },
        
    ]
};
var option2 = {
	title:{
		text:'本月各项目工单数量趋势',
		textStyle:{
			color:'#33FFFF'
		},
		left:'center'
	},
	color: ['#FF4F64', '#2271DD', '#43AFF1', '#FF9D1B', '#FF6426', '#2545E7', '#8356E4'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['电','水','燃气','基础设施','服务类'],
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
    yAxis:  {
        type: 'value',
				axisLabel:{
					color:'#fff'
				},
				splitLine:{
					show:false
				}
    },
    xAxis: {
        type: 'category',
				axisLabel:{
					color:'#fff'
				},
        data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    },
    series: [
        {
        		name: '电',
        		type: 'bar',
        		stack: '总量',
        		label: {
        				normal: {
        						show: true,
        						position: 'insideRight'
        				}
        		},
        		data: [11,21,15,14,4,18,16,9,3,14,5,8,12,15,4,11,8,6,5,14,5,11,5,5,5,3,4,8,5,5,0]
        },
        {
        		name: '水',
        		type: 'bar',
        		stack: '总量',
        		label: {
        				normal: {
        						show: true,
        						position: 'insideRight'
        				}
        		},
        		data: [11,5,5,5,3,6,8,11,8,6,5,14,5,11,5,5,21,15,14,4,18,16,9,3,14,5,8,12,15,17,0]
        },
        {
        		name: '燃气',
        		type: 'bar',
        		stack: '总量',
        		label: {
        				normal: {
        						show: true,
        						position: 'insideRight'
        				}
        		},
        		data: [3,4,5,1,5,6,4,3,3,4,3,1,1,2,0,4,1,0,1,0,6,4,3,6,7,1,6,0,2,3,0]
        },
        {
        		name: '基础设施',
        		type: 'bar',
        		stack: '总量',
        		label: {
        				normal: {
        						show: true,
        						position: 'insideRight'
        				}
        		},
        		data: [11,19,21,24,14,18,16,21,19,14,25,25,12,15,24,11,6,41,27,23,53,43,15,54,22,38,8,54,34,55,0]
        },
        {
        		name: '服务类',
        		type: 'bar',
        		stack: '总量',
        		label: {
        				normal: {
        						show: true,
        						position: 'insideRight'
        				}
        		},
        		data: [31,33,89,45,65,43,55,65,78,26,25,25,45,34,89,54,56,41,27,23,53,43,56,54,22,38,78,54,34,55,0]
        },
        
    ]
};
myChart1.setOption(option1);
myChart2.setOption(option2);
/* $(function(){
	var dataJson = '48,46,43,49,45,41,47,48,49,40,41,48,48,49,47,45,48,48,49,42,47,42,43,50,45,49,47,44,49,51,48';
	var list = dataJson.split(',');
	var sum = 0;
	for(var i = 0;i<list.length;i++){
			sum += parseInt(list[i]);
	}
	console.log("sum:"+sum);
}) */
