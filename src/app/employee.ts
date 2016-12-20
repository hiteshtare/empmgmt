export class Employee {

    public hobbies = [{ value: 'Reading', text: 'Reading', checked: false },
    { value: 'Travel', text: 'Travel', checked: false },
    { value: 'Football', text: 'Football', checked: true },
    { value: 'Public Speaking', text: 'Public Speaking', checked: true }

    ];

    constructor(public id: number, public name: string, public gender: string, public country: string) {
        this.hobbies;
    };

}

