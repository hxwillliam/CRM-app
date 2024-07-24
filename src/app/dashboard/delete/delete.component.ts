import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  standalone: true,
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Input() userid!: number;
  @Output() userDeleted: EventEmitter<number> = new EventEmitter();

  deleteUser(): void {
	if (this.userid === undefined) {
	  console.error('DeleteComponent: userid is undefined.');
	  return;
	}
	this.userDeleted.emit(this.userid);
  }
}