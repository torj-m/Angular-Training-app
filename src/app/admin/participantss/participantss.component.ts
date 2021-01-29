import { Component, OnInit ,Input} from '@angular/core';
import { FakeparticipantServiceService } from '../fakeparticipant-service.service';

@Component({
  selector: 'app-participantss',
  templateUrl: './participantss.component.html',
  styleUrls: ['./participantss.component.css']
})

export class ParticipantssComponent implements OnInit {
participantItems;
  constructor(private participantItemService: FakeparticipantServiceService) { }
  
  
  @Input() participant: any;
  @Input() participants: any;

  ngOnInit(): void {
    this.participantItems=this.participantItemService.get();
    console.log(this.participantItems);
  }
  onDelete(){
    this.participantItemService.delete(this.participant);
  }
  edit(participantItem){
    
  }
}
