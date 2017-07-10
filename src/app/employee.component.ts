import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  updated = "";
  editing = {};
  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:8080/employee`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
    this.updated = JSON.stringify(row);
    const rep = new XMLHttpRequest();
    rep.open('POST', `http://localhost:8080/employee/update`);
    rep.send(JSON.stringify(row));
  }
  deleteRow(event, row){
    var id = row.id;
    this.rows.splice(row.$$index, 1);
    this.updated = id;
    const red = new XMLHttpRequest();
    red.open('POST', `http://localhost:8080/employee/delete`);
    red.send(id);
  }

}
