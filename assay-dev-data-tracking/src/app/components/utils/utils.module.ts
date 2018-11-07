

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropDownDirective } from '../../directives/drop-down-directive'; 
import { ModalComponent } from "src/app/components/utils/modal/modal.component";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [
        DropDownDirective, ModalComponent, LoaderComponent
    ],
    imports: [CommonModule],
    exports: [
        CommonModule, DropDownDirective, ModalComponent, LoaderComponent
    ]
})
export class UtilsModule {}