//设备管理
var deviceManage1 = echarts.init(document.getElementById('deviceManage1'));
var deviceManage2 = echarts.init(document.getElementById('deviceManage2'));
var deviceManage3 = echarts.init(document.getElementById('deviceManage3'));
var option1 = {
		title: {
			text: '设备完好率',
			x: 'center',
			'bottom':"20px",
			textStyle: {
				fontWeight: 'normal',
				color: "#fff",
				fontSize: 12
			}
		},
    "series": [
        {
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
               "78%",
               "80%"
            ],
            "clockWise": false,
            "hoverAnimation": false,
            "type": "pie",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
												'formatter': function (name) {
													//console.log(name,"8888888888888")
													//return '创优项目数\n\n' + 7;
												},
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        },
                        "position": "center"
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 5
                },
                "emphasis": {
                    "label": {
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        }
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 10
                }
            },
            "data": [
                {
                    "value": 98.5,
                    "name": "98.5%"
                },
                {
                    "name": "",
                    "value": 1.5,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        }
                    }
                }
            ]
        }
   ]
};
var option2 = {
		title: {
			text: '巡检完成率',
			x: 'center',
			'bottom':"20px",
			textStyle: {
				fontWeight: 'normal',
				color: "#fff",
				fontSize: 12
			}
		},
    "series": [
        {
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
               "78%",
               "80%"
            ],
            "clockWise": false,
            "hoverAnimation": false,
            "type": "pie",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
												'formatter': function (name) {
													//console.log(name,"8888888888888")
													//return '创优项目数\n\n' + 7;
												},
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        },
                        "position": "center"
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 5
                },
                "emphasis": {
                    "label": {
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        }
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 10
                }
            },
            "data": [
                {
                    "value": 96,
                    "name": "96%"
                },
                {
                    "name": "",
                    "value": 4,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        }
                    }
                }
            ]
        }
   ]
};
var option3 = {
		title: {
			text: '维保完成率',
			x: 'center',
			'bottom':"20px",
			textStyle: {
				fontWeight: 'normal',
				color: "#fff",
				fontSize: 12
			}
		},
    "series": [
        {
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
               "78%",
               "80%"
            ],
            "clockWise": false,
            "hoverAnimation": false,
            "type": "pie",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
												'formatter': function (name) {
													//console.log(name,"8888888888888")
													//return '创优项目数\n\n' + 7;
												},
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        },
                        "position": "center"
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 5
                },
                "emphasis": {
                    "label": {
                        "textStyle": {
                            "fontSize": 15,
                            "fontWeight": "bold"
                        }
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 10
                }
            },
            "data": [
                {
                    "value": 98,
                    "name": "98%"
                },
                {
                    "name": "",
                    "value": 2,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        }
                    }
                }
            ]
        }
   ]
};

var getData=[
	{"name":"设备完好率","value":98.5},
	{"name":"巡检完成率","value":96},
	{"name":"维保完成率","value":98},
]
//设置得到的数据
/* var deviceManage0=null;
var deviceManage1=null;
var deviceManage2=null;
for(var j=0;j<getData.length;j++){
	console.log(j,getData[j]['value'])
	option.series[0].data[0]["value"]=getData[j]['value'];
	option.series[0].data[1]["value"]=100-getData[j]['value'];
	option.title.text=getData[j]['name'];
	var obj='deviceManage'+(j+1);
	deviceManage+"i" = echarts.init(document.getElementById(obj));
	deviceManage+"i".setOption(option);
		
} */
deviceManage1.setOption(option1)
 deviceManage2.setOption(option2);
deviceManage3.setOption(option3); 


