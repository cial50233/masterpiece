import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAdsComponent } from './mini-ads.component';

describe('MiniAdsComponent', () => {
  let component: MiniAdsComponent;
  let fixture: ComponentFixture<MiniAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
