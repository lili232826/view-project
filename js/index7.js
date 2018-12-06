
var projectNum = echarts.init(document.getElementById('projectNum'));
var option = {
    //backgroundColor:'#081C90',
		grid:{
					top: '40px',
					left:0,
					right:0,
					bottom:0
		},
//     legend: {
//         orient: 'horizontal',
//         textStyle:{
//         		color:'#fff'
//         },
// 				bottom:'16%',
//         //icon: 'circle',
//         data: ['物料1', '物料2', '物料3', '物料4', '物料5', '物料6', '物料7'],
//         /* formatter: function(name) {
//             var oa = option.series[0].data;
//             var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
//             for (var i = 0; i < option.series[0].data.length; i++) {
//                 if (name == oa[i].name) {
//                     return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
//                 }
//             }
//         } */
//     },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['78%', '80%'],
        label: {
            show: false,
        },
		animation: false,
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#5f616e'
                }
            }
        }]
    }, {
        name: '666',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
		center: ['50%', '50%'],
        radius: ["86%", '90%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#ffec3e'
                }
            },
            label: {
                normal: {
                    formatter: function (name) {
						//console.log(name,"8888888888888")
						return '创优项目数\n\n' + 7;
					},
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        //fontWeight: 'bold'
                    }
                }
            }
        }],
		animation: false
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        projectNum.setOption(option);
