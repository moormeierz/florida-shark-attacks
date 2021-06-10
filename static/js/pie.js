
// Pie Chart

d3.csv('static/data_for_pie.csv').then(function (data, err) {
  if (err) throw err;

  console.log(data);


  let ctx = document.getElementById('myChart').getContext('2d');
  let labels = ["Fatal", "Nonfatal", "Unknown"];
  let colorHex = ['#FF0000', '#32CD32', '#708090'];

  let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
        data: [data[0].Fatal, data[0].Nonfatal, data[0].Unknown],
        backgroundColor: colorHex
      }],
      labels: labels
    },
    options: {
      responsive: true,
      legend: {
        position: 'bottom'
      },
      plugins: {
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: -10,
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 25,
          backgroundColor: (context) => {
            return context.dataset.backgroundColor;
          },
          font: {
            weight: 'bold',
            size: '10'
          },
          formatter: (value) => {
            return value + ' %'

          }
        }
      }
    }
  })

});
