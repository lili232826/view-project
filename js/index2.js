
	window.onresize = function(){
	repair.resize();
	}
	var repair = echarts.init(document.getElementById('repair'));
//var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorList =["#f6d54a","#f69846","#44aff0","#45dbf7","#f845f1","#ad46f3","#5045f6","#4777f5"];
var colorListSub =['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}:({d}%)"
    },
		grid:{
          top: '0%',
    },
    legend: {
        orient: 'horizontal',
        textStyle:{
        		color:'#fff'
        },
        left:'center',
        bottom:'8%',
        data:['供配电','停车场','门禁','视频监控','可视对讲',"给排水",'消防',"灯光"]
    },
    series: [
        {
            type:'pie',
            radius: [20, '56%'],
						center:["50%","38%"],
            roseType: 'radius',
            clockwise :false,
            z:10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                normal: {
									formatter: function(param){
										//console.log(param.percent,"param")
										return Math.round(param.percent)+"%"
									},
                    textStyle: {
                    		backgroundColor:"rgba(3,48,85,0.6)",
												padding:6
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 10,
                    lineStyle:{
                        width:1
                    }
                }
            },
            data:[
                {value: 8, name:'供配电'},
                {value:15, name:'停车场'},
                {value:31, name:'门禁'},
                {value:11, name:'视频监控'},
                {value:8, name:'可视对讲'},
								{value:6, name:'给排水'},
								{value:3, name:'消防'},
								{value:18, name:'灯光'}
                
            ]
        },
      
        // 中心的圆圈
        {
            radius: ['60%', '62%'],
						center:["50%","38%"],
            color:'#FFFFFF',
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 200,
                name: '民警训练总量',
                itemStyle: {
                    normal: {
                        color: '#5A96FF',
                    }
                }
            }],
            animation: false
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        repair.setOption(option);
