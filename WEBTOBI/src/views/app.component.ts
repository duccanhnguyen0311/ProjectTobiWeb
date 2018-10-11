import { Component, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../_services/script-loader.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScriptLoaderService]
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  globalBodyClass = 'animsition';
  public isLogin = false;
  constructor(private _script: ScriptLoaderService) {

  }
  ngOnInit() {
    try {
    } catch (ex) {

    }
  }
  ngAfterViewInit() {
  //   this._script.loadScripts(
  //     'body', [
  //       'assets/vendor/jquery/jquery-3.2.1.min.js',
  //       'assets/vendor/animsition/js/animsition.min.js',
  //       'assets/vendor/bootstrap/js/popper.js',
  //       'assets/vendor/bootstrap/js/bootstrap.min.js',
  //       'assets/vendor/select2/select2.min.js',   
  //       'assets/vendor/daterangepicker/moment.min.js',
  //       'assets/vendor/daterangepicker/daterangepicker.js',     
  //       'assets/vendor/slick/slick.min.js',
  //       'assets/js/slick-custom.js',     
  //       'assets/vendor/parallax100/parallax100.js',     
  //       'assets/vendor/MagnificPopup/jquery.magnific-popup.min.js',
  //       'assets/vendor/isotope/isotope.pkgd.min.js',
  //       'assets/vendor/sweetalert/sweetalert.min.js',
  //       'assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js',
  //       'assets/js/main.js'            
  //     ], true
  // );
  }
}
