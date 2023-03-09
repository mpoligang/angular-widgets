import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { WidgetChangeEvent } from "qilab-widgets/dist/models/events";
import { InputErrorMessage } from "qilab-widgets/dist/models/input-errors";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html"
})
export class InputDatePicker implements OnInit {
  @ViewChild("datePicker") appInput: ElementRef<GenericInput>;
  public text: string;
  public disabled: boolean;
  public readonly: boolean;
  public validationsMsg: InputErrorMessage = {
    msgRequired: "Data Obbligatoria"
  };

  public minDate = new Date("2023/03/01");
  public maxDate = new Date("2023/03/10");

  constructor() {}

  ngOnInit(): void {}

  public showValue(): void {
    console.log(this.text);
  }

  public disabledAction(): void {
    this.disabled = !this.disabled;
  }

  public readonlyAction(): void {
    this.readonly = !this.readonly;
  }

  public valueChange(event: WidgetChangeEvent): void {
    this[event.detail.name] = event.detail.value;
  }

  public validationAction(): void {
    this.appInput.nativeElement.hasError();
  }
}
