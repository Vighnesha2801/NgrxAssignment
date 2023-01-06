import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-listcomponent',
  templateUrl: './employeeTable.component.html',
  styleUrls: ['./employeeTable.component.scss']
})
export class ListcomponentComponent implements OnInit {
  displayedColumns: any[] = ['id','name','Salary','Address'];

  @Input() dataSource:any = '';
  // @Input() filterString:any='';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    
  }

}
