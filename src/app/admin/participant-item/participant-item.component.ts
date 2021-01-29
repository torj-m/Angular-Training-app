import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/participant';
import { ParticipantsITEMS } from 'src/app/participants';
import { FakeparticipantServiceService } from '../fakeparticipant-service.service';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.css']
})
export class ParticipantItemComponent implements OnInit {
@Input() participant: any;
  constructor(private ParticipantItemService: FakeparticipantServiceService) { }
  nbrpart: number;
  partlist: any;
  ngOnInit(): void {
    
  }
  onDelete(){
    this.ParticipantItemService.delete(this.participant);
  }

}
