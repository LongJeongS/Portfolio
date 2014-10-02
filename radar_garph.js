var chart = AmCharts.makeChart("chartdiv_radar", {
    "type": "radar",
    "theme": "none",
    "dataProvider": [{
        "Skills": "Development Skills",
        "level": 156.9
    }, {
        "Skills": "Design Skills",
        "level": 131.1
    }, {
        "Skills": "Problem Solving",
        "level": 115.8
    }, {
        "Skills": "Communication",
        "level": 109.9
    }, {
        "Skills": "Early Bird",
        "level": 108.3
    }, {
        "Skills": "Gaming",
        "level": 99
    }],
    "valueAxes": [{
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.15
    }],
    "startDuration": 2,
    "graphs": [{
        "balloonText": "[[value]] litres of beer per year",
        "bullet": "round",
        "valueField": "litres"
    }],
    "categoryField": "country",
    "exportConfig": {
        "menuTop":"10px",
        "menuRight":"10px",
        "menuItems": [{
            "icon": '/lib/3/images/export.png',
            "format": 'png'
        }]
    }
});