import { Component, EventEmitter, Output, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RecipeListService } from '../shared/recipe-list.service';
import { Observable } from 'rxjs/Rx';
import { Recipe } from '../shared/recipe';
import {ToastsManager, Toast} from 'ng2-toastr';

@Component({
  selector: 'app-recipe-seeker',
  templateUrl: './recipe-seeker.component.html',
  styleUrls: ['./recipe-seeker.component.css']
})
export class RecipeSeekerComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();
  @ViewChild('seeker') seeker;

  constructor(private recipeService: RecipeListService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.firstSearch();
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    Observable.fromEvent(this.seeker.nativeElement, 'keyup')
      .map((x: any) => x.target.value)
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(word => this.recipeService.getFilteredRecipes(word))
      .subscribe((recipes: Recipe) => this.searchEvent.emit(recipes.results),
        (error) => this.showError());
  }

  firstSearch() {
    this.recipeService.getFilteredRecipes()
      .subscribe((recipes) => this.searchEvent.emit(recipes.results),
        (error) => this.showError());
  }

  showError() {
    this.toastr.error('', 'Oops! Ha habido un error en el servidor');
  }

}
