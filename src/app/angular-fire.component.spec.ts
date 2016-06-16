import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularFireAppComponent } from '../app/angular-fire.component';

beforeEachProviders(() => [AngularFireAppComponent]);

describe('App: AngularFire', () => {
  it('should create the app',
      inject([AngularFireAppComponent], (app: AngularFireAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-fire works!\'',
      inject([AngularFireAppComponent], (app: AngularFireAppComponent) => {
    expect(app.title).toEqual('angular-fire works!');
  }));
});
