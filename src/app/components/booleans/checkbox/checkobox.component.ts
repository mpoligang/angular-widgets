import { Component, OnInit } from "@angular/core";
import { InputErrorMessage } from "qilab-widgets/dist/models/input-errors";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html"
})
export class CheckBox implements OnInit {
  public text: string;
  public disabled: boolean;
  public readonly: boolean;
  public validationsMsg: InputErrorMessage = {
    msgMaxError: "Lunghezza massima 10",
    msgMinError: "Lunghezza minima 3",
    msgRequired: "Campo Obbligatorio"
  };

  ngOnInit(): void {}
}
