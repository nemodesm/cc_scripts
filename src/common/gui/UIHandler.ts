import { eventManager } from '../EventManager';

export class UIHandler {
    private monitor: MonitorPeripheral;
    constructor(monitor: MonitorPeripheral) {
        if (!monitor.isColor()) {
            // not an advanced monitor
            let [width, height] = monitor.getSize();
            monitor.setCursorPos(width / 2 - 21, height / 2);
            monitor.write('UI is only available with advanced monitors');
            this.monitor = null!;
            return;
        }
        this.monitor = monitor;
    }

    run(): void {
        let _: any;
        let dir: string;
        let x, y: number;

        if (this.monitor != null)
            eventManager.addListener('monitor_touch', this.touched);
    }

    touched(arg0: string, touched: any) {
        throw new Error('Method not implemented.');
    }
}
