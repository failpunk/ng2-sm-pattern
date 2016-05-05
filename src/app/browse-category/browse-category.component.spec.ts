import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowseCategoryComponent } from './browse-category.component';

describe('Component: BrowseCategory', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BrowseCategoryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BrowseCategoryComponent],
      (component: BrowseCategoryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BrowseCategoryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BrowseCategoryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-browse-category></app-browse-category>
  `,
  directives: [BrowseCategoryComponent]
})
class BrowseCategoryComponentTestController {
}

