/**
 * @noSelfInFile
 */
/**
 * A computer or turtle wrapped as a peripheral.
 *
 * This allows for basic interaction with adjacent computers. Computers wrapped
 * as peripherals will have the type `computer` while turtles will be `turtle`.
 */
declare type ComputerPeripheral = Peripheral & {
    /**
     * Turn the other computer on.
     */
    turnOn(): void;

    /**
     * Shutdown the other computer.
     */
    shutdown(): void;

    /**
     * Reboot or turn on the other computer.
     */
    reboot(): void;

    /**
     * Get the other computer's ID.
     *
     * @returns The computer's ID.
     */
    getID(): number;

    /**
     * Determine if the other computer is on.
     *
     * @returns If the computer is on.
     */
    isOn(): boolean;

    /**
     * Get the other computer's label.
     *
     * @returns The computer's label.
     *
     * @see os.getComputerLabel To get your label.
     */
    getLabel(): string | undefined;
};
