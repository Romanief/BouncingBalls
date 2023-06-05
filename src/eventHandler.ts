type Listener = (...args: any[]) => void

export class EventHandler {
  eventList: Record<string, Listener[]> = {}

  addEvent(event: string, listener: Listener) {
    if (!Array.isArray(this.eventList[event])) this.eventList[event] = []

    this.eventList[event].push(listener)
  }

  removeEvent(event: string, listener: Listener) {
    if (!Array.isArray(this.eventList[event])) return

    const idx: number = this.eventList[event].indexOf(listener)

    if (idx > -1) {
      this.eventList[event].splice(idx, 1)
    }
  }

  fire(event: string, ...args: any) {
    if (!Array.isArray(this.eventList[event])) return

    this.eventList[event].forEach((listener) => listener(args))
  }
}
