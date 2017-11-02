import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocorristaComponent } from './socorrista.component';

describe('SocorristaComponent', () => {
  let component: SocorristaComponent;
  let fixture: ComponentFixture<SocorristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocorristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocorristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
