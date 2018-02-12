import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment';

export abstract class AuthAware {

  protected authenticated = false;

  constructor(protected readonly eventAggregator: EventAggregator) {}

  protected initializeAuthAware() {
    this.eventAggregator.subscribe(environment.authStateEvent, (event) => {
      this.handleEvent(event);
    });
    var uuid = this.generateUUID();
    console.log("Subscribing once for initial event: " + uuid);
    this.eventAggregator.subscribeOnce(uuid, (event) => {
      this.handleEvent(event);
    });
    this.eventAggregator.publish(environment.newAuthStateEvent, {
      listenerId: uuid
    });
  }

  private generateUUID(): string {
    return this.generateRandomString() 
    + this.generateRandomString() 
    + '-' + this.generateRandomString() 
    + '-' + this.generateRandomString() 
    + '-' + this.generateRandomString() 
    + '-' + this.generateRandomString() 
    + this.generateRandomString() 
    + this.generateRandomString();;
  }

  private generateRandomString() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  private handleEvent(event) {
    console.log(event);
    this.authenticated = event.authenticated;
    if (this.authenticated) {
      this.onAuthenticaticated();
    } else {
      this.onUnauthenticated();
    }
  }

  protected abstract onAuthenticaticated(): void;
  protected abstract onUnauthenticated(): void;

}