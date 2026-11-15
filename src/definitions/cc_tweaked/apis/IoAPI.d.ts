/**
 * @noSelfInFile
 */

/**
 * @noSelf
 */
declare namespace io {
    function lines(): () => string | nil;
    function lines(filename: string, ...args: string[]): () => string | nil;

    type Handle = {};
}
