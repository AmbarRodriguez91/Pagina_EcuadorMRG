import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRegionesComponent } from './info-regiones.component';

describe('InfoRegionesComponent', () => {
  let component: InfoRegionesComponent;
  let fixture: ComponentFixture<InfoRegionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRegionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
