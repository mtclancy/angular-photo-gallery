import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DropdownOption } from '../../interfaces/dropdown-options.interface';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent<T> implements OnInit, OnDestroy {
  @Input() classString = '';
  @Input() selectOptions!: DropdownOption[];
  @Input() rowItem!: T;
  @Output() selectionEmitter = new EventEmitter<{ selectedOption: string; entity: T}>();
  show = false;

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  handleClick() {
    this.toggleShowHide();
  }

  hideDialog() {
    this.show = false;
  }

  toggleShowHide() {
    this.show = !this.show;
  }

  emitSelection(selection: string) {
    this.selectionEmitter.emit({selectedOption: selection, entity: this.rowItem});
    this.toggleShowHide();
  }
}
