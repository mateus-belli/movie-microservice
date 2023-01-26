import { randomUUID } from 'node:crypto';

export interface PersonData {
  id?: string;
  name: string;
  role: string;
  createdAt?: Date;
}

export class Person implements PersonData {
  private _id: string;
  private _name: string;
  private _role: string;
  private _createdAt: Date;

  constructor(data: PersonData) {
    this._id = data.id ?? randomUUID();
    this._createdAt = data.createdAt ?? new Date();
    Object.assign(this, data);
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3 || value.length > 240) {
      throw new Error(
        'Name field must have, at least, 4 characters and less than 240',
      );
    }

    this._name = value;
  }

  public get role(): string {
    return this._role;
  }

  public set role(value: string) {
    this._role = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
}
