import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

export interface Search {
  query: string;
}

@Component({
  selector: 'app-search-bar',
  template: `
    <form [formGroup]="searchForm">
      <input 
        type="search" 
        placeholder="Search image captions" 
        formControlName="query">
    </form>
  `,
  styles: [
    `
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2em;
    }
    
    input {
      width: 50ch;
      font-size: 18px;
      padding: 0.5em;
    }
  `
  ]
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  @Output() query = new EventEmitter<Search>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.sendSearch();
  }

  createForm() {
    this.searchForm = this.fb.group({
      query: ''
    });
  }

  sendSearch() {
    const inputQuery = this.searchForm.get('query');
    inputQuery.valueChanges
      .debounceTime(350)
      .distinctUntilChanged()
      .subscribe(text => this.query.emit(text));
  }
}
