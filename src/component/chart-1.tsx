import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/px";
import {createEchartOptions} from "../shared/create-echart-options";

export const Chart1 = () => {
    // 拿到div
    const divRef = useRef(null)
    const myChart = useRef(null);
    // const name = ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "兰州新区"];
    const data = [
        {name: '城关区', num: 10},
        {name: '七里河区', num: 20},
        {name: '西固区', num: 18},
        {name: '安宁区', num: 36},
        {name: '红古区', num: 41},
        {name: '永登县', num: 15},
        {name: '皋兰县', num: 26},
        {name: '榆中县', num: 37},
        {name: '兰州新区', num: 29}
    ]

    // 挂载之后拿到div
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '城关区', num: Math.random() * 100},
                {name: '七里河区', num: Math.random() * 100},
                {name: '西固区', num: Math.random() * 100},
                {name: '安宁区', num: Math.random() * 100},
                {name: '红古区', num: Math.random() * 100},
                {name: '永登县', num: Math.random() * 100},
                {name: '皋兰县', num: Math.random() * 100},
                {name: '榆中县', num: Math.random() * 100},
                {name: '兰州新区', num: Math.random() * 100}
            ];
            setData(newData);
        }, 3000);
    }, []);

    const setData = (data) => {
        myChart.current.setOption(createEchartOptions({
            xAxis: {
                data: data.map(i => i.name),
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
                type: 'bar',
                data: data.map(i => i.num)
            }]
        }))
    }
    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        setData(data)
    }, [])

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"/>
        </div>
    )
}