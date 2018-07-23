import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
	
  	constructor(
  		private heroService: HeroService,
  		private route: ActivatedRoute,
  		private location: Location
  		) { }

  	ngOnInit() {
  		this.getHero();
  	}

  	public getHero(): void {
  		const id = parseInt(this.route.snapshot.paramMap.get('id'));
  		this.heroService.getHero(id)
  			.subscribe(hero => this.hero = hero);
  	}

  	public goBack(): void {
  		this.location.back();
  	}

    public save(): void {
      this.heroService.save(this.hero)
         .subscribe(() => this.goBack());
    }
}