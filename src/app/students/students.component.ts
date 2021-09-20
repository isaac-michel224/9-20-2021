import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  selectedStudent?: Student;
    
//  student: Student = { 
//    id: 1,
//    name: 'Jim',
//    major: 'Computer Science',
//  };


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}

