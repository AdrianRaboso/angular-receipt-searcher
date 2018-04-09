import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RecipeSeekerComponent } from './recipes/recipe-seeker/recipe-seeker.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeSeekerComponent,
        RecipeListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
