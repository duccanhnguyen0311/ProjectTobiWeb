import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from "./slider/slider.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/_auth/login/login.component';

@NgModule({
    declarations: [
        HeaderNavComponent,
        SliderComponent,
        FooterComponent,
        LoginComponent
    ],
    exports: [
        HeaderNavComponent,
        SliderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}