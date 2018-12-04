
	window.onresize = function(){
	workOrder.resize();
	}
var workOrder = echarts.init(document.getElementById('item-workOrder'));
var option = {
    //backgroundColor:'#081C90',
	grid:{
		top: '60px',
		left:0,
		right:0,
		bottom:0
	},
	tooltip:{formatter: "{b}: {c}",},
    legend: {
        orient: 'horizontal',
        textStyle:{
        		color:'#fff'
        },
		bottom:'2%',
        //icon: 'circle',
        data: ['电', '水', '燃气', '基础设施', '服务类'],
    },
    series: [{
        type: 'pie',
		name:"工单",
        center: ['50%', '40%'],
        radius: ['50%', '68%'],
        roseType: 'radius',
        startAngle: 100,
        color: ['#FF4F64', '#2271DD', '#43AFF1', '#FF9D1B', '#FF6426', '#2545E7', '#8356E4'],		
        label: {
            normal: {
				formatter: "{b}: {c}",
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },

        },
        data: [{
            value: 269,
            name: '电',

        }, {
            value: 284,
            name: '水',
        }, {
            value: 89,
            name: '燃气',

        }, {
            value: 762,
            name: '基础设施',
        },{
            value: 1436,
            name: '服务类',
        }]
    }, {
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['42%', '44%'],
		hoverAnimation: false,
		triggerTooltip:false,
		legendHoverLink:false,
        label: {
            show: false,
        },
		tooltip: {
			show:false
		},
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#5f616e'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockWise: true,
		tooltip: {
			show:false
		},
		center: ['50%', '40%'],
        radius: [0, '0%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#43AFF1'
                }
            },
            label: {
                normal: {
                    formatter: '120',
                    textStyle: {
                        color: '#fff',
                        fontSize: 25,
                        //fontWeight: 'bold'
                    }
                }
            }
        }]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        workOrder.setOption(option);
