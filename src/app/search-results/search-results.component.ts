import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  movieList = [];
  isSuccess = true;
  constructor(

    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(query => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d55c99dce4abb0dd43bcab53054b94ba&query=${query.search_query}`)
        .then(result => result.json())
        .then(json => {
          if (json.total_results > 0) {
            this.isSuccess = true;
            this.movieList.length = 0;
            json.results.map(item => {
              if (item.poster_path != null) {
                this.movieList.push(item);
              }
            });
          } else {
            this.isSuccess = false;
          }
        });


    });
  }

  ngOnInit() {

  }

}
