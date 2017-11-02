import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorPlayasComponent } from './gestor-playas.component';

describe('GestorPlayasComponent', () => {
  let component: GestorPlayasComponent;
  let fixture: ComponentFixture<GestorPlayasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorPlayasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorPlayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
