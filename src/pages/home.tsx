import React from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from "../component/chart-1";
import {Chart2} from "../component/chart-2";
import {Chart3} from "../component/chart-3";
import {Chart4} from "../component/chart-4";
import {Chart5} from "../component/chart-5";
import {Chart6} from "../component/chart-6";
import {Chart7} from "../component/chart-7";
import {Chart8} from "../component/chart-8";
import {Chart9} from "../component/chart-9";

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
                <section className="section4">
                    <Chart6/>
                    <div className="bordered 年龄段">
                        <h2>犯罪人员年龄段分布</h2>
                        <div className="charts">
                            <Chart7/>
                            <Chart8/>
                            <Chart9/>
                        </div>
                    </div>
                </section>
                <section className="bordered section5"/>
            </main>
            <footer>
                &copy; piggy 2021-{year}
            </footer>
        </div>
    );
};
