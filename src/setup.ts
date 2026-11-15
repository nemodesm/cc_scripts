import { GithubRequests } from './common/GithubRequests';

const baseURL =
    'https://raw.githubusercontent.com/nemodesm/cc_scripts/refs/heads/main/';
const current_progfile = '/current_program';

const key_down = 264;
const key_up = 265;
const key_enter = 257;

function pick_from(items: any[]) {
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

function mktemp() {
    return `tmp.${math.random(2147483647)}`;
}

function downloadFile(name: string, savedAs?: string) {
    let save_to = savedAs ?? name;
    if (!fs.isDir(fs.getDir(save_to))) {
        fs.makeDir(fs.getDir(save_to));
    } else if (fs.exists(save_to)) {
        fs.delete(save_to);
    }

    shell.execute('wget', baseURL + name, save_to);

    return save_to;
}

function downloadDirectory(directory: string, out_dir?: string) {
    const actual_out_dir = out_dir ?? directory;
    // not creating this dir, because git never has empty directories

    const response = GithubRequests.getDirectory(directory);
    if (response != null) {
        for (const item of response) {
            if (item.type == 'file') {
                downloadFile(
                    `${directory}/${item.name}`,
                    `${actual_out_dir}/${item.name}`
                );
            } else {
                downloadDirectory(
                    `${directory}/${item.name}`,
                    `${actual_out_dir}/${item.name}`
                );
            }
        }
    }
    //let response = textutils.unserialiseJSON();
}

function downloadModule(module_name: string) {
    downloadDirectory(`lua/${module_name}`, module_name);
}

function tryRunExistingProgram() {
    if (fs.exists(current_progfile)) {
        let [prog] = io.lines(current_progfile)();

        if (!fs.exists(prog) || !fs.isDir(prog)) {
            fs.delete(current_progfile);
            return false;
        } else {
            shell.setDir(prog);
            for (const prog of ['./run', './run.lua']) {
                if (fs.exists(prog)) {
                    shell.execute(prog);
                    return true;
                }
            }
        }
    }

    return false;
}

function main() {
    if (!fs.isDir('/tmp')) {
        fs.makeDir('/tmp');
    }

    tryRunExistingProgram();

    downloadFile('scriptlist.txt', '/tmp/list');

    const proglist: string[] = [];

    for (let i = 0; i < 20; i++) {
        proglist.push(i.toString());
    }

    const readline = io.lines('/tmp/list');
    let [line] = readline();
    while (line != null) {
        proglist.push(line);
        [line] = readline();
    }

    pick_from(proglist);
}

main();
