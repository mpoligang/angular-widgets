import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import "qilab-widgets/dist/widgets";
import { AppComponent } from "./app.component";
import { InputText } from "src/app/components/inputs/texts/widget-input-text";
import { InputTextarea } from "src/app/components/inputs/textarea/widget-input-textarea";
import { InputInteger } from "src/app/components/inputs/integer/integer.component";
import { InputFloat } from "src/app/components/inputs/float/float.component";
import { InputPercentile } from "src/app/components/inputs/percentile/percentile.component";
import { ModalDialog } from "./components/popups/modal/modal.component";
import { Button } from "src/app/components/buttons/widget-button";
import { InputDatePicker } from "src/app/components/inputs/date-picker/date-picker.component";
import { Waiting } from "src/app/components/popups/waiting/waiting.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { SearchbarComponent } from "./components/inputs/searchbar/searchbar.component";

@NgModule({
  declarations: [
    AppComponent,
    InputText,
    Button,
    InputTextarea,
    InputInteger,
    InputFloat,
    InputPercentile,
    ModalDialog,
    InputDatePicker,
    Waiting,
    SearchbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
