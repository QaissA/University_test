import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UniversityTestService } from '../university-test.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  UserForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: UniversityTestService
  ) {}

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      anneeScholaire: ['', Validators.required],
      filiere: ['', Validators.required],
    });
  }

  addUser() {
    if (this.UserForm.valid) {
      this.service.createUser(this.UserForm.value).subscribe({
        next: (res) => {
          alert('User has registered');
          this.UserForm.reset();
        },
      });
    }
  }
}
