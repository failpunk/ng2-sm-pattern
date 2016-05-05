import { Component } from '@angular/core';
import { BrowseCategoryComponent } from './browse-category/';

@Component({
  moduleId: module.id,
  selector: 'ng2-patterns-app',
  templateUrl: 'ng2-patterns.component.html',
  styleUrls: ['ng2-patterns.component.css'],
  directives: [BrowseCategoryComponent]
})

export class Ng2PatternsAppComponent {

  categories = [
    {
      name: "Arts & Humanities",
      href: "http://patterns.studymode.com/category/arts-humanities",
      icon: "icon-arts-humanities"
    },
    {
      name: "Business & Economy",
      href: "http://patterns.studymode.com/category/business-economy",
      icon: "icon-business-economy"
    },
    {
      name: "Computers & Internet",
      href: "http://patterns.studymode.com/category/computers-internet"
    },
    {
      name: "Education",
      href: "http://patterns.studymode.com/category/computers-internet"
    },
    {
      name: "Entertainment",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    },
    {
      name: "Governments",
      href: "http://patterns.studymode.com/category/business-economy"
    }
  ];

}
