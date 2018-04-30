import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import * as pbi from 'powerbi-client';



@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class DeviceDetailsComponent implements OnInit {
  private randomData: any;
  private powerTimer: number;
  private powerChart: AmChart;
  powerValue: number;
  private voltageTimer: number;
  private voltageChart: AmChart;
  voltageValue: number;
  private currentTimer: number;
  private currentChart: AmChart;
  currentValue: number;
  status = Math.random() >= 0.5;

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.randomData = setInterval(() => {
      this.generateSampleData();
      //Update power Gauge
      this.AmCharts.updateChart(this.powerChart, () => {
        this.powerChart.dataProvider = this.makeWattGaugeDataProvider();
      });
      //Update voltage gauge
      this.AmCharts.updateChart(this.voltageChart, () => {
        this.voltageChart.dataProvider = this.makeVoltGaugeDataProvider();
      });
      //update current gauge
      this.AmCharts.updateChart(this.currentChart, () => {
        this.currentChart.dataProvider = this.makeAmpGaugeDataProvider();
      });
    }, 3000);
    this.showReport();


    //powerChart
    this.powerChart = this.AmCharts.makeChart("wattGauge", this.makeWattGaugeOptions(this.makeWattGaugeDataProvider()));

    //currentChart
    this.currentChart = this.AmCharts.makeChart("ampGauge", this.makeAmpGaugeOptions(this.makeAmpGaugeDataProvider()));

    //voltGauge
    this.voltageChart = this.AmCharts.makeChart("voltGauge", this.makeVoltGaugeOptions(this.makeVoltGaugeDataProvider()));
  }


  //powerChart
  makeWattGaugeOptions(dataProvider) {
    return {
      "hideCredits": true,
      "type": "gauge",
      "theme": "light",
      "marginTop": 40,
      "marginLeft": 0,
      "marginRight": 0,
      "axes": [{
        "startAngle": -60,
        "endAngle": 60,
        "gridInside": true,
        "axisThickness": 5,
        "topTextColor": "#288E6E",
        "axisColor": "#313230",
        "inside": true,
        "axisAlpha": 1,
        "tickAlpha": 0.8,
        "tickThickness": 2,
        "valueInterval": 200,
        "bottomText": "0 W",
        "bottomTextFontSize": "25",
        "bottomTextYOffset": -130,
        "endValue": 1000
      }],
      "arrows": [{
        "innerRadius": "20%", "radius": "100%", "nailRadius": 5, "color": "red"
      }],
      "export": {
        "enabled": true
      }
    };
  }

  makeWattGaugeDataProvider() {
    var value = this.powerValue;
    if (this.powerChart) {
      if (this.powerChart) {
        if (this.powerChart.arrows[0]) {
          if (this.powerChart.arrows[0].setValue) {
            this.powerChart.arrows[0].setValue(value);
            this.powerChart.axes[0].setBottomText(value + " W");
          }
        }
      }
    }
    return this.makeWattGaugeDataProvider;
  }


  //currentChart
  makeAmpGaugeOptions(dataProvider) {
    return {
      "hideCredits": true,
      "type": "gauge",
      "theme": "light",
      "marginTop": 40,
      "marginLeft": 0,
      "marginRight": 0,
      "axes": [{
        "startAngle": -60,
        "endAngle": 60,
        "gridInside": true,
        "axisThickness": 5,
        "topTextColor": "#288E6E",
        "axisColor": "#313230",
        "inside": true,
        "axisAlpha": 1,
        "tickAlpha": 0.8,
        "tickThickness": 2,
        "valueInterval": 20,
        "bottomText": "0 A",
        "bottomTextFontSize": "25",
        "bottomTextYOffset": -130,
        "endValue": 50,
        "startValue": -50
      }],
      "arrows": [{
        "innerRadius": "20%", "radius": "100%", "nailRadius": 5, "color": "red"
      }],
      "export": {
        "enabled": true
      }
    };
  }

  makeAmpGaugeDataProvider() {
    var value = this.currentValue;
    if (this.currentChart) {
      if (this.currentChart) {
        if (this.currentChart.arrows[0]) {
          if (this.currentChart.arrows[0].setValue) {
            this.currentChart.arrows[0].setValue(value);
            this.currentChart.axes[0].setBottomText(value + " A");
          }
        }
      }
    }
    return this.makeAmpGaugeDataProvider;
  }

  //voltageChart
  makeVoltGaugeOptions(dataProvider) {
    return {
      "hideCredits": true,
      "type": "gauge",
      "theme": "light",
      "marginTop": 40,
      "marginLeft": 0,
      "marginRight": 0,
      "axes": [{
        "startAngle": -60,
        "endAngle": 60,
        "gridInside": true,
        "axisThickness": 5,
        "topTextColor": "#288E6E",
        "axisColor": "#313230",
        "inside": true,
        "axisAlpha": 1,
        "tickAlpha": 0.8,
        "tickThickness": 2,
        "valueInterval": 20,
        "bottomText": "0 V",
        "bottomTextFontSize": "25",
        "bottomTextYOffset": -130,
        "endValue": 100,
      }],
      "arrows": [{
        "innerRadius": "20%", "radius": "100%", "nailRadius": 5, "color": "red"
      }],
      "export": {
        "enabled": true
      }
    };
  }

  makeVoltGaugeDataProvider() {
    var value = this.voltageValue;
    if (this.voltageChart) {
      if (this.voltageChart) {
        if (this.voltageChart.arrows[0]) {
          if (this.voltageChart.arrows[0].setValue) {
            this.voltageChart.arrows[0].setValue(value);
            this.voltageChart.axes[0].setBottomText(value + " V");
          }
        }
      }
    }
    return this.makeVoltGaugeDataProvider;
  }


  //generateSampleData
  generateSampleData() {
    this.powerValue = Math.round(Math.random() * 1000);
    this.currentValue = Math.round(Math.random() * 50);
    this.voltageValue = Math.round(Math.random() * 100);
  }

  //emdedded PowerBi

  showReport() {
    // Report's Secured Token
    let accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiIwLjIuMCIsIndjbiI6IlBvd2VyQmlBenVyZVNhbXBsZXMiLCJ3aWQiOiJmODFjMTk2Ni1lZGVlLTQxMWItOGY4YS1mODQ0NjAxOWIwNDQiLCJyaWQiOiJjNTJhZjhhYi0wNDY4LTQxNjUtOTJhZi1kYzM5ODU4ZDY2YWQiLCJpc3MiOiJQb3dlckJJU0RLIiwiYXVkIjoiaHR0cHM6Ly9hbmFseXNpcy53aW5kb3dzLm5ldC9wb3dlcmJpL2FwaSIsImV4cCI6MTg5MzQ0ODgwMCwibmJmIjoxNDgxMDM3MTY5fQ.m4SwqmRWA9rJgfl72lEQ_G-Ijpw9Up5YwmBOfXi00YU';

    // Embed URL
    let embedUrl = 'https://embedded.powerbi.com/appTokenReportEmbed?reportId=c52af8ab-0468-4165-92af-dc39858d66ad';

    // Report ID
    let embedReportId = 'c52af8ab-0468-4165-92af-dc39858d66ad';

    // Configuration used to describe the what and how to embed.
    // This object is used when calling powerbi.embed.
    // This also includes settings and options such as filters.
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    let config = {
      type: 'report',
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    };

    // Grab the reference to the div HTML element that will host the report.
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');

    // Embed the report and display it within the div container.
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);

    // Report.off removes a given event handler if it exists.
    report.off("loaded");

    // Report.on will add an event handler which prints to Log window.
    report.on("loaded", function () {
      console.log("Loaded");
    });

  }
  ngOnDestroy() {
    clearInterval(this.randomData);
  }
}
