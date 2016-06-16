    // import { Component, Input } from '@angular/core';
    // import { Hero } from './hero';
    // @Component({
    //   selector: 'my-hero-detail',
    //   template: `
    //     <div *ngIf="hero">
    //       <h2>{{hero.name}} details!</h2>
    //       <div><label>id: </label>{{hero.id}}</div>
    //       <div>
    //         <label>name: </label>
    //         <input [(ngModel)]="hero.name" placeholder="name"/>
    //       </div>
    //     </div>
    //   `
    // })
    // export class HeroDetailComponent {
    //   @Input() 
    //   hero: Hero;
    // }
    
//       import { Component, Input } from '@angular/core';
//     import { Hero } from './hero';
//     import { RouteParams } from '@angular/router-deprecated';
//     import { HeroService } from './hero.service';
//     @Component({
//       selector: 'my-hero-detail',
//       template: `
//         <div *ngIf="hero">
//           <h2>{{hero.name}} details</h2>
//           <div>
//             <label>id: </label>{{hero.id}}
//           </div>
//           <div>
//             <label>name: </label>
//             <input [(ngModel)]="hero.name" placeholder="name"/>
//           </div>
//         </div>
//       `
//     })
//     export class HeroDetailComponent {
//       @Input() hero: Hero;
      
//     }
    
//     constructor(
//   private heroService: HeroService,
//   private routeParams: RouteParams) {
// }
//      ngOnInit() {
//     let id = +this.routeParams.get('id');
//     this.heroService.getHero(id)
//       .then(hero => this.hero = hero);
//   }

// import { Component, OnInit } from '@angular/core';
// import { RouteParams } from '@angular/router-deprecated';

// import { Hero } from './hero';
// import { HeroService } from './hero.service';
// import { HEROES } from './mock-heroes';

// @Component({
//   selector: 'my-hero-detail',
//   templateUrl: 'app/hero-detail.component.html',
//   styleUrls: ['app/hero-detail.component.css']
// })
// export class HeroDetailComponent implements OnInit {
//   hero: Hero;

//   constructor(
//     private heroService: HeroService,
//     private routeParams: RouteParams) {
//   }

//   ngOnInit() {
//     let id = +this.routeParams.get('id');
//     this.heroService.getHero(id)
//       .then(hero => this.hero = hero);
//   }

//   goBack() {
//     window.history.back();
//   }
// }


    import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
    import { RouteParams } from '@angular/router-deprecated';
    import { Hero }        from './hero';
    import { HeroService } from './hero.service';
    @Component({
      selector: 'my-hero-detail',
      templateUrl: 'app/hero-detail.component.html',
      styleUrls: ['app/hero-detail.component.css']
    })
    export class HeroDetailComponent implements OnInit {
      @Input() hero: Hero;
      @Output() close = new EventEmitter();
      error: any;
      navigated = false; // true if navigated here
      constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
      }
      ngOnInit() {
        if (this.routeParams.get('id') !== null) {
          let id = +this.routeParams.get('id');
          this.navigated = true;
          this.heroService.getHero(id)
              .then(hero => this.hero = hero);
        } else {
          this.navigated = false;
          this.hero = new Hero();
        }
      }
      save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
              this.hero = hero; // saved hero, w/ id if new
              this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
      }
      goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
      }
    }