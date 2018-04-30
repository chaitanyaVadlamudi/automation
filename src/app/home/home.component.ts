import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showReport();

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
}
