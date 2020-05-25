import React from 'react';
import ChartistGraph from 'react-chartist';

function Chart(props) {

  // console.log(props.poop);

  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };

  var simpleLineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }

  var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  var type = 'Bar'

  return (
    <div>
      <ChartistGraph data={simpleLineChartData} type={'Line'} />
    </div>
  )

}

export default Chart;
