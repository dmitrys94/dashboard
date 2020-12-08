import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.scss']
})
export class ThermostatComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    //   $("#slider").roundSlider({
    //     radius: 72,
    //     circleShape: "half-top",
    //     sliderType: "min-range",
    //     mouseScrollAction: true,
    //     value: 19,
    //     handleSize: "+5",
    //     min: 10,
    //     max: 50
    // });
    
  }


  
}
