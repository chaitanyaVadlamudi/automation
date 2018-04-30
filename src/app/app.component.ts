import { Component, EventEmitter, OnInit } from '@angular/core';
import { TreeDragDropService } from 'primeng/primeng';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/primeng'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nodes: any[];
  selectedFile: TreeNode;
  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;
  gaugeType = "full";
  gaugeValue = 133;
  gaugeLabel = "Active";
  gaugeAppendText = "/183";
  constructor(private router: Router) { }
  ngOnInit() {

    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
    this.opts = {
      position: "right",
      barBackground: "#C9C9C9", // #C9C9C9
      barOpacity: "0.8",
      barWidth: "1",
      barBorderRadius: "20",
      barMargin: "0",
      gridBackground: "#D9D9D9",
      gridOpacity: "1",
      gridWidth: "2",
      gridBorderRadius: "20",
      gridMargin: "0",
      alwaysVisible: false,
      visibleTimeout: 1000
    }


    this.nodes = [{
      "label": "Location 1",
      "data": "Documents Folder",
      "expandedIcon": "",
      "collapsedIcon": "",
      "expanded": true,
      "styleClass": "list-unstyled font-weight-bold",
      "icon": "",
      "children": [{
        "label": "Machine 1",
        "data": "Documents Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "icon": "",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 1",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 2",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 3",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 4",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 5",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 6",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      },
      {
        "label": "Machine 2",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "Sensor 7",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 8",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 9",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 10",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      },
      {
        "label": "Machine 3",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 11",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 12",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 13",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }, {
        "label": "Machine 4",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 14",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 15",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 16",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 17",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }, {
        "label": "Machine 5",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "Sensor 18",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 19",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 20",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 21",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 22",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }
      ]
    }, {
      "label": "Location 2",
      "data": "Documents Folder",
      "expandedIcon": "",
      "collapsedIcon": "",
      "expanded": true,
      "styleClass": "list-unstyled font-weight-bold",
      "icon": "",
      "children": [{
        "label": "Machine 1",
        "data": "Documents Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "icon": "",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 1",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 2",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 3",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 4",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 5",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 6",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      },
      {
        "label": "Machine 2",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "Sensor 7",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 8",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 9",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 10",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      },
      {
        "label": "Machine 3",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 11",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 12",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 13",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }, {
        "label": "Machine 4",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "NAT",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 14",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 15",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 16",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 17",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }, {
        "label": "Machine 5",
        "data": "Pictures Folder",
        "expandedIcon": "",
        "collapsedIcon": "",
        "styleClass": "list-unstyled font-weight-bold",
        "children": [{
          "label": "Sensor 18",
          "data": "",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 19",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 20",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        },
        {
          "label": "Sensor 21",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }, {
          "label": "Sensor 22",
          "data": "Home Folder",
          "expandedIcon": "",
          "collapsedIcon": "",
          "styleClass": "list-unstyled font-weight-normal"
        }
        ]
      }
      ]
    }];
  }


  nodeSelect(event) {
    if (event["node"]["parent"] == undefined) {
      return;
    }
    else
      this.router.navigate(['sensorDetails']);
  }

  nodeUnselect(event) {

  }

}
