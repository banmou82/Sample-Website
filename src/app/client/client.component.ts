import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.styl']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  path = "../../assets/";
}
