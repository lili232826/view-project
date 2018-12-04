
	window.onresize = function(){
	income.resize();
	}
var income = echarts.init(document.getElementById('item-income'));
var option = {
    //backgroundColor:'#081C90',
		title: {
			text: '应收金额\n3000万元',
			x: 'center',
			y: 'center',
			textStyle: {
				fontWeight: 'normal',
				color: "#fff",
				fontSize: 14
			}
		},
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
        data: ["已收金额","未收金额"],
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
        startAngle: 110,
        color: ['#1247a7', '#f67e1a', '#43AFF1',"#e362ea","#fbb619","#f4fd02","#2ddc27"],
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
				length2:6
            },

        },		
        data: [{
            value: 480,
            name: '已收金额',

        }, {
            value: 2520,
            name: '未收金额',
        }
		]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        income.setOption(option);
