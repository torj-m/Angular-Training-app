import { Component, OnInit } from '@angular/core';
import {FakeFormateurServiceService} from '../fake-formateur-service.service';

@Component({
  selector: 'app-formateur-edit-form',
  templateUrl: './formateur-edit-form.component.html',
  styleUrls: ['./formateur-edit-form.component.css']
})
export class FormateurEditFormComponent implements OnInit {

  constructor(private formateurItemService: FakeFormateurServiceService) { }

  ngOnInit(): void {
  }
  addFormateur(formateurItem) {
    console.log(formateurItem);
    this.formateurItemService.add(formateurItem);
  }
  
}
