import { Component, OnInit, HostListener } from '@angular/core';
import {animate, animateChild, query, stagger, state, style, transition, trigger} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(150)
      ])
    ]),
    trigger('statements', [
      transition(':enter', [
        style({ opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@statements', stagger(300, animateChild()))
      ]),
    ]),
    trigger('grow', [
      transition(':enter', [
        style({height: 0}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ height: '*' }))
      ]),
    ]),
    trigger('menuMovement', [
      state('up', style({height: 0 })),
      state('down', style({height: '*'})),
      transition('up => down', [
        animate(350)
      ]),
      transition('down => up', [
        animate(350)
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  screenWidth: number;
  screenHeight: number;
  smallScreen: boolean = false;
  menuStatus: string = 'down';
  viewMenuItems: boolean = true;
  heightString = '100px';
  menuClosed = true;
  actionArray: any[] = [
    {
      name: 'What you can do',
      routerLoc: 'WhatYouCanDo'
    },
    // {
    //   name: 'Who is Kennedy?',
    //   routerLoc: 'Home'
    // },
    {
      name: 'Media',
      routerLoc: 'MediaResources'
    },
    // {
    //   name: 'About Us',
    //   routerLoc: 'Home'
    // },
  ];
  constructor(private router: Router) { }
  previousScrollY: number = undefined;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if ( this.previousScrollY > window.scrollY ) {
      this.menuStatus = 'down';
    }
    else {
      this.menuStatus = 'up';
    }
    this.previousScrollY = window.scrollY;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.handleScreenSize(this.screenWidth);
  }
  handleScreenSize(screenSize: number): void {
    this.menuClosed = this.smallScreen = screenSize < 1100;
    if ( this.menuClosed ) {
      this.heightString = '100px';
    }
  }
  @HostListener( 'window:resize', ['$event'] )
  onResize( event ): void {
    this.screenWidth = window.innerWidth;
    this.handleScreenSize( this.screenWidth );
  }
  handleOpenMenuClick() {
    this.menuClosed = false;
    this.heightString = '100vh';
  }
  handleCloseMenuClick() {
    this.menuClosed = true;
    this.heightString = '100px';
  }
  menuAnimDone(event: any) {
    if ( this.menuStatus === 'down' ) {
      this.viewMenuItems = true;
    }
    else {
      this.viewMenuItems = false;
    }
  }
  menuAnimStart(event: any) {
    if ( event.toState === 'up' ) {
      this.viewMenuItems = false;
    }
  }
  navigateToPage(loc: string) {
    this.router.navigate(['/' + loc]);
    this.handleCloseMenuClick();
  }

}
