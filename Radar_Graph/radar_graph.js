           var chart;

            var chartData = [
                {
                    "skill": "Development Skill",
                    "level": 180,
                    "description": "My strongest trait, with >3 years of experience"
                },
                {
                    "skill": "Design Skill",
                    "level": 145,
                    "description": "Adequate design skill with Adobe Photoshop"
                },
                {
                    "skill": "Problem Solving",
                    "level": 165,
                    "description": "Always up for a mind-boggling problems to solve"
                },
                {
                    "skill": "Liquor Capacity",
                    "level": 130,
                    "description": "Can definently handle my liquor"
                },
                {
                    "skill": "Early Bird",
                    "level": 100,
                    "description": "I absolutley despise the early mornings"
                },
                {
                    "skill": "Gaming Skill",
                    "level": 135,
                    "description": "Big fan of MOBA, RPG, and FPS games"
                }
            ];

            AmCharts.ready(function () {
                // RADAR CHART
                chart = new AmCharts.AmRadarChart();
                chart.dataProvider = chartData;
                chart.categoryField = "skill";
                chart.startDuration = 2;
                chart.color ="#e74c3c";
                chart.creditsPosition = "bottom-left";
                chart.fontFamily ='Montserrat';
                chart.fontSize ="15";

                // VALUE AXIS
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0.15;
                valueAxis.minimum = 0;
                valueAxis.dashLength = 3;
                valueAxis.axisTitleOffset = 20;
                valueAxis.gridCount = 5;
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "level";
                graph.bullet = "round";
                graph.descriptionField ="description";
                graph.balloonText = "[[description]]";
                chart.addGraph(graph);


                // WRITE
                chart.write("chartdiv_radar");
            });