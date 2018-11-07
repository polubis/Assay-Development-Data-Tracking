

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropDownDirective } from '../../directives/drop-down-directive'; 
import { ModalComponent } from "src/app/components/utils/modal/modal.component";

@NgModule({
    declarations: [
        DropDownDirective, ModalComponent
    ],
    exports: [
        CommonModule
    ]
})
export class UtilsModule {}