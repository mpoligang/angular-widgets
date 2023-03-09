import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-input-float",
  templateUrl: "./waiting.component.html"
})
export class Waiting implements OnInit {
  @ViewChild("wait") appWaiting: ElementRef<any>;

  public show: boolean;

  constructor() {}

  public loadWaiting(): void {
    this.show = true;
    setTimeout(() => (this.show = false), 5000);
  }
}
