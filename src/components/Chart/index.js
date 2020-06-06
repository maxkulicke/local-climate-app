import React from 'react';
import ChartistGraph from 'react-chartist';
import { useStoreContext } from "../../utils/GlobalState";



class Chart extends React.Component {
  
  render() {
    console.log(this.props.name);
    console.log(this.props.data);
    let { data } = this.props;

    let chartData = {
      labels : Object.keys(data),
      series : [],
    }
    let dataSeries = [];
    for (const year of chartData.labels) {
      dataSeries.push(data[year]);
    }
    chartData.series.push(dataSeries);
    console.log(chartData);
    // console.log(values);
    let chartOptions = {
      showArea: true,
      showLine: false,
      showPoint: false,
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

// function Chart(props) {
//   const [state, dispatch] = useStoreContext();
//   let { data } = state;

//   const { name } = props;
//   console.log(props);

  // var data = {
  //   labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  //   series: [
  //     [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  //   ]
  // };

  // var simpleLineChartData = {
  //   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  //   series: [
  //     [12, 9, 7, 8, 5],
  //     [2, 1, 3.5, 7, 3],
  //     [1, 3, 4, 5, 6]
  //   ]
  // }

  // var options = {
  //   high: 10,
  //   low: -10,
  //   axisX: {
  //     labelInterpolationFnc: function (value, index) {
  //       return index % 2 === 0 ? value : null;
  //     }
  //   }
  // };

  // var type = 'Bar'

//   return (
//     <div>
//       {/* <ChartistGraph data={simpleLineChartData} type={'Line'} /> */}
//     </div>
//   )

// }

export default Chart;
