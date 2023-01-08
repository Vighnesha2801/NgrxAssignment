import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
// import { Output,  } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-layoutcomponent',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutcomponentComponent implements OnInit {

  @Output() filterString= new EventEmitter<string>();
  subject = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.subject.pipe(debounceTime(500)).subscribe((res) => this.filterString.emit(res));
  }

  searchEmployee(searchString: any){
    this.subject.next(searchString.target.value);

    // this.filterString.emit(searchString.target.value);

  }

}
