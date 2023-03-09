import { Component, OnInit } from "@angular/core";
import { WidgetChangeEvent } from "qilab-widgets/dist/models/events";

@Component({
  selector: "app-input-percentile",
  templateUrl: "./searchbar.component.html"
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public searchEvent(event: WidgetChangeEvent): void {
    alert(event.detail.value);
  }

  public searchEventByKeyEnter(event: WidgetChangeEvent): void {
    alert(event.detail.value);
  }
}
