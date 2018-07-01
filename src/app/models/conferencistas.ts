export class Conferencista {
    id: number;
    name: string;
    email: string;
    description: string;
    constructor(id: number, name: string, email: string, description: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.description = description
    }
  }