import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./widget-button.component.html"
})
export class Button {
  ngOnInit() {}

  public clickEvent() {
    alert("Clicked!");
  }
}
