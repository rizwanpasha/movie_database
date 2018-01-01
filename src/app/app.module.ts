import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NowShowingComponent } from './now-showing/now-showing.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NowShowingComponent,
    SearchResultsComponent,
    DetailsComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: NowShowingComponent, pathMatch: 'full' },
      { path: 'home', component: NowShowingComponent },
      { path: 'search-result', component: SearchResultsComponent },
      { path: 'details/:id', component: DetailsComponent }
    ], { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
