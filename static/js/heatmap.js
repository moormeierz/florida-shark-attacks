d3.json('static/data.geojson').then(function (data, err) {
  if (err) throw err;

  console.log(data);



  //  0, 1-10, 11-20, 21-30, 31-40, 41-50, 51-60, 61-70, 71-80, 81-90, 91-100, 101+ 

  // // Create a function for heatcolor
  // function heatcolor(attacks) {

  //   if (attacks == 0) {
  //     return '#00FF00';
  //   }
  //   if (attacks <= 10) {
  //     return '#33ff00';
  //   }
  //   if (attacks <= 20) {
  //     return '#66ff00';
  //   }
  //   if (attacks <= 30) {
  //     return '#99ff00';
  //   }
  //   if (attacks <= 40) {
  //     return '#ccff00';
  //   }
  //   if (attacks <= 50) {
  //     return '#FFFF00';
  //   }
  //   if (attacks <= 60) {
  //     return '#FFCC00';
  //   }
  //   if (attacks <= 70) {
  //     return '#ff9900';
  //   }
  //   if (attacks <= 80) {
  //     return '#ff6600';
  //   }
  //   if (attacks <= 90) {
  //     return '#FF3300';
  //   }
  //   if (attacks <= 100) {
  //     return '#FF0000';
  //   }
  //   else {
  //     return '#660000';
  //   }
  // }


  // Heat Map

  var myMap = L.map("map", {
    center: [27.6648, -81.5158],
    zoom: 7
  });

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);



  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what property in the features to use
    valueProperty: "attacks",



    // Set color scale
    scale: ['#00FF00', '#33ff00', '#66ff00', '#ccff00', '#FFFF00', '#FFCC00', '#ff9900', '#ff6600', '#FF3300', '#FF0000', '#660000'],

    // Number of breaks in step range
    steps: 12,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.namelsad +
        "<hr>Attacks :" + feature.properties.attacks
        // '<hr>Fatal :' + feature.properties.fatal +
        // '<br>Nonfatal :' + feature.properties.nonfatal +
        // '<br>Unknown :' + feature.properties.unknown
      );
    }
  }).addTo(myMap);


  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];


    // Add min & max
    var legendInfo = "<h1>Shark Attacks</h1>" +
      "<div class=\"labels\">" +
      "<div class=\"min\">" + limits[0] + "</div>" +
      "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function (limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };


  //___________________________________________________________________________


  // // Create a legend (another way)
  // colors_for_legend = ['#00FF00', '#33ff00', '#66ff00', '#99ff00', '#ccff00', '#FFFF00', '#FFCC00', '#ff9900', '#ff6600', '#FF3300', '#FF0000']

  // var legend = L.control({ position: 'bottomright' });

  // legend.onAdd = function (myMap) {

  //   var div = L.DomUtil.create('div', 'info legend'),
  //     depth = [0, 1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  //     colors = colors_for_legend;


  //   // Loop through
  //   for (var i = 0; i < depth.length; i++) {
  //     div.innerHTML +=
  //       '<i style="background:' + colors[i] + '"></i> ' +
  //       depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  //   }
  //   return div;
  // };


  // Adding legend to the map
  legend.addTo(myMap);

});
