class EventEmitter {

  constructor() {
    this.events = {};
    this.addListener.bind(this);
    this.removeListener.bind(this);
    this.emit.bind(this);
  }

  protected events: {[key: string]: any};

  public addListener(event: string, listener: (...args: any[]) => void) {
    (this.events[event] || (this.events[event] = [])).push(listener);
  }

  public removeListener(event: string, listener: (...args: any[]) => void) {
    if (this.events[event]) {
      this.events[event].splice(this.events[event].indexOf(listener), 1);
    }
  }

  public emit(event: string, ...args: any[]) {
    if (this.events[event]) {
      this.events[event].forEach((listener: any) => {
        listener(...args);
      });
    }
  }

}

const eventEmitter = new EventEmitter();

export default eventEmitter;