import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule]
})
export class MaterialModule {}
