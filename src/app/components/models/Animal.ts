export class Animal {
    name: string;
    age: number;
    color: string;
    isFed: boolean;

    constructor(name: string, age: number, color: string, isFed: boolean) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.isFed = isFed;    
    }
}