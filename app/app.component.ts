    // import { Component } from '@angular/core';
    // export class Hero {
    //   id: number;
    //   name: string;
    // }
    // @Component({
    //   selector: 'my-app',
    //   template:`
    //     <h1>{{title}}</h1>
    //     <h2>{{hero.name}} details!</h2>
    //     <div><label>id: </label>{{hero.id}}</div>
    //     <div>
    //       <label>name: </label>
    //       <input [(ngModel)]="hero.name" placeholder="name">
    //     </div>
    //     `
    // })
    
    // export class AppComponent {
    //   title = 'Tour of Heroes';
    //   hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    //   };
    // }


    // import { Component, OnInit } from '@angular/core';
    // import { Hero } from './hero';
    // import { HeroDetailComponent } from './hero-detail.component';
    // import { HeroService } from './hero.service';
    // @Component({
    //   selector: 'my-app',
    //   template:`
    //     <h1>{{title}}</h1>
    //     <h2>My Heroes</h2>
    //     <ul class="heroes">
    //       <li *ngFor="let hero of heroes"
    //         [class.selected]="hero === selectedHero"
    //         (click)="onSelect(hero)">
    //         <span class="badge">{{hero.id}}</span> {{hero.name}}
    //       </li>
    //     </ul>
    //     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    //   `,
    //   styles: [`
    //     .selected {
    //       background-color: #CFD8DC !important;
    //       color: white;
    //     }
    //     .heroes {
    //       margin: 0 0 2em 0;
    //       list-style-type: none;
    //       padding: 0;
    //       width: 15em;
    //     }
    //     .heroes li {
    //       cursor: pointer;
    //       position: relative;
    //       left: 0;
    //       background-color: #EEE;
    //       margin: .5em;
    //       padding: .3em 0;
    //       height: 1.6em;
    //       border-radius: 4px;
    //     }
    //     .heroes li.selected:hover {
    //       background-color: #BBD8DC !important;
    //       color: white;
    //     }
    //     .heroes li:hover {
    //       color: #607D8B;
    //       background-color: #DDD;
    //       left: .1em;
    //     }
    //     .heroes .text {
    //       position: relative;
    //       top: -3px;
    //     }
    //     .heroes .badge {
    //       display: inline-block;
    //       font-size: small;
    //       color: white;
    //       padding: 0.8em 0.7em 0 0.7em;
    //       background-color: #607D8B;
    //       line-height: 1em;
    //       position: relative;
    //       left: -1px;
    //       top: -4px;
    //       height: 1.8em;
    //       margin-right: .8em;
    //       border-radius: 4px 0 0 4px;
    //     }
    //   `],
    //   directives: [HeroDetailComponent],
    //   providers: [HeroService]
    // })
    // export class AppComponent implements OnInit {
    //   title = 'Tour of Heroes';
    //   heroes: Hero[];
    //   selectedHero: Hero;
    //   constructor(private heroService: HeroService) { }
    //   getHeroes() {
    //     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //   }
    //   ngOnInit() {
    //     this.getHeroes();
    //   }
    //   onSelect(hero: Hero) { this.selectedHero = hero; }
    // }
    
//         import { Component }       from '@angular/core';
//     import { HeroService }     from './hero.service';
//     import { HeroesComponent } from './heroes.component';
//     import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
//     @Component({
//       selector: 'my-app',
//    template: `
//   <h1>{{title}}</h1>
//   <a [routerLink]="['Heroes']">Heroes</a>
//   <router-outlet></router-outlet>
// `,
//       directives: [ROUTER_DIRECTIVES],
// providers: [
//   ROUTER_PROVIDERS,
//   HeroService
// ]
//     })
//     export class AppComponent {
//       title = 'Tour of Heroes';
//     };
    
//     @RouteConfig([
//   {
//     path: '/heroes',
//     name: 'Heroes',
//     component: HeroesComponent
//   }
// ])




//  import { Component } from '@angular/core';
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroService } from './hero.service';

// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>{{title}}</h1>
//     <nav>
//       <a [routerLink]="['Dashboard']">Dashboard</a>
//       <a [routerLink]="['Heroes']">Heroes</a>
//     </nav>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['app/app.component.css'],
//   directives: [ROUTER_DIRECTIVES],
//   providers: [
//     ROUTER_PROVIDERS,
//     HeroService
//   ]
// })
// @RouteConfig([
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: DashboardComponent,
//     useAsDefault: true
//   },
//   {
//     path: '/detail/:id',
//     name: 'HeroDetail',
//     component: HeroDetailComponent
//   },
//   {
//     path: '/heroes',
//     name: 'Heroes',
//     component: HeroesComponent
//   }
// ])
// export class AppComponent {
//   title = 'Tour of Heroes';
// }



    import { Component } from '@angular/core';
    import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
    import { DashboardComponent }  from './dashboard.component';
    import { HeroesComponent }     from './heroes.component';
    import { HeroDetailComponent } from './hero-detail.component';
    import { HeroService }         from './hero.service';
    @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['Dashboard']">Dashboard</a>
          <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
      `,
      styleUrls: ['app/app.component.css'],
      directives: [ROUTER_DIRECTIVES],
      providers: [
        ROUTER_PROVIDERS,
        HeroService,
      ]
    })
    @RouteConfig([
      { path: '/dashboard',  name: 'Dashboard',  component: DashboardComponent, useAsDefault: true },
      { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
      { path: '/heroes',     name: 'Heroes',     component: HeroesComponent }
    ])
    export class AppComponent {
      title = 'Tour of Heroes';
    }