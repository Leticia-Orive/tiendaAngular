import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService, Contact } from '../../services/contact.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModules } from '../../shared/material-modules';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


  
  
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MaterialModules],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contact: Contact | null }
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.contact) {
      this.isEditing = true;
      this.contactForm.patchValue(this.data.contact);
    }
  }

  saveContact(): void {
    if (this.contactForm.valid) {
      const contact: Contact = { ...this.contactForm.value, id: this.data.contact ? this.data.contact.id : 0 };
      if (this.isEditing) {
        this.contactService.updateContact(contact).subscribe(() => this.dialogRef.close(true));
      } else {
        this.contactService.addContact(contact).subscribe(() => this.dialogRef.close(true));
      }
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}