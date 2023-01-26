import { randomUUID } from 'crypto';

export interface StudioData {
  id?: string;
  name: string;
  createdAt?: Date;
}

export class Studio implements StudioData {
  private _id: string;
  private _name: string;
  private _createdAt: Date;

  constructor(data: StudioData) {
    this._id = data.id ?? randomUUID();
    this._createdAt = data.createdAt ?? new Date();
    Object.assign(this, data);
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public get createdAt(): Date {
    return this.createdAt;
  }
}
