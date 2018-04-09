import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Recipe components */
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeSeekerComponent } from './recipe-seeker/recipe-seeker.component';

/* Recipe Services */
import { RecipeListService } from './shared/recipe-list.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RecipeListComponent,
    RecipeSeekerComponent
  ],
  exports: [
    RecipeListComponent,
    RecipeSeekerComponent
  ],
  providers: [RecipeListService]
})
export class RecipesModule {}
