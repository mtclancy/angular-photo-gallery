import { Component } from '@angular/core';
import { DropdownOption } from '../../interfaces/dropdown-options.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectOptions: DropdownOption[] = [
    {
      id: 'about',
      name: 'About'
    }
  ]
}
