import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatWallofChinaComponent } from './great-wallof-china.component';

describe('GreatWallofChinaComponent', () => {
  let component: GreatWallofChinaComponent;
  let fixture: ComponentFixture<GreatWallofChinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatWallofChinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatWallofChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
