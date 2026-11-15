/**
 * @noSelf
 */
declare interface PeripheralAPI {
    /**
     * Provides a list of all peripherals available.
     *
     * If a device is located directly next to the system, then its name will be
     * listed as the side it is attached to. If a device is attached via a Wired
     * Modem, then it'll be reported according to its name on the wired network.
     *
     * @returns A list of the names of all attached peripherals.
     */
    getNames(): string[];

    /**
     * Determines if a peripheral is present with the given name.
     *
     * @param name The side or network name that you want to check.
     *
     * @returns If a peripheral is present with the given name.
     */
    isPresent(name: string): boolean;

    /**
     * Get the types of a named or wrapped peripheral.
     *
     * @param peripheral The name of the peripheral to find, or a wrapped
     * peripheral instance.
     *
     * @returns The peripheral's types, or `nil` if it is not present.
     */
    getType(peripheral: string | Peripheral): string;

    /**
     * Check if a peripheral is of a particular type.
     *
     * @param peripheral The name of the peripheral or a wrapped peripheral
     * instance.
     * @param peripheral_type The type to check.
     *
     * @returns If a peripheral has a particular type, or `nil` if it is not
     * present.
     */
    hasType(peripheral: string | Peripheral, peripheral_type: string): boolean;

    /**
     * Get all available methods for the peripheral with the given name.
     *
     * @param name The name of the peripheral to find.
     *
     * @returns A list of methods provided by this peripheral, or `nil` if it is
     * not present.
     */
    getMethods(name: string): string[] | undefined;

    /**
     * Get the name of a peripheral wrapped with peripheral.wrap.
     *
     * @param peripheral The peripheral to get the name of.
     *
     * @returns The name of the given peripheral.
     */
    getName(peripheral: Peripheral): string;

    /**
     * Call a method on the peripheral with the given name.
     *
     * @param name The name of the peripheral to invoke the method on.
     * @param method The name of the method
     * @param args Additional arguments to pass to the method
     *
     * @returns The return values of the peripheral method.
     */
    call(name: string, method: string, ...args: any[]): any;

    wrap(name: 'command'): CommandPeripheral;
    wrap(name: 'computer'): ComputerPeripheral;
    wrap(name: 'drive'): DrivePeripheral;
    wrap(name: 'modem'): ModemPeripheral;
    wrap(name: 'monitor'): MonitorPeripheral;
    wrap(name: string): Peripheral;

    find(
        ty: 'command',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): CommandPeripheral;
    find(
        ty: 'computer',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): ComputerPeripheral;
    find(
        ty: 'drive',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): DrivePeripheral;
    find(
        ty: 'modem',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): ModemPeripheral;
    find(
        ty: 'monitor',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): MonitorPeripheral;
    find(
        ty: string,
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): Peripheral;
}
