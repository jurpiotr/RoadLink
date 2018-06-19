
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  //  $('#carOousel').carousel();
  $(document).ready(function() {
    $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop();

      if (scrollTop > 90) {
        $('#navigation').addClass('nav-changer');
        $('#navigation').removeClass('nav-init');
      } else {
        $('#navigation').addClass('nav-init');
        $('#navigation').removeClass('nav-changer');
      }

    });
  });
  }
}
