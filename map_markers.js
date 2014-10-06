/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

// svg path for target icon

var map = AmCharts.makeChart("chartdiv", {


    type: "map",
    theme: "dark",
    pathToImages: "ammap/images/",



    imagesSettings: {
        rollOverColor: "#089282",
        selectedColor: "#089282",
        color: "#13564e",
    },

    zoomControl: {
        buttonFillColor: "#15A892",
        panControlEnabled: false,
        zoomControlEnabled: false
    },

    areasSettings: {
        unlistedAreasColor: "#ecf0f1",
    },

    dataProvider: {
        map: "worldLow",
        images: [{
            zoomLevel: 5,
            scale: 0.5,
            latitude: -18.93333,
            longitude: 47.5167,
        },{
            zoomLevel: 5,
            scale: 0.5,
            title: "Seoul",
            latitude: 37.5667,
            longitude: 126.9781
        },{
            zoomLevel: 5,
            scale: 0.5,
            title: "Toronto",
            latitude: 43.7000,
            longitude: -79.4000
        },{
            zoomLevel: 5,
            scale: 0.5,
            title: "Pretoria",
            latitude: -25.7463,
            longitude: 28.1876
        }],



    }


});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers (event) {
    // get map object
    var map = event.chart;
    map.zoomControl = null;
    map.dragMap = false;

    
    // go through all of the images
    for( var x in map.dataProvider.images) {
        // get MapImage object
        var image = map.dataProvider.images[x];
        
        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
            image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
        image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
    }

}


// this function creates and returns a new marker element
function createCustomMarker(image) {
    // create holder
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';
    
    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);
    
    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);
    
    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);
    
    return holder;
}
