import { Component } from '@angular/core';
import { Recipe } from './recipes/shared/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataSource: Array<Recipe> = [];

  searchEvent(event) {
    this.dataSource = event;
  }

}
