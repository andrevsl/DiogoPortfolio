import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class NotificationService {

notifier=new EventEmitter<string>()

notify(message: string){
    this.notifier.emit(message)
  }

}
