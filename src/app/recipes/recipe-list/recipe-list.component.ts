import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[
   new Recipe('Test Recipe','this is test','https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ffood-meat-recipe-power-pork-1459693%2F&psig=AOvVaw1dRs4Pxk-0gTK9ngPQH_Wx&ust=1651244855411000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCIir08yEt_cCFQAAAAAdAAAAABAJ')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
