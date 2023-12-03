import { Component, Input } from "@angular/core";

@Component({
  selector: "app-load-spinner",
  templateUrl: "./load-spinner.component.html",
})
export class LoadSpinnerComponent {
  @Input() loading!: boolean;
}
