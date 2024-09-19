import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatTableModule } from '@angular/material/table';
import { ContactService } from '../../services/contact.service';
const MATERIAL_MODULES = [MatTableModule];
@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  contacts: any[] = [
    
  ];
  displayedColumns: string[] = ['id', 'name','email', 'actions'];

  constructor(private dialog: MatDialog, private contactService: ContactService) {}
  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  addContact() {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      data: { contact: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contacts.push(result);
      }
    });
  }

  editContact(id: number): void {
    this.contactService.getContactById(id).subscribe(contact => {
      const dialogRef = this.dialog.open(ContactFormComponent, {
        data: { contact },
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loadContacts(); // Recargar la lista de contactos si se guardaron cambios
        }
      });
    });
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

}
