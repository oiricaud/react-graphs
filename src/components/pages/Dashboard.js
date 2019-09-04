import React, {Component} from "react";
import MyBarChart from "../charts/MyBarChart";
import MyPieChart from "../charts/MyPieChart";

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    renderBarChartElement(){
        if (this.props.barChartState) {
            return <MyBarChart> </MyBarChart>
        }
        return null;
    }
    renderPieChartElement() {
        if (this.props.pieChartState) {
            return <MyPieChart> </MyPieChart>
        }
        return null;
    }
    render() {
        return (
            <div>
                <div className="App"> </div>
                <h1>Dashboard</h1>
                { this.renderBarChartElement() }
                { this.renderPieChartElement() }
            </div>
        )
    }
}

export default Dashboard;