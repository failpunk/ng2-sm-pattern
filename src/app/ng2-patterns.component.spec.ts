import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2PatternsAppComponent } from '../app/ng2-patterns.component';

beforeEachProviders(() => [Ng2PatternsAppComponent]);

describe('App: Ng2Patterns', () => {
  it('should create the app',
      inject([Ng2PatternsAppComponent], (app: Ng2PatternsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-patterns works!\'',
      inject([Ng2PatternsAppComponent], (app: Ng2PatternsAppComponent) => {
    expect(app.title).toEqual('ng2-patterns works!');
  }));
});
