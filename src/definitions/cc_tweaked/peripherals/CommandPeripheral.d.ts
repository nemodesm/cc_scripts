/**
 * @noSelfInFile
 */
/**
 * This peripheral allows you to interact with command blocks.
 *
 * Command blocks are only wrapped as peripherals if the `enable_command_block`
 * option is true within the config.
 *
 * This API is not the same as the `commands` API, which is exposed on command
 * computers.
 */
declare type CommandPeripheral = Peripheral & {
    /**
     * Get the command this command block will run.
     *
     * @returns The current command.
     */
    getCommand(): string;

    /**
     * Set the command block's command
     *
     * @param command The new command.
     */
    setCommand(command: string): void;

    /**
     * Execute the command block once.
     *
     * @returns 1. If the command completed successfully.
     * @returns 2. A failure message.
     */
    runCommand(): [boolean, string];
};
