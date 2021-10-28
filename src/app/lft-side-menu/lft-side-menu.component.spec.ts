import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LftSideMenuComponent } from './lft-side-menu.component';

describe('LftSideMenuComponent', () => {
  let component: LftSideMenuComponent;
  let fixture: ComponentFixture<LftSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LftSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
