/**
 * Created by m_ishikawa on 2017/08/12.
 */
"use strict";
export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  // "Emit" event ----> Store
  countUp(data) {
    this.dispatcher.emit("countUp", data);
  }
}

