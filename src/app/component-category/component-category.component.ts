import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-component-category',
  templateUrl: 'component-category.component.html',
  styleUrls: ['component-category.component.css']
})
export class ComponentCategoryComponent implements OnInit {
  
  @Input() category: Category;

  constructor() {}

  ngOnInit() {
  }

}
