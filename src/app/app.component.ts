import { Component } from '@angular/core';
import fileData from '../assets/data/mock-file-data.json'
import { fileDetail } from './models/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'export-file-system';
  fileDetails: Array<fileDetail>;

  ngOnInit() {
    this.fileDetails = fileData.data;
  }
}
