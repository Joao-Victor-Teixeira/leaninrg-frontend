import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rotacustom } from './rotacustom';

describe('Rotacustom', () => {
  let component: Rotacustom;
  let fixture: ComponentFixture<Rotacustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rotacustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rotacustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
