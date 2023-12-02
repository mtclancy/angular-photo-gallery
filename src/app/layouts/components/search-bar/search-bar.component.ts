import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() valueChange = new EventEmitter<string>();
  searchControl = new FormControl();
  subject$ = new Subject<string>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((searchText: string) => {
        this.valueChange.emit(searchText);
      });
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }
}
