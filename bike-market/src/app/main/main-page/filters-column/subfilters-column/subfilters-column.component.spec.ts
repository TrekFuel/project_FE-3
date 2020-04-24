import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfiltersColumnComponent } from './subfilters-column.component';

describe('SubfiltersColumnComponent', () => {
  let component: SubfiltersColumnComponent;
  let fixture: ComponentFixture<SubfiltersColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfiltersColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfiltersColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
