// Bar Chart


d3.csv('static/data_for_bar.csv').then(function (data, err) {
  if (err) throw err;

  console.log(data);



  let btx = document.getElementById('myChart2').getContext('2d');
  let labels2 = ["East", "West", "South", "Inland"];
  let colorHex2 = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B'];

  let myChart2 = new Chart(btx, {
    type: 'bar',
    data: {
      datasets: [{
        data: [data[0].Attacks, data[3].Attacks, data[2].Attacks, data[1].Attacks],
        backgroundColor: colorHex2
      }],
      labels: labels2
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
