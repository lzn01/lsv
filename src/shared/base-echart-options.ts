import {px} from "./px";
// 公共部分 1.导出
export const baseEchartOptions = {
    textStyle: {
        fontSize: px(12),
        color: '#79839e'
    },
    title: {show: false},
    legend: {show: false},
    grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
    },
}