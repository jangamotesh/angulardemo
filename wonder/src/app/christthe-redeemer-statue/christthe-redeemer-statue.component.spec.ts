import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristtheRedeemerStatueComponent } from './christthe-redeemer-statue.component';

describe('ChristtheRedeemerStatueComponent', () => {
  let component: ChristtheRedeemerStatueComponent;
  let fixture: ComponentFixture<ChristtheRedeemerStatueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristtheRedeemerStatueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristtheRedeemerStatueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
