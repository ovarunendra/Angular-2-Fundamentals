declare var require: any

import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

let nlp = require('nlp_compromise');

@RouteConfig([
	{
	  path: '/dashboard',
	  name: 'Dashboard',
	  component: DashboardComponent,
	  useAsDefault: true
	},
  	{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  	},
  	{
	  path: '/detail/:id',
	  name: 'HeroDetail',
	  component: HeroDetailComponent
	}
])
@Component({
	selector: 'my-app',
	template: `
		<h1 style="display: inline-block;">{{title}}</h1>
		<button (click)="nlpTest()">NLP</button>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HeroService]
})
export class AppComponent {
	title = 'Tour of Heroes';

	nlpTest() {
		console.log("Is Plural: "+nlp.noun(this.title).is_plural());
		alert("Title: "+nlp.noun(this.title).pluralize());
	}
}