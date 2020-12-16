// 柱状图1
(function(){
    var myChart = echarts.init(document.querySelector('.bar1 .chart'))
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top:'10px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisTick: {
                    alignWithLabel:true
                },
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color:"rgba(255,255,255,.6)",
                    fontSize:12
                },
                axisLine:{
                    lineStyle:{
                        width:2,
                        color:'rgba(255,255,255,.1)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:1,
                        color:'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '柱',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();
(function(){
    var yearData = [
        {
          year: '2020',  // 年份
          data: [  // 两个数组是因为有两条线
               [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
               [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
          year: '2021',  // 年份
          data: [  // 两个数组是因为有两条线
               [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
               [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
       ];
    var myChart = echarts.init(document.querySelector('.line1 .chart'))
    var option = option = {
        color:['#00f2f1',  '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
           right:'10%',
           textStyle:{
                color:'#4c9bfd'
           }
        },
        grid: {
            top: '20%',
            left: '3%',
            right:'4%',
            bottom: '3%',
            show:true,
            borderColor:'#012f4a',
            containLabel:true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
                color: "rgba(255,255,255,.6)"
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false
            },
            axisLabel:{
                color: "rgba(255,255,255,.6)"
            },
            splitLine:{
                lineStyle:{
                    color:'#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                smooth:true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
            },
            {
                name: '新增游客',
                type: 'line',
                smooth:true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            }
        ]
    };
    myChart.setOption(option)
    $('.line1 h2').on('click','a',function(){
        var obj = yearData[$(this).index()]
        // console.log($(this).index())
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
        myChart.setOption(option)
    })
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();
(function(){
    var myChart = echarts.init(document.querySelector('.pie1 .chart' ))
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
          ],
        tooltip: {
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom:'0%',
            // left: 10,
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                fontSize:12,
                color:'rgba(255,255,255,.5)'
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                center:['50%','50%'],
                radius: ['40%', '60%'],
                // avoidLabelOverlap: false,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ] 
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();
(function(){
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector('.bar2 .chart'))
    var option = {
        grid: {
            left: '22%',
            top: '10%',
            bottom: '3%',
        },
        xAxis: {
            show:false
        },
        yAxis: [
            {
                type: 'category',
                sxisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:'#fff'
                },
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
            },{
                show:true,
                data: [702, 350, 610, 793, 664],
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        fontSize:12,
                        color:'#fff'
                    }
                },
                data:[702, 350, 610, 793, 664]
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                barCategoryGap:50,
                barWidth:10,
                yAxisIndex:0,

                itemStyle:{
                    normal:{
                        barBorderRadius:20,
                        color:function(params){
                            return myColor[params.dataIndex]
                        }
                    }
                },
                label:{
                    normal:{
                        show:true,
                        position:'inside',
                        formatter:'{c}%'
                    }
                },
                data: [70, 34, 60, 78, 69]
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap:50,
                barWidth:15,
                yAxisIndex:1,
                itemStyle:{
                    color:'none',
                    borderColor:'#00c1de',
                    borderWidth:3,
                    barBorderRadius:15
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();
(function(){
    var myChart = echarts.init(document.querySelector('.line2 .chart'))
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top:'0%',
            textStyle:{
                color:'rgba(255,255,255,.5)',
                fontSize:12
            }
        },
        grid: {
            left: '10',
            top:30,
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel:{
                    color:'rgba(255,255,255,.6)',
                    fontSize:12,
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                },
                data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize:12
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisTick:{
                    show:false
                }
            }
        ],
        series: [
            {
                smooth:true,
                type: 'line',
                lineStyle:{
                    color:'#0184d5',
                    width:2
                },
            // 填充区域
            areaStyle: {
                    // 渐变色，只需要复制即可
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                    {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                    },
                    {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                    }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            symbol:'circle',
            symbolSize:8,
            itemStyle:{
                color:'#0184d5',
                borderColor:'rgba(221, 220, 107, .1)',
                borderWidth:12
            },
            showSymbol:false,
            data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40]
            },
            {
                name: '转发量',
                type: 'line',
                smooth:true,
                lineStyle:{
                    normal:{
                        color:'#00d887',
                        width:2
                    }
                },
                areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                          },
                          {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                          }
                        ],
                        false
                      ),
                      shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                  },
                  symbol:'circle',
                  symbolSize:5,
                  itemStyle:{
                    color:'#00d887',
                    borderColor:'rgba(221, 220, 107, .1)',
                    borderWidth:12
                  },
                  showSymbol:false,
                  data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20]
            },
            
        ]
    }; 
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();
(function(){
    var myChart = echarts.init(document.querySelector('.pie2 .chart'))
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom:'0%',
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:'rgba(255,255,255,.6)',
                fontSize:12
            }
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [10, 60],
                center: ['50%', '50%'],
                roseType: 'radius',
                label:{
                    fontSize:10
                },
                labelLine:{
                    length:6,
                    length:8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();