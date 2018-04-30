import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceRequest implements OnInit {
  environment: any;
  constructor(@Inject(DOCUMENT) private document: any, private http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  /* Global Service call for Envionment URL set-up */
  getEnvironment() {
    this.environment = window.location.hostname;
    var data = {};
    switch (this.environment) {
      /* LocalHost Urls - Used SIT information*/
      case 'localhost':
        data = {
          env: 'dev',
          openApiEndPoint: 'http',
        };
        break;

      /* UAT Urls */
      case 'localhost':
        data = {
          env: 'dev',
          openApiEndPoint: 'place a url',
        };
        break;

      /* Default url's */
      default:
        data = {
          env: 'dev',
          openApiEndPoint: 'place some url',
        };
    }
    return data;
  }


  testGetMethod() {
    let envVar = this.getEnvironment();
    let headers = new Headers({
      // "authorization": "Basic " + envVar['accessTokenKey'],
      "content-type": "application/x-www-form-urlencoded",
    });
    let options = new RequestOptions({ headers: headers });
    let reqBody = ``;

    // Testing URL
    return this.http.get('https://api.github.com/users/hadley/orgs').map((res: Response) => {
       return res.json();
      });
  }


}
