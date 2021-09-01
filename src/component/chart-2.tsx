import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/px";
import {baseEchartOptions} from "../shared/base-echart-options";
import {createEchartOptions} from "../shared/create-echart-options";

export const Chart2 = () => {
    // 拿到div
    const divRef = useRef(null)
    // 挂载之后拿到div
    useEffect(() => {
        // 打印div信息
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        // 指定图表的配置项和数据
        var option = {
            ...baseEchartOptions,
            grid: {
                x: px(80),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
                axisLabel: {
                    fontSize: px(12),
                },
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        myChart.setOption(createEchartOptions(option));
    }, [])

    return (
        <div className="bordered 管辖统计">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}