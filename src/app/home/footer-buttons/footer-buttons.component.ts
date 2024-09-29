import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrl: './footer-buttons.component.scss'
})
export class FooterButtonsComponent implements OnChanges {
  @Input() showPrevious: boolean;
  @Input() showNext: boolean;
  @Input() currentPage: number;
  @Output() limit = new EventEmitter;
  @Input() pageLimit: number;
  @Output() getNewData = new EventEmitter();
  usersLimit = [10,20,30,40,50,100];

  constructor(private userService: UsersService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showPrevious = (this.currentPage === 1) ? true : false;
  }

  selectLimit(event, value) {
    this.getNewData.emit( {page: this.currentPage, limit : value})
  }

  onClick(string) {
    this.getNewData.emit( {page: (string === 'previous' ? this.currentPage - 1 : this.currentPage + 1), limit :this.pageLimit})
  }

}
