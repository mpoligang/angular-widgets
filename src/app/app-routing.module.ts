import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Button } from "./components/buttons/widget-button";
import { InputText } from "./components/inputs/texts/widget-input-text";
import { InputTextarea } from "./components/inputs/textarea/widget-input-textarea";
import { CheckBox } from "./components/booleans/checkbox/checkobox.component";
import { InputInteger } from "./components/inputs/integer/integer.component";
import { InputFloat } from "./components/inputs/float/float.component";
import { InputPercentile } from "./components/inputs/percentile/percentile.component";
import { ModalDialog } from "./components/popups/modal/modal.component";
import { InputDatePicker } from "./components/inputs/date-picker/date-picker.component";
import { Waiting } from "./components/popups/waiting/waiting.component";
import { SearchbarComponent } from "./components/inputs/searchbar/searchbar.component";
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },

  {
    path: `input-text`,
    component: InputText
  },

  {
    path: `checkbox`,
    component: CheckBox
  },

  {
    path: `input-textarea`,
    component: InputTextarea
  },

  {
    path: `waiting`,
    component: Waiting
  },

  {
    path: `integer`,
    component: InputInteger
  },
  {
    path: `percentile`,
    component: InputPercentile
  },
  {
    path: `float`,
    component: InputFloat
  },
  {
    path: `date-picker`,
    component: InputDatePicker
  },
  {
    path: `searchbar`,
    component: SearchbarComponent
  },
  {
    path: `buttons`,
    component: Button
  },
  {
    path: `modal`,
    component: ModalDialog
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
