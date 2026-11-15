declare type fileMode = 'r' | 'w' | 'a' | 'r+' | 'w+';
declare type fileModeBin = 'rb' | 'wb' | 'ab' | 'r+b' | 'w+b';

/**
 * @noSelfInFile
 */

/**
 * @noSelf
 */
declare namespace fs {
    export function complete(
        path: string,
        location: string,
        includeFiles?: boolean,
        includeDirs?: boolean
    ): string[];
    export function complete(
        path: string,
        location: string,
        options: {
            include_dirs?: boolean;
            include_files?: boolean;
            /**
             * Whether to include hidden files (those starting with `.`) by
             * default. They will still be shown when typing a `.`.
             */
            include_hidden?: boolean;
        }
    ): string[];
    export function find(path: string): string[];
    export function isDriveRoot(path: string): boolean;
    export function list(path: string): string[];
    export function combine(path: string, ...args: string[]): string;
    export function getName(path: string): string;
    export function getDir(path: string): string;
    export function getSize(path: string): number;
    export function exists(path: string): boolean;
    export function isDir(path: string): boolean;
    export function isReadOnly(path: string): boolean;
    export function makeDir(path: string): void;
    export function move(path: string, dest: string): void;
    export function copy(path: string, dest: string): void;
    function _delete(path: string): void;
    export function open(path: string, mode: fileMode): table;
    export function open(path: string, mode: fileModeBin): table;
    export function getDrive(path: string): string | nil;
    export function getFreeSpace(path: string): number | unlimited;
    export function getCapacity(path: string): number | nil;
    export function attributes(path: string): {
        size: number;
        isDir: boolean;
        isReadOnly: boolean;
        created: number;
        modified: number;
    };

    export type ReadHandle = {
        read(): nil | number | string;
        read(count: number): nil | string;
        readAll(): nil | string;
        // FIXME: remainder
    };

    export { _delete as delete };
}
