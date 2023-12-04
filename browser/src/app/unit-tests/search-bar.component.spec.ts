import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from '../layouts/components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimpleChange } from '@angular/core';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule, FormsModule, CommonModule],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create searchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should not call updateSearchValue', () => {
    const updateSearchSpy = spyOn(component, 'updateSearchValue');
    const ngOnChangesSpy = spyOn(component, 'ngOnChanges');
    fixture.detectChanges();
    expect(updateSearchSpy).not.toHaveBeenCalled();
    expect(ngOnChangesSpy).not.toHaveBeenCalled();
  });

  it('should call updateSearchValue', () => {
    const updateSearchSpy = spyOn(component, 'updateSearchValue');
    component.initialValue = '1';
    component.ngOnChanges({
      initialValue: new SimpleChange(undefined, component.initialValue, true),
    });
    fixture.detectChanges();
    expect(updateSearchSpy).toHaveBeenCalled();
  });

  it('input value of search should be 1', () => {
    component.initialValue = '1';
    component.ngOnChanges({
      initialValue: new SimpleChange(undefined, component.initialValue, true),
    });
    fixture.detectChanges();

    const inputValue = element.querySelector('input')!;
    expect(inputValue.value).toBe('1');
  });
});
