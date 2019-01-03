import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomArrayControlRendererComponent } from './custom-array-control-renderer.component';

describe('CustomArrayControlRendererComponent', () => {
  let component: CustomArrayControlRendererComponent;
  let fixture: ComponentFixture<CustomArrayControlRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomArrayControlRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomArrayControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
