import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details;
  constructor(private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(param => {
      fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=d55c99dce4abb0dd43bcab53054b94ba`)
        .then(result => result.json())
        .then(json => {
          this.details = json;
        });
    });

  }

  ngOnInit() {
  }

}
