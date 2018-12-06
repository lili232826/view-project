
var income = echarts.init(document.getElementById('income'));
var option = {
    //backgroundColor:'#081C90',
		tooltip: {
			show:true,
				formatter: "{b}<br/>收入:{c}万<br/>比例:{d}%"
		},
		grid:{
					top: '40px',
					left:0,
					right:0,
					bottom:0
		},
    legend: {
        orient: 'horizontal',
				show:false,
        textStyle:{
        		color:'#fff'
        },
				bottom:'-2%',
				left:0,
        //icon: 'circle',
        data: ['写字楼', '住宅', '办公楼',"工业园区","学校","商业",'医院、园林绿化'],
        /* formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                }
            }
        } */
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['50%', '70%'],
        roseType: 'radius',
        startAngle: 50,
        color: ['#FF4F64', '#2271DD', '#43AFF1',"#e362ea","#fbb619","#f4fd02","#2ddc27"],
        label: {
            normal: {
                show: true,
								//color:"#fff"
            }
        },
        labelLine: {
            normal: {
                show: true,
								length:2,
								length2:10
            },

        },
				
        data: [{
            value: 13000,
            name: '写字楼',

        }, {
            value: 5000,
            name: '住宅',
        }, {
            value: 2000,
            name: '办公楼',

        },{
            value: 1000,
            name: '工业园区',

        },{
            value: 1000,
            name: '学校',

        },{
            value: 500,
            name: '商业',

        },{
            value: 3000,
            name: '医院、园林绿化',

        }
		]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        income.setOption(option);
