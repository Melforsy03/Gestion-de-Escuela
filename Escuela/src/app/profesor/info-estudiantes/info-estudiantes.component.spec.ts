import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEstudiantesComponent } from './info-estudiantes.component';

describe('InfoEstudiantesComponent', () => {
  let component: InfoEstudiantesComponent;
  let fixture: ComponentFixture<InfoEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
