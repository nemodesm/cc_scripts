declare type MonitorTextScale = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

/**
 * @noSelfInFile
 */
/**
 * Monitors are a block which act as a terminal, displaying information on one
 * side. This allows them to be read and interacted with in-world without
 * opening a GUI.
 *
 * Monitors act as terminal redirects and so expose the same methods, as well
 * as several additional ones, which are documented below.
 *
 * If the monitor is resized (by adding new blocks to the monitor, or by calling
 * setTextScale), then a monitor_resize event will be queued.
 *
 * Like computers, monitors come in both normal (no colour) and advanced
 * (colour) varieties. Advanced monitors be right clicked, which will trigger a
 * monitor_touch event.
 *
 * @see monitor_resize Queued when a monitor is resized.
 * @see monitor_touch Queued when an advanced monitor is clicked.
 */
declare type MonitorPeripheral = Peripheral & {
    /**
     * Set the scale of this monitor. A larger scale will result in the monitor
     * having a lower resolution, but display text much larger.
     *
     * @param scale The monitor's scale. This must be a multiple of 0.5 between
     * 0.5 and 5.
     *
     * @throws If the scale is out of range.
     *
     * @see getTextScale
     */
    setTextScale(scale: MonitorTextScale): void;

    /**
     * Get the monitor's current text scale.
     *
     * @returns The monitor's current scale.
     *
     * @throws If the monitor cannot be found.
     */
    getTextScale(): MonitorTextScale;

    /**
     * Write text at the current cursor position, moving the cursor to the end
     * of the text.
     *
     * Unlike functions like _G.write and print, this does not wrap the text -
     * it simply copies the text to the current terminal line.
     *
     * @param text The text to write.
     */
    write(text: string): void;

    /**
     * Move all positions up (or down) by y pixels.
     *
     * Every pixel in the terminal will be replaced by the line y pixels below
     * it. If y is negative, it will copy pixels from above instead.
     *
     * @param y The number of lines to move up by. This may be a negative
     * number.
     */
    scroll(y: number): void;

    /**
     * Get the position of the cursor.
     *
     * @returns The x position of the cursor.
     * @returns The y position of the cursor.
     */
    getCursorPos(): LuaMultiReturn<[number, number]>;

    /**
     * Set the position of the cursor. Terminal writes will begin from this
     * position.
     * @param x The new x position of the cursor.
     * @param y The new y position of the cursor.
     */
    setCursorPos(x: number, y: number): void;

    /**
     * Checks if the cursor is currently blinking.
     *
     * @returns If the cursor is blinking.
     */
    getCursorBlink(): boolean;

    /**
     * Sets whether the cursor should be visible (and blinking) at the current
     * cursor position.
     *
     * @param blink Whether the cursor should blink.
     */
    setCursorBlink(blink: boolean): void;

    /**
     * Get the size of the terminal.
     *
     * @returns 1. The terminal's width.
     * @returns 2. The terminal's height.
     */
    getSize(): LuaMultiReturn<[number, number]>;

    /**
     * Clears the terminal, filling it with the current background colour.
     */
    clear(): void;

    /**
     * Clears the line the cursor is currently on, filling it with the current
     * background colour.
     */
    clearLine(): void;

    /**
     * Return the colour that new text will be written as.
     *
     * @returns The current text colour.
     *
     * @see colors For a list of colour constants, returned by this function.
     */
    getTextColour(): number;

    /**
     * Return the colour that new text will be written as.
     *
     * @returns The current text colour.
     *
     * @see colors For a list of colour constants, returned by this function.
     */
    getTextColor(): number;

    /**
     * Set the colour that new text will be written as.
     *
     * @param colour The new text colour.
     *
     * @see colors For a list of colour constants.
     */
    setTextColour(colour: number): void;

    /**
     * Set the colour that new text will be written as.
     *
     * @param colour The new text colour.
     *
     * @see colors For a list of colour constants.
     */
    setTextColor(colour: number): void;

    /**
     * Return the current background colour. This is used when writing text and
     * clearing the terminal.
     *
     * @returns The current background colour.
     *
     * @see colors For a list of colour constants, returned by this function.
     */
    getBackgroundColour(): number;

    /**
     * Return the current background colour. This is used when writing text and
     * clearing the terminal.
     *
     * @returns The current background colour.
     *
     * @see colors For a list of colour constants, returned by this function.
     */
    getBackgroundColor(): number;

    /**
     * Set the current background colour. This is used when writing text and clearing the terminal.
     *
     * @param colour The new background colour.
     *
     * @see colors For a list of colour constants.
     */
    setBackgroundColour(colour: number): void;

    /**
     * Set the current background colour. This is used when writing text and clearing the terminal.
     *
     * @param colour The new background colour.
     *
     * @see colors For a list of colour constants.
     */
    setBackgroundColor(colour: number): void;

    /**
     * Determine if this terminal supports colour.
     *
     * Terminals which do not support colour will still allow writing coloured
     * text/backgrounds, but it will be displayed in greyscale.
     *
     * @returns Whether this terminal supports colour.
     */
    isColour(): boolean;

    /**
     * Determine if this terminal supports colour.
     *
     * Terminals which do not support colour will still allow writing coloured
     * text/backgrounds, but it will be displayed in greyscale.
     *
     * @returns Whether this terminal supports colour.
     */
    isColor(): boolean;

    /**
     * Writes `text` to the terminal with the specific foreground and background
     * colours.
     *
     * As with write, the text will be written at the current cursor location,
     * with the cursor moving to the end of the text.
     *
     * `textColour` and `backgroundColour` must both be strings the same length
     * as `text`. All characters represent a single hexadecimal digit, which is
     * converted to one of CC's colours. For instance, `"a"` corresponds to
     * purple.
     *
     * @param text The text to write.
     * @param textColour The corresponding text colours.
     * @param backgroundColour The corresponding background colours.
     */
    blit(text: string, textColour: string, backgroundColour: string): void;

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour
     * should be displayed. For instance, you can make colors.red more red by
     * setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you
     * can change which colours are used.
     *
     * @param index The colour whose palette should be changed.
     * @param colour A 24-bit integer representing the RGB value of the colour.
     * For instance the integer `0xFF0000` corresponds to the colour #FF0000.
     *
     * @see colors.unpackRGB To convert from the 24-bit format to three separate
     * channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit
     * format.
     */
    setPaletteColour(index: number, colour: number): void;

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour
     * should be displayed. For instance, you can make colors.red more red by
     * setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you
     * can change which colours are used.
     *
     * @param index The colour whose palette should be changed.
     * @param r The intensity of the red channel, between 0 and 1.
     * @param g The intensity of the green channel, between 0 and 1.
     * @param b The intensity of the blue channel, between 0 and 1.
     *
     * @see colors.unpackRGB To convert from the 24-bit format to three separate
     * channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit
     * format.
     */
    setPaletteColour(index: number, r: number, g: number, b: number): void;

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour
     * should be displayed. For instance, you can make colors.red more red by
     * setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you
     * can change which colours are used.
     *
     * @param index The colour whose palette should be changed.
     * @param colour A 24-bit integer representing the RGB value of the colour.
     * For instance the integer `0xFF0000` corresponds to the colour #FF0000.
     *
     * @see colors.unpackRGB To convert from the 24-bit format to three separate
     * channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit
     * format.
     */
    setPaletteColor(index: number, colour: number): void;

    /**
     * Set the palette for a specific colour.
     *
     * ComputerCraft's palette system allows you to change how a specific colour
     * should be displayed. For instance, you can make colors.red more red by
     * setting its palette to #FF0000. This does now allow you to draw more
     * colours - you are still limited to 16 on the screen at one time - but you
     * can change which colours are used.
     *
     * @param index The colour whose palette should be changed.
     * @param r The intensity of the red channel, between 0 and 1.
     * @param g The intensity of the green channel, between 0 and 1.
     * @param b The intensity of the blue channel, between 0 and 1.
     *
     * @see colors.unpackRGB To convert from the 24-bit format to three separate
     * channels.
     * @see colors.packRGB To convert from three separate channels to the 24-bit
     * format.
     */
    setPaletteColor(index: number, r: number, g: number, b: number): void;

    /**
     * Get the current palette for a specific colour.
     *
     * @param colour The colour whose palette should be fetched.
     *
     * @returns 1. The red channel, will be between 0 and 1.
     * @returns 2. The green channel, will be between 0 and 1.
     * @returns 3. The blue channel, will be between 0 and 1.
     */
    getPaletteColour(colour: number): [number, number, number];

    /**
     * Get the current palette for a specific colour.
     *
     * @param colour The colour whose palette should be fetched.
     *
     * @returns 1. The red channel, will be between 0 and 1.
     * @returns 2. The green channel, will be between 0 and 1.
     * @returns 3. The blue channel, will be between 0 and 1.
     */
    getPaletteColor(colour: number): [number, number, number];
};
