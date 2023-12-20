import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    id: "",
    name: "Trunk",
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    // TODO: emitir el ID del personaje
    if( !id ) return;

    console.log({id});
    this.onDelete.emit(id);
  }
}
