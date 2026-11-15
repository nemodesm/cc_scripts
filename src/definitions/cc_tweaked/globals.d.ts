/**
 * @noSelfInFile
 */

/**
 * Find and control peripherals attached to this computer.
 *
 * Peripherals are blocks (or turtle and pocket computer upgrades) which can be
 * controlled by a computer. For instance, the speaker peripheral allows a
 * computer to play music and the monitor peripheral allows you to display text
 * in the world.
 *
 * ### Referencing peripherals
 *
 * Computers can interact with adjacent peripherals. Each peripheral is given a
 * name based on which direction it is in. For instance, a disk drive below your
 * computer will be called `"bottom"` in your Lua code, one to the left called
 * `"left"` , and so on for all 6 directions (`"bottom"`, `"top"`, `"left"`,
 * `"right"`, `"front"`, `"back"`).
 *
 * You can list the names of all peripherals with the `peripherals` program, or
 * the peripheral.getNames function.
 *
 * It's also possible to use peripherals which are further away from your
 * computer through the use of Wired Modems. Place one modem against your
 * computer (you may need to sneak and right click), run Networking Cable to
 * your peripheral, and then place another modem against that block. You can
 * then right click the modem to use (or attach) the peripheral. This will print
 * a peripheral name to chat, which can then be used just like a direction name
 * to access the peripheral. You can click on the message to copy the name to
 * your clipboard.
 *
 * ### Using peripherals
 *
 * Once you have the name of a peripheral, you can call functions on it using
 * the peripheral.call function. This takes the name of our peripheral, the name
 * of the function we want to call, and then its arguments.
 *
 * > #### info
 * >
 * > Some bits of the peripheral API call peripheral functions methods instead
 * > (for example, the peripheral.getMethods function). Don't worry, they're the
 * > same thing!
 *
 * Let's say we have a monitor above our computer (and so "top") and want to
 * write some text to it. We'd write the following:
 *
 * ```lua
 * peripheral.call("top", "write", "This is displayed on a monitor!")
 * ```
 *
 * Once you start calling making a couple of peripheral calls this can get very
 * repetitive, and so we can wrap a peripheral. This builds a table of all the
 * peripheral's functions so you can use it like an API or module.
 *
 * For instance, we could have written the above example as follows:
 *
 * ```lua
 * local my_monitor = peripheral.wrap("top")
 * my_monitor.write("This is displayed on a monitor!")
 * ```
 *
 * ### Finding peripherals
 *
 * Sometimes when you're writing a program you don't care what a peripheral is
 * called, you just need to know it's there. For instance, if you're writing a
 * music player, you just need a speaker - it doesn't matter if it's above or
 * below the computer.
 *
 * Thankfully there's a quick way to do this: peripheral.find. This takes a
 * peripheral type and returns all the attached peripherals which are of this
 * type.
 *
 * What is a peripheral type though? This is a string which describes what a
 * peripheral is, and so what functions are available on it. For instance,
 * speakers are just called `"speaker"`, and monitors `"monitor"`. Some
 * peripherals might have more than one type - a Minecraft chest is both a
 * `"minecraft:chest"` and `"inventory"`.
 *
 * You can get all the types a peripheral has with peripheral.getType, and check
 * a peripheral is a specific type with peripheral.hasType.
 *
 * To return to our original example, let's use peripheral.find to find an
 * attached speaker:
 *
 * ```lua
 * local speaker = peripheral.find("speaker")
 * speaker.playNote("harp")
 * ```
 *
 * @see peripheral This event is fired whenever a new peripheral is attached.
 * @see peripheral_detach This event is fired whenever a peripheral is detached.
 */
declare const peripheral: PeripheralAPI;
declare const turtle: TurtleAPI;
declare const shell: ShellAPI;
