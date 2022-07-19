import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable({providedIn: 'root'})
export class UniqueIdService {
  public generateUniqueIdWithPrefix(prefix: string): string {
    return `${prefix}-${this.generateUniqueId()}`
  }

  private generateUniqueId(): string {
    return uuid.v1()
  }

}
