import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// hamburger menu form only CSS ==>  https://www.youtube.com/watch?v=wpGNFGqNfdU


@Component({
  selector: 'nav-barr',
  templateUrl: './nav-barr.component.html',
  styleUrls: ['./nav-barr.component.css']
})
export class NavBarrComponent implements OnInit,  AfterViewInit {

  private expanded: boolean;

  @ViewChild('sideMenu') sideMenu: ElementRef;

  constructor() {
    this.expanded = false;
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('In AfterInit()', this.sideMenu);
  }


  openSlideMenu() {
    this.expanded = true;
  }

   closeSlideMenu() {
    this.expanded = false;
  }

  getSideMenuWidth()  {
    return (this.expanded) ? '250px' : 0;
  }

  getMainMargin()  {
    return (this.expanded) ? '250px' : 0;
  }


  getColor()  {
    return 'lightgreen';
  }




}
