import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { YearFilterPipe } from './pipes/year-filter.pipe';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorComponent,
    TypeFilterPipe,
    YearFilterPipe,
    MovieDetailsComponent,
    MovieCardComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }