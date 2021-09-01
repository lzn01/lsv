import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/px";
import {baseEchartOptions} from "../shared/base-echart-options";
import {createEchartOptions} from "../shared/create-echart-options";

export const Chart1 = () => {
    // 拿到div
    const divRef = useRef(null)
    // 挂载之后拿到div
    useEffect(() => {
        // 打印div信息
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        // 指定图表的配置项和数据
        var option = {
            ...baseEchartOptions, // 2. 引入公共部分
            xAxis: {
                data: ["兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区", "兰州新区"],
                axisTick: {show: false},
                axisLabel: {
                    fontSize: px(12),
                    // 实现x轴换行
                    formatter(val) {
                        const array = val.split('');
                        if (val.length <= 2) {
                            return val
                        }
                        array.splice(2, 0, '\n');
                        return array.join('')
                    }
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLabel: {
                    fontSize: px(12),
                },
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                }
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 20, 36, 41, 15, 20, 37, 18, 29]
            }]
        };
        myChart.setOption(createEchartOptions(option));
    }, [])

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}