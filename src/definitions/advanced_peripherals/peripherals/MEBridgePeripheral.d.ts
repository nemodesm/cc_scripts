/**
 * @noSelfInFile
 */
/**
 * The ME Bridge is able to interact with Applied Energistics 2. You can
 * retrieve items, craft items, get all items as a list and more. The ME Bridge
 * uses one channel.
 */
declare type MEBridgePeripheral = Peripheral & {
    /**
     * Returns true if the block is currently connected to a grid
     */
    isConnected(): boolean;
    /**
     * Returns true if the grid is currently online and available
     */
    isOnline(): boolean;

    /**
     * Returns the first item that matches the filter. Or nil with a debug
     * message if none could be found
     */
    getItem(filter: table): table | [null, string];

    /**
     * Returns the first fluid that matches the filter. Or nil with a debug
     * message if none could be found
     */
    getFluid(filter: table): table | [null, string];

    /**
     * Returns the first mekanism chemical that matches the filter. Or nil with
     * a debug message if none could be found
     */
    getChemical(filter: table): table | [null, string];
};
