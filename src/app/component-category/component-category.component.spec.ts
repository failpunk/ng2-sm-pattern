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
import { ComponentCategoryComponent } from './component-category.component';

describe('Component: ComponentCategory', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ComponentCategoryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ComponentCategoryComponent],
      (component: ComponentCategoryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ComponentCategoryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ComponentCategoryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-component-category></app-component-category>
  `,
  directives: [ComponentCategoryComponent]
})
class ComponentCategoryComponentTestController {
}

