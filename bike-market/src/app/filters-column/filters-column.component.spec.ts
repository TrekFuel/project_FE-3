import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersColumnComponent } from './filters-column.component';

describe('FiltersColumnComponent', () => {
  let component: FiltersColumnComponent;
  let fixture: ComponentFixture<FiltersColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
