import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMediosComponent } from './solicitud-medios.component';

describe('SolicitudMediosComponent', () => {
  let component: SolicitudMediosComponent;
  let fixture: ComponentFixture<SolicitudMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudMediosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
