import { randomUUID } from 'node:crypto';
import { Studio } from './studio';
import { Person } from './person';

export interface MovieData {
  id?: string;
  title: string;
  description?: string | null | undefined;
  poster?: string | null | undefined;
  genre: string[];
  studio: Studio;
  persons: Person[];
  premiereDate?: Date;
  createdAt?: Date;
}

export class Movie implements MovieData {
  private _id: string;
  private _title: string;
  private _description?: string | null | undefined;
  private _poster?: string | null | undefined;
  private _genre: string[];
  private _studio: Studio;
  private _persons: Person[];
  private _premiereDate?: Date;
  private _createdAt: Date;

  constructor(data: MovieData) {
    this._id = data.id ?? randomUUID();
    this._createdAt = data.createdAt ?? new Date();
    Object.assign(this, data);
  }

  public get id() {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description(): string | null | undefined {
    return this._description;
  }

  public set description(value: string | null | undefined) {
    this._description = value ?? null;
  }

  public get poster(): string {
    return this._poster;
  }

  public set poster(value: string) {
    this._poster = value;
  }

  public get genre(): string[] {
    return this._genre;
  }

  public set genre(value: string[]) {
    this._genre = value;
  }

  public get studio(): Studio {
    return this._studio;
  }

  public set studio(value: Studio) {
    this._studio = value;
  }

  public get persons(): Person[] {
    return this._persons;
  }

  public set persons(value: Person[]) {
    this._persons = value;
  }

  public get premiereDate(): Date | null | undefined {
    return this._premiereDate;
  }

  public set premiereDate(value: Date | null | undefined) {
    this._premiereDate = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
}
