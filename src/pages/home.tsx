import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import {Chart1} from "../component/chart-1";
import {Chart2} from "../component/chart-2";

export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="bordered section2">
                </section>
                <section className="bordered section3"/>
                <section className="bordered section4"/>
                <section className="bordered section5"/>
            </main>
        </div>
    );
};
