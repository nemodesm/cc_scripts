declare type eventListener = (
    name: eventType,
    arg1?: any,
    arg2?: any,
    arg3?: any
) => void;

const listeners: { [id: string]: eventListener[] } = {};

export namespace eventManager {
    export function addListener(event: eventType, listener: eventListener) {
        if (listeners[event] == null) {
            listeners[event] = [listener];
        } else {
            listeners[event].push(listener);
        }
    }

    export function beginListener() {
        while (true) {
            let [name, a, b, c] = os.pullEvent();

            if (listeners[name] != null) {
                for (const listener of listeners[name]) {
                    listener(name, a, b, c);
                }
            }
        }
    }

    export function waitForEvent(
        event: eventType
    ): [name: eventType, arg1?: any, arg2?: any, arg3?: any] {
        while (true) {
            let [name, a, b, c] = os.pullEvent();

            if (listeners[name] != null) {
                for (const listener of listeners[name]) {
                    listener(name, a, b, c);
                }
            }

            if (name == event) {
                return [name, a, b, c];
            }
        }
    }
}
