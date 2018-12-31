import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlRendererComponent } from './form-control-renderer.component';

describe('FormControlRendererComponent', () => {
  let component: FormControlRendererComponent;
  let fixture: ComponentFixture<FormControlRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
