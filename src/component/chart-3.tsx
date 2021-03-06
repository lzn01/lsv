import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';

export const Chart3 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        var option = {
            legend: {
                bottom: px(10),
                textStyle: {color: 'white'},
                itemWidth: px(30),
                itemHeight: px(16)
            },
            grid: {
                x: px(20),
                x2: px(20),
                y: px(20),
                y2: px(70),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [
                {
                    name: '抢劫',
                    data: [0.01, 0.05, 0.03, 0.07, 0.08, 0.01, 0.04, 0.03, 0.09].reverse()
                },
                {
                    name: '醉驾',
                    data: [0.02, 0.03, 0.06, 0.03, 0.05, 0.09, 0.05, 0.07, 0.14].reverse()
                },
                {
                    name: '盗窃',
                    data: [0.03, 0.06, 0.04, 0.08, 0.07, 0.1, 0.09, 0.14, 0.15].reverse()
                },
                {
                    name: '故意杀人',
                    data: [0.01, 0.01, 0.03, 0.05, 0.04, 0.02, 0.03, 0.04, 0.04].reverse()
                },
                {
                    name: '故意伤人',
                    data: [0.02, 0.01, 0.02, 0.04, 0.06, 0.07, 0.07, 0.12, 0.13].reverse()
                }
            ].map(obj => ({
                ...obj,
                type: 'line',
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)}
            }))
        };
        myChart.setOption(createEchartOptions(option))
    }, []);

    return (
        <div className="bordered 案发趋势">
            <h2>案发趋势分析</h2>
            <div ref={divRef} className="chart"/>
        </div>
    );
};