import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h4>Counter: {{ counter }}</h4>
    <button (click)="counterBy(1)">+1</button>
    <button (click)="counterBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `
})
export class CounterComponent {
    public counter: number = 10;
    counterBy (value: number):void {
        this.counter+=value;
    }
    reset ():void {
        this.counter=10;
    }
}