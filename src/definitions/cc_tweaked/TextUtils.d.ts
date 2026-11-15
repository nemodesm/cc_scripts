/**
 * @noSelf
 */
declare namespace textutils {
    function tabulate(...args: (string | number)[]): void;
    function unserializeJSON(
        s: string,
        options?: {
            nbt_style?: boolean;
            parse_null?: boolean;
            parse_empty_array?: boolean;
        }
    ): table;
    function unserialiseJSON(
        s: string,
        options?: {
            nbt_style?: boolean;
            parse_null?: boolean;
            parse_empty_array?: boolean;
        }
    ): table;
}
