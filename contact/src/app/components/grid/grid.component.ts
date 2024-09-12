import { APP_BOOTSTRAP_LISTENER, Component, effect, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInput} from '@angular/material/input';
import { FilterComponent } from "./filter/filter.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { APP_CONSTANTS } from '@shared/constants';
import { ContactService } from '@features/contacts/contact.service';


const MATERIAL_MODULES = [MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatButtonModule] ;
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MATERIAL_MODULES, FilterComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit {
  
  /**
   * displayedColumns= ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

   */
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns =input<string[]>([]);
  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _contactSvc = inject(ContactService);

  constructor() { 
    effect(() => {
      if(this.valueToFilter()){
        this.dataSource.filter = this.valueToFilter();
      }else{
        this.dataSource.filter = '';
      }
    }, {allowSignalWrites: true})
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  deleteContact(id:string):void{
    const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    if(confirmation){
      //service call to delete contact

    }
  }
 
  
}
