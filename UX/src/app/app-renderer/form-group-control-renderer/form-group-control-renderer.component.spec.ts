import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupControlRendererComponent } from './form-group-control-renderer.component';

describe('FormGroupControlRendererComponent', () => {
  let component: FormGroupControlRendererComponent;
  let fixture: ComponentFixture<FormGroupControlRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupControlRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
