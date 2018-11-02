import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteffectivedateComponent } from './selecteffectivedate.component';

describe('SelecteffectivedateComponent', () => {
  let component: SelecteffectivedateComponent;
  let fixture: ComponentFixture<SelecteffectivedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecteffectivedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteffectivedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
