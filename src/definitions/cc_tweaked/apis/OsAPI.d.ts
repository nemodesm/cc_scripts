/**
 * @noSelfInFile
 */

declare type eventType =
    | 'alarm'
    | 'char'
    | 'computer_command'
    | 'disk'
    | 'disk_eject'
    | 'file_transfer'
    | 'http_check'
    | 'http_failure'
    | 'http_success'
    | 'key'
    | 'key_up'
    | 'modem_message'
    | 'monitor_resize'
    | 'monitor_touch'
    | 'mouse_click'
    | 'mouse_drag'
    | 'mouse_scroll'
    | 'mouse_up'
    | 'paste'
    | 'peripheral'
    | 'peripheral_detach'
    | 'rednet_message'
    | 'redstone'
    | 'setting_changed'
    | 'speaker_audio_empty'
    | 'task_complete'
    | 'term_resize'
    | 'terminate'
    | 'timer'
    | 'turtle_inventory'
    | 'websocket_closed'
    | 'websocket_failure'
    | 'websocket_message'
    | 'websocket_success';

declare interface OsAPI {}
declare namespace os {
    function pullEvent(): LuaMultiReturn<[eventType, any, any, any]>;
    function pullEvent(
        name: eventType
    ): LuaMultiReturn<[eventType, any, any, any]>;
    // ev, side of peripheral
    function pullEvent(
        name: 'monitor_touch'
    ): LuaMultiReturn<['monitor_touch', direction, number, number]>;
    // ev, side of peripheral
    function pullEvent(
        name: 'monitor_resize'
    ): LuaMultiReturn<['monitor_resize', direction, number, number]>;
    // ev, key code, is repeating
    function pullEvent(name: 'key'): LuaMultiReturn<['key', number, boolean]>;
    // ev, key code
    function pullEvent(name: 'key_up'): LuaMultiReturn<['key_up', number]>;
    function pullEvent(
        name: 'mouse_click'
    ): LuaMultiReturn<['mouse_click', number, number, number]>;
    function pullEvent(
        name: 'mouse_up'
    ): LuaMultiReturn<['mouse_up', number, number, number]>;
    function pullEvent(
        name: 'mouse_drag'
    ): LuaMultiReturn<['mouse_drag', number, number, number]>;
    function pullEvent(
        name: 'peripheral_detach'
    ): LuaMultiReturn<['peripheral_detach', direction]>;
    function pullEvent(
        name: 'peripheral'
    ): LuaMultiReturn<['peripheral', direction]>;
    function pullEvent(name: 'char'): LuaMultiReturn<['char', string]>;
}
