/**
 * @noSelf
 */
declare interface PeripheralAPI {
    /**
     * @deprecated below 1.21.1
     */
    wrap(name: 'meBridge'): MEBridgePeripheral;
    wrap(name: 'me_bridge'): MEBridgePeripheral;

    find(
        ty: 'meBridge',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): MEBridgePeripheral;
    find(
        ty: 'me_bridge',
        filter?: (name: string, wrapped: Peripheral) => boolean
    ): MEBridgePeripheral;
}
