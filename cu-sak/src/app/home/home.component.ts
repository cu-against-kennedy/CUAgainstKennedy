import { Component, OnInit } from '@angular/core';
import { state, transition, animate, style, trigger, query, stagger, animateChild } from '@angular/animations';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1, transform: 'translateY(10px)'})),
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(0px)'}),
        animate(1500)
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
    trigger('Wow', [
      transition(':enter', [
        style({opacity: 0, }),
        animate(600)
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
    // preppedText: String[] = ['anti-Union', 'anti-Abortion', 'anti-LGBTQIA2+', 'anti-Immigration', 'anti-Environment', 'anti-Public Education', 'anti-Stem Cell Research', 'Unqualified and Not right for CU'];
     preppedText: String[] = ['inclusive,', 'democratic,', 'and transparent', 'presidential search process.'];
    whyText: any[] = [
      {
        percent: true,
        number: 17,
        text: 'rating from the National Education Association'
      },
      {
        percent: false,
        number: 1,
        text: 'cosponsored constitutional amendment nationally defining marriage as between a man and woman'
      },
      {
        percent: true,
        number: 7,
        text: 'rating from the American Civil Liberties Union'
      },
      {
        percent: true,
        number: 0,
        text: 'rating from the American Public Health Network'
      },
      {
        percent: true,
        number: 0,
        text: 'rating from the AFL-CIO, a federation of 55 national and international labor unions '
      },
      {
        percent: true,
        number: 0,
        text: 'rating from NARAL Pro-Choice America'
      }
    ];
    carouselText: String[] = [];
    carouselIndex = 0;
    finalStat = 4;
    timer: any;
    upperAnimDone = false;
    constructor() { }

    ngOnInit() {
      // if ( this.preppedText[0] ) {
      //   this.carouselText.push(this.preppedText[0]);
      // }
      this.finalStat = this.preppedText.length - 1;
      this.timer = setInterval(() => {
        if (this.carouselIndex < this.preppedText.length) {
          this.carouselText.unshift(this.preppedText[this.carouselIndex]);
          this.carouselIndex++;
        } else {
          clearInterval(this.timer);
        }
      }, 750);
    }
    scrollToElement($element): void {
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}


