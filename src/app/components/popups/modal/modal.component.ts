import { Component, ElementRef, ViewChild } from "@angular/core";
import { DefaultSize } from "../../../../../node_modules/qilab-widgets/dist/enums/widgetsDefaultValues";
@Component({
  selector: "app-button",
  templateUrl: "./modal.component.html"
})
export class ModalDialog {
  @ViewChild("modal") appModal: ElementRef<any>;
  @ViewChild("customHeader") appCustomHeaderModal: ElementRef<any>;

  public size: DefaultSize;
  public enumSize = DefaultSize;
  public mobile: boolean;

  ngOnInit() {}

  public openModal(size: DefaultSize, mobile?: boolean): void {
    this.size = size;
    this.mobile = mobile;
    this.appModal.nativeElement.openModal();
  }

  public openCustomHeaderModal(): void {
    this.appCustomHeaderModal.nativeElement.openModal();
  }
}
