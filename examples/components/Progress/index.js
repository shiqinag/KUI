import React, { Component } from "react";
import Indeterminate from "./Indeterminate";
import PercentOutside from "./PercentOutside";
import PercentInside from "./PercentInside";
import Circle from "./Circle";
import DocMark from "../DocMark";
import docs from "./docs";

class ProgressView extends Component {
    render() {
        return (
            <div>
                <h1>Progress 进度条</h1>
                <h3>线形进度条 — 不确定进度</h3>
                <div className="k-example">
                    <Indeterminate />
                    <DocMark source={docs.Indeterminate} />
                </div>
                <h3>线形进度条 — 百分比外显</h3>
                <div className="k-example">
                    <PercentOutside />
                    <DocMark source={docs.PercentOutside} />
                </div>
                <h3>线形进度条 — 百分比内显</h3>
                <div className="k-example">
                    <PercentInside />
                    <DocMark source={docs.PercentInside} />
                </div>
                <h3>环形进度条</h3>
                <div className="k-example">
                    <Circle />
                    <DocMark source={docs.Circle} />
                </div>
                <table className="k-example-table k-example-table-hover k-example-table-striped">
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>color</td>
                            <td>颜色</td>
                            <td>string</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>indeterminate</td>
                            <td>是否不确定进度</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>percent</td>
                            <td>百分比</td>
                            <td>number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>进度条类别，可选： line、circle</td>
                            <td>string</td>
                            <td>line</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>状态，可选：success、error</td>
                            <td>string</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>strokeWidth</td>
                            <td>进度条宽度</td>
                            <td>number</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>kStyle</td>
                            <td>
                                风格，可选值 'primary' 'info' 'success'
                                'warning' 'danger'，只在type为line下有效
                            </td>
                            <td>string</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>showText</td>
                            <td>是否显示文字</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>textInside</td>
                            <td>文字是否在进度条内，只在type为line下有效</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>圆形进度条画布宽度</td>
                            <td>number</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProgressView;
