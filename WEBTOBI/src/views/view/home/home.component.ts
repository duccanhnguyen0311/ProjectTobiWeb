import { Component, OnInit } from '@angular/core';
import { ViewComponent } from '../view.component';
import { ScriptLoaderService } from 'src/_services/script-loader.service';

@Component({
    selector: '.content',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(
        private _script: ScriptLoaderService,
        private _progress: ViewComponent
    ) { }
    ngOnInit() {
        
     }
}