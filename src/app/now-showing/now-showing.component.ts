import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.css']
})
export class NowShowingComponent implements OnInit {

  movieList = [];
  constructor() {
    this.fetchMovie();
  }

  fetchMovie() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d55c99dce4abb0dd43bcab53054b94ba')
      .then(result => result.json())
      .then(json => {
        json.results.forEach(res => { this.movieList.push(res); });
      })
      .then(() => {
        //this.movieList.forEach(list => { console.log(list); });
      });
  }

  ngOnInit() {

  }

}
