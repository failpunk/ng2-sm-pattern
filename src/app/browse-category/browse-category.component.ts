import { Component, OnInit, Input } from '@angular/core';
import { ComponentCategoryComponent } from '../component-category'
import { Category } from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'app-browse-category',
  templateUrl: 'browse-category.component.html',
  styleUrls: ['browse-category.component.css'],
  directives: [ComponentCategoryComponent]
})
export class BrowseCategoryComponent implements OnInit {
  
  @Input() title;
  @Input() description;
  @Input() categories: Category[];
  
  constructor() {}

  ngOnInit() {}
}
