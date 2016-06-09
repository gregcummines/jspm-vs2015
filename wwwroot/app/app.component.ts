import { Component } from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: '{{welcome}}'
})
export class AppComponent {
    welcome: string = 'Hello from Angular2!'
}