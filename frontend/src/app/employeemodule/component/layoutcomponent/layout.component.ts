import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { Output,  } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-layoutcomponent',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutcomponentComponent implements OnInit {

  @Output() filterString= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchEmployee(searchString: any){
    // console.log(searchString.target.value);
    this.filterString.emit(searchString.target.value);

  }

}
