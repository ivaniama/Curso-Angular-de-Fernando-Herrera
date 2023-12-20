import { Injectable } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: "Krillin",
        power: 1000
    },{
        id: uuid(),
        name: "Goku",
        power: 9500
    },{
        id: uuid(),
        name: "Vegetta",
        power: 7500
    }];

    addCharacter(character: Character):void {
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }
        // Usando el operador Spread de caharacter, esto dice: "toma todas las propiedades de 'objeto x' y esparcelas en este nuevo objeto"
        // Cuando uno tiene más propiedades el Spread es ideal, y no la desectructuración
        this.characters.push(newCharacter);
    }

    //onDeleteCharacter(index: number){
    //    this.characters.splice(index,1);
    //}
    deleteCharacterId( id:string ) {
        this.characters = this.characters.filter(character => character.id !== id)
    }

}