import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAulaComponent } from './solicitud-aula.component';

describe('SolicitudAulaComponent', () => {
  let component: SolicitudAulaComponent;
  let fixture: ComponentFixture<SolicitudAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudAulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
