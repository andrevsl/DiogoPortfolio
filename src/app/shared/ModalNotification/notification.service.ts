import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class NotificationService {

notifier=new EventEmitter<any>()

notify(message: string){
    this.notifier.emit(message)
  }


notifyLogin(message: any){
      this.notifier.emit(message)
  }

}
