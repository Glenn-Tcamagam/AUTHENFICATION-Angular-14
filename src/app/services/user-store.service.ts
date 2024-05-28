import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private fullName$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');

  constructor() {}

  public getRoleFromStore() {
    return this.role$.asObservable();
  }
  public setRoleForStore(role: string) {
    this.role$.next(role);
  }
  // public getFullNameFromStore() {
  //   this.fullName$.asObservable();
  // }
  public getFullNameFromStore(): Observable<string> {
    return this.fullName$.asObservable();
  }
  public setFullNameForStore(fullname: string) {
    this.fullName$.next(fullname);
  }
}