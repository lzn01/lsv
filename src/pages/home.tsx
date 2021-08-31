import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Home = () => {
    // 拿到div
    const divRef = useRef(null)
    // 挂载之后拿到div
    useEffect(() => {
        // 打印div信息
        console.log(divRef.current)
        var myChart = echarts.init(divRef.current);
        // 指定图表的配置项和数据
        var option = {
            textStyle: {
                fontSize: px(12),
                color: '#79839e'
            },
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
            grid: {
                x: px(40),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            series: [{
                name: '销量',
                type: 'bar',
                data: [10, 20, 36, 41, 15, 20, 37, 18, 29]
            }]
        };
        myChart.setOption(option);
    }, [])
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <div className="bordered 管辖统计">
                        <h2>案发派出所管辖统计</h2>
                        <div ref={divRef} className="chart"></div>
                    </div>
                </section>
                <section className="bordered section2"/>
                <section className="bordered section3"/>
                <section className="bordered section4"/>
                <section className="bordered section5"/>
            </main>
        </div>
    );
};
