import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAroundComponent } from './find-around.component';

describe('FindAroundComponent', () => {
  let component: FindAroundComponent;
  let fixture: ComponentFixture<FindAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
