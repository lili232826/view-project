
	window.onresize = function(){
	energy.resize();
	}
var energy = echarts.init(document.getElementById('energy'));
var dataStyle = {
    normal: {
        label: {
            show: true,
			position: 'center'
        },
        labelLine: {
            show: false
        },
        shadowBlurtrue: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
    }
};
var option = {
    title: {
        text: '436万',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: "#ffec3e",
            fontSize: 22
        }
    },
    //backgroundColor: '#011128',
    color: ['#0087f4', '#313443', '#fff'],
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['01', '02']
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: ['70%', '80%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                    value: 75,
                    name: ''
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: placeHolderStyle,
					label: {
						normal: {
							formatter:[
								'{a|本月耗能}',
								'{b|kw/h}'
							].join('\n\n\n'),
							rich: {
								a: {
									color: '#fff',
									fontSize: 14,
									lineHeight: 20
								},
								b: {
									color: '#fff',
									fontSize: 20,
									lineHeight: 20
									
								}
							},
							textStyle: {
								color: '#fff',
								fontSize: 14
								//fontWeight: 'bold'
							}
						}
					}
                }

            ]
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        energy.setOption(option);
