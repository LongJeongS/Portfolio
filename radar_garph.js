var chart = AmCharts.makeChart("chartdiv_radar", {
    "type": "radar",
    "theme": "none",
    "dataProvider": [{
        "skill": "Development Skills",
        "level": 156.9
    }, {
        "skill": "Design Skills",
        "level": 131.1
    }, {
        "skill": "Problem Solving",
        "level": 115.8
    }, {
        "skill": "Communication",
        "level": 109.9
    }, {
        "skill": "Early Bird",
        "level": 108.3
    }, {
        "skill": "Gaming",
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
        "valueField": "level"
    }],
    "categoryField": "skill",
    "exportConfig": {
        "menuTop":"10px",
        "menuRight":"10px",
        "menuItems": [{
            "icon": 'amcharts/images/export.png',
            "format": 'png'
        }]
    }
});