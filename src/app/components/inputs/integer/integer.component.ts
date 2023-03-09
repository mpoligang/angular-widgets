import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GenericInput } from "qilab-widgets/dist/models/generic-input";
import { WidgetChangeEvent } from "qilab-widgets/dist/models/events";
import { InputErrorMessage } from "qilab-widgets/dist/models/input-errors";

@Component({
  selector: "app-input-integer",
  templateUrl: "./integer.component.html"
})
export class InputInteger implements OnInit {
  @ViewChild("inputText") appInput: ElementRef<GenericInput>;
  public text: string;
  public disabled: boolean;
  public readonly: boolean;
  public validationsMsg: InputErrorMessage = {
    msgMaxError: "Lunghezza massima 10",
    msgMinError: "Lunghezza minima 3",
    msgRequired: "Campo Obbligatorio"
  };
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
