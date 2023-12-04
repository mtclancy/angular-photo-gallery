import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input() placeholder = 'search';
  @Input() initialValue: string | undefined;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialValue) {
      this.updateSearchValue(this.initialValue);
    }
  }

  updateSearchValue(value: string) {
    this.searchControl.setValue(value, { emitEvent: false });
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }
}
