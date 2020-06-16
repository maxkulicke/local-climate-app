import React from 'react';
import ChartistGraph from 'react-chartist';
import { useStoreContext } from "../../utils/GlobalState";



class Chart extends React.Component {

  render() {
    // console.log(this.props.name);
    // console.log(this.props.data);
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
    // console.log(chartData);

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

    return (
      <div>
        {this.props.name}
        <br />
        <br />
        <br />
        <ChartistGraph data={chartData} options={chartOptions} type={'Line'} />
      </div>
    );
  }
}

export default Chart;
