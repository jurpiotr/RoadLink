import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ServiceOptions } from 'selenium-webdriver/remote';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sections = [
    {id: 'oferta', classS: 'odd-section', classD: 'rotate3'},
    {id: 'oferta2', classS: 'even-section', classD: 'rotate-3'},
    {id: 'oferta', classS: 'odd-section map-section', classD: 'rotate3'},
    {id: 'oferta2', classS: 'even-section gallery-section', classD: 'rotate-3'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
