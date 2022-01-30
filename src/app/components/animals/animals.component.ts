import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/components/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animalsList: Animal[] = [
    new Animal('Cow', 2, 'Black and white', true),
    new Animal('Horse', 4, 'Brown', false),
    new Animal('Pig', 6, 'Pink', true),
    new Animal('Rooster', 8, 'Brown and green', false),
    new Animal('Chicken', 10, 'White', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}