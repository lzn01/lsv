import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from "../component/chart-1";
import {Chart2} from "../component/chart-2";
import {Chart3} from "../component/chart-3";
import {Chart4} from "../component/chart-4";
import {Chart5} from "../component/chart-5";

export const Home = () => {
    const year = new Date().getFullYear();
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="section2">
                    <Chart3/>
                    <Chart4/>
                </section>
                <section className="bordered section3">
                    <Chart5/>
                </section>
                <section className="bordered section4"/>
                <section className="bordered section5"/>
            </main>
            <footer>
                &copy; piggy 2021-{year}
            </footer>
        </div>
    );
};
