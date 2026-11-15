/**
 * @noSelf
 */
declare namespace term {
    function nativePaletteColour(
        colour: number
    ): LuaMultiReturn<[number, number, number]>;
    function nativePaletteColor(
        colour: number
    ): LuaMultiReturn<[number, number, number]>;
    function write(text: string): void;
    function scroll(y: number): void;
    function getCursorPos(): LuaMultiReturn<[number, number]>;
    function setCursorPos(x: number, y: number): void;
    function getCursorBlink(): boolean;
    function setCursorBlink(blink: boolean): void;
    function getSize(): LuaMultiReturn<[number, number]>;
    function clear(): void;
    function clearLine(): void;
    function getTextColour(): number;
    function getTextColor(): number;
    function setTextColour(colour: number): void;
    function setTextColor(colour: number): void;
    function getBackgroundColour(): number;
    function getBackgroundColor(): number;
    function setBackgroundColour(colour: number): void;
    function setBackgroundColor(colour: number): void;
    function isColour(): boolean;
    function isColor(): boolean;
    function blit(
        text: string,
        textColour: number,
        backgroundColour: number
    ): void;
    function setPaletteColour(index: number, colour: number): void;
    function setPaletteColour(
        index: number,
        r: number,
        g: number,
        b: number
    ): void;
    function setPaletteColor(index: number, colour: number): void;
    function setPaletteColor(
        index: number,
        r: number,
        g: number,
        b: number
    ): void;
    function getPaletteColour(
        colour: number
    ): LuaMultiReturn<[number, number, number]>;
    function getPaletteColor(
        colour: number
    ): LuaMultiReturn<[number, number, number]>;
    function redirect(target: Redirect): Redirect;
    function current(): Redirect;
    function native(): Redirect;

    type Redirect = {
        write(text: string): void;
    };
}
