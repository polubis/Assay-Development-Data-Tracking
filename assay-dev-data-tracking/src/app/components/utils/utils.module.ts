

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropDownDirective } from '../../directives/drop-down-directive'; 
import { ModalComponent } from "src/app/components/utils/modal/modal.component";
import { LoaderComponent } from './loader/loader.component';
import { PrompterComponent } from "src/app/components/utils/prompter/prompter.component";
@NgModule({
    declarations: [
        DropDownDirective, ModalComponent, LoaderComponent, PrompterComponent
    ],
    imports: [CommonModule],
    exports: [
        CommonModule, DropDownDirective, ModalComponent, LoaderComponent, PrompterComponent
    ]
})
export class UtilsModule {}