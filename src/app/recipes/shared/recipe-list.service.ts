import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';


@Injectable()
export class RecipeListService {

  private apiUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilteredRecipes(search: String = ''): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}?q=${search}`);
  }

}
