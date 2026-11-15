/**
 * @noSelfInFile
 */
/**
 * Modems allow you to send messages between computers over long distances.
 *
 * > tip
 * >
 * > Modems provide a fairly basic set of methods, which makes them very
 * > flexible but often hard to work with. The rednet API is built on top of
 * > modems, and provides a more user-friendly interface.
 *
 * ### Sending and receiving messages
 *
 * Modems operate on a series of channels, a bit like frequencies on a radio.
 * Any modem can send a message on a particular channel, but only those which
 * have opened the channel and are "listening in" can receive messages.
 *
 * Channels are represented as an integer between 0 and 65535 inclusive. These
 * channels don't have any defined meaning, though some APIs or programs will
 * assign a meaning to them. For instance, the gps module sends all its messages
 * on channel 65534 (gps.CHANNEL_GPS), while rednet uses channels equal to the
 * computer's ID.
 *
 * - Sending messages is done with the transmit message.
 * - Receiving messages is done by listening to the modem_message event.
 *
 * ### Types of modem
 *
 * CC: Tweaked comes with three kinds of modem, with different capabilities.
 *
 * - Wireless modems: Wireless modems can send messages to any other wireless
 *   modem. They can be placed next to a computer, or equipped as a pocket
 *   computer or turtle upgrade.
 * - Wireless modems have a limited range, only sending messages to modems
 *   within 64 blocks. This range increases linearly once the modem is above
 *   y=96, to a maximum of 384 at world height.
 * - Ender modems: These are upgraded versions of normal wireless modems. They
 *   do not have a distance limit, and can send messages between dimensions.
 * - Wired modems: These send messages to other any other wired modems connected
 *   to the same network (using Networking Cable). They also can be used to
 *   attach additional peripherals to a computer.
 *
 * @see modem_message Queued when a modem receives a message on an open channel.
 * @see rednet A networking API built on top of the modem peripheral.
 */
declare type ModemPeripheral = Peripheral & {
    /**
     * Open a channel on a modem. A channel must be open in order to receive
     * messages. Modems can have up to 128 channels open at one time.
     *
     * @param channel The channel to open. This must be a number between 0 and
     * 65535.
     *
     * @throws If the channel is out of range.
     * @throws If there are too many open channels.
     */
    open(channel: number): void;

    /**
     * Check if a channel is open.
     *
     * @param channel The channel to check.
     *
     * @returns Whether the channel is open.
     */
    isOpen(channel: number): boolean;

    /**
     * Close an open channel, meaning it will no longer receive messages.
     *
     * @param channel The channel to close.
     *
     * @throws If the channel is out of range.
     */
    close(channel: number): void;

    /**
     * Close all open channels.
     */
    closeAll(): void;

    /**
     * Sends a modem message on a certain channel. Modems listening on the
     * channel will queue a modem_message event on adjacent computers.
     *
     * @note The channel does not need be open to send a message.
     *
     * @param channel The channel to send messages on.
     * @param replyChannel The channel that responses to this message should be
     * sent on. This can be the same as `channel` or entirely different. The
     * channel must have been opened on the sending computer in order to receive
     * the replies.
     * @param payload The object to send. This can be any primitive type
     * (boolean, number, string) as well as tables. Other types (like
     * functions), as well as metatables, will not be transmitted.
     *
     * @throws If the channel is out of range.
     */
    transmit(channel: number, replyChannel: number, payload: any): void;

    /**
     * Determine if this is a wired or wireless modem.
     *
     * Some methods (namely those dealing with wired networks and remote
     * peripherals) are only available on wired modems.
     *
     * @returns if this is a wireless modem.
     */
    isWireless(): boolean;

    /**
     * List all remote peripherals on the wired network.
     *
     * If this computer is attached to the network, it will not be included in
     * this list.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @returns Remote peripheral names on the network.
     */
    getNamesRemote(): string[];

    /**
     * Determine if a peripheral is available on this wired network.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @param name The peripheral's name.
     *
     * @returns If a peripheral is present with the given name.
     *
     * @see peripheral.isPresent
     */
    isPresentRemote(name: string): boolean;

    /**
     * Get the type of a peripheral is available on this wired network.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @param name The peripheral's name.
     *
     * @returns The peripheral's type, or `nil` if it is not present.
     *
     * @see peripheral.getType
     */
    getTypeRemote(name: string): string | undefined;

    /**
     * Check a peripheral is of a particular type.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @param name The peripheral's name.
     * @param type The type to check.
     *
     * @returns If a peripheral has a particular type, or nil if it is not
     * present.
     *
     * @see peripheral.getType
     */
    hasTypeRemote(name: string, type: string): boolean | undefined;

    /**
     * Get all available methods for the remote peripheral with the given name.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @param name The peripheral's name.
     *
     * @returns A list of methods provided by this peripheral, or nil if it is
     * not present.
     *
     * @see peripheral.getMethods
     */
    getMethodsRemote(name: string): string[] | undefined;

    /**
     * Call a method on a peripheral on this wired network.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @param remoteName The name of the peripheral to invoke the method on.
     * @param method The name of the method
     * @param args Additional arguments to pass to the method
     *
     * @returns The return values of the peripheral method.
     *
     * @see peripheral.call
     */
    callRemote(remoteName: string, method: string, ...args: any[]): string;

    /**
     * Returns the network name of the current computer, if the modem is on.
     * This may be used by other computers on the network to wrap this computer
     * as a peripheral.
     *
     * @note This function only appears on wired modems. Check isWireless
     * returns false before calling it.
     *
     * @returns The current computer's name on the wired network.
     */
    getNameLocal(): string | undefined;
};
