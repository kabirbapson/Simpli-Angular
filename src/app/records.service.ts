import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  rec1: string[] = ['baps', 'e22', 'baps@c.c']
  rec2: string[] = ['kaps', 'f22', 'kaps@c.c']
  rec3: string[] = ['caps', 'g22', 'caps@c.c']

  getInfo1(): string[]{
    return this.rec1
  }

  getInfo2(): string[]{
    return this.rec2
  }

  getInfo3(): string[]{
    return this.rec3
  }
  constructor() { }
}
