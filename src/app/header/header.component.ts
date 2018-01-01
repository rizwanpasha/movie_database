import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  result_count = 0;
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  onSearch(search_query) {
    if (search_query.value.length > 0) {
      console.log(search_query.value);
      this.router.navigate(['/search-result'], { queryParams: { search_query: search_query.value } });
    }
  }

  goBack() {
    window.history.back();
  }
}
