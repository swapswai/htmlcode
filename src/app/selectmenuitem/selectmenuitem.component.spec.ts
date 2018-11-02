import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectmenuitemComponent } from './selectmenuitem.component';

describe('SelectmenuitemComponent', () => {
  let component: SelectmenuitemComponent;
  let fixture: ComponentFixture<SelectmenuitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectmenuitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
