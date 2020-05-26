import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-parallel-coordinate',
  templateUrl: './parallel-coordinate.component.html'
})
export class ParallelCoordinateComponent {
  url: string = "../../assets/parallel-coordinate/index.html";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}