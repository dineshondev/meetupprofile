import {Component, OnInit} from '@angular/core';
import {Member} from '../model/member';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  operation = 'edit';
  member: Member;
  things: ['Motorcyle', 'Space', 'Family', 'Kite'];

  constructor() {
  }

  ngOnInit(): void {

    this.member = new Member('M0001', 'Frank Kolar',
      'This is my user record', new Date(), 'Webstorm', 25, ['Motorcyle', 'Space']);
  }
}

