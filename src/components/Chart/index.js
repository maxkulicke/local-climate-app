import React from 'react';
import ChartistGraph from 'react-chartist';
import { useStoreContext } from "../../utils/GlobalState";
import dataSets from "../../utils/dataSets"
import "./index.css"


class Chart extends React.Component {

  render() {
    let { data } = this.props;

    let chartData = {
      labels: Object.keys(data),
      series: [],
    }
    let dataSeries = [];
    for (const year of chartData.labels) {
      dataSeries.push(data[year]);
    }
    chartData.series.push(dataSeries);

    let chartOptions = {
      showArea: true,
      showLine: false,
      showPoint: true,
      axisX: {
        showLabel: true,
        showGrid: true
      },
      axisY: {
        showLabel: true,
        showGrid: true
      }
    }

    const findDescription = (id) => {
      let description = "";
      for (let i = 0; i < dataSets.length; i++) {
        if (dataSets[i].id === id) {
          description = dataSets[i].name;
          i = dataSets.length;
        }
      }
      return description;
    }

    const findUnits = (id) => {
      let units = "";
      for (let i = 0; i < dataSets.length; i++) {
        if (dataSets[i].id === id) {
          units = dataSets[i].unit;
          i = dataSets.length;
        }
      }
      return units;
    }

    return (
      <div>
        <br />
        {this.props.name}: {findDescription(this.props.name)}, measured in {findUnits(this.props.name)}
        <br />
        <br />
        <br />
        <ChartistGraph data={chartData} options={chartOptions} type={'Line'} className="chart"/>
      </div>
    );
  }
}

export default Chart;
