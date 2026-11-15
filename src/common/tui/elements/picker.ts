import { eventManager } from '../../EventManager';

const key_down = 264;
const key_left = 263;
const key_right = 262;
const key_up = 265;
const key_enter = 257;

const height = 19,
    width = 51;

export function pick_from(items: any[]) {
    if (items.length > term.getSize()[1]) {
        let start_index = 0;
        let selected_index = 0;
        function drawFull() {
            function write(itemIdx: number, line: number) {
                term.setCursorPos(2, line);
                if (itemIdx == selected_index) {
                    term.setBackgroundColor(colors.white);
                    term.setTextColor(colors.black);
                } else {
                    term.setBackgroundColor(colors.black);
                    term.setTextColor(colors.white);
                }
                term.write(items[itemIdx]);
            }
            term.clear();
            let i = 1;
            if (start_index == 0) {
                write(0, 1);
            } else {
                term.setCursorPos(2, 1);
                term.write('...');
            }
            for (; i < term.getSize()[1] - 1; i++) {
                write(i + start_index, i + 1);
            }
            if (start_index + term.getSize()[1] == items.length) {
                write(i + start_index, i + 1);
            } else {
                term.setBackgroundColor(colors.black);
                term.setTextColor(colors.white);
                term.setCursorPos(2, i + 1);
                term.write('...');
            }
            term.setBackgroundColor(colors.black);
            term.setTextColor(colors.white);
        }
        let running = true;
        drawFull();
        while (running) {
            let [_, key] = os.pullEvent('key');
            if (key === key_down) {
                selected_index++;
                if (
                    selected_index > start_index + term.getSize()[1] - 3 &&
                    start_index + term.getSize()[1] < items.length
                ) {
                    start_index++;
                }
            } else if (key === key_up) {
                selected_index--;
                if (start_index > selected_index - 2 && start_index > 0) {
                    start_index--;
                }
            } else if (key == key_enter) {
                term.clear();
                term.setCursorPos(1, 1);
                return items[selected_index];
            }
            drawFull();
        }
    }
}
