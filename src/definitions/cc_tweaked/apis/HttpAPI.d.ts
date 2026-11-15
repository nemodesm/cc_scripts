/**
 * @noSelf
 */
declare namespace http {
    function get(
        url: string,
        headers?: { [key: string]: string },
        binary?: boolean
    ):
        | LuaMultiReturn<[Response, nil, nil]>
        | LuaMultiReturn<[nil, string, Response | nil]>;
    function get(request: {
        url: string;
        headers?: { [key: string]: string };
        binary?: boolean;
        method?: string;
        redirect?: boolean;
        timeout?: number;
    }):
        | LuaMultiReturn<[Response, nil, nil]>
        | LuaMultiReturn<[nil, string, Response | nil]>;
    function post(
        url: string,
        body: string,
        headers?: { [key: string]: string },
        binary?: boolean
    ):
        | LuaMultiReturn<[Response, nil, nil]>
        | LuaMultiReturn<[nil, string, Response | nil]>;
    function post(request: {
        url: string;
        body?: string;
        headers?: { [key: string]: string };
        binary?: boolean;
        method?: string;
        redirect?: boolean;
        timeout?: number;
    }):
        | LuaMultiReturn<[Response, nil, nil]>
        | LuaMultiReturn<[nil, string, Response | nil]>;
    function request(
        url: string,
        body?: string,
        headers?: { [key: string]: string },
        binary?: boolean
    ): void;
    function request(request: {
        url: string;
        body?: string;
        headers?: { [key: string]: string };
        binary?: boolean;
        method?: string;
        redirect?: boolean;
        timeout?: number;
    }): void;
    function checkURLAsync(url: string): possibleError;
    function checkURL(url: string): possibleError;
    function websocketAsync(
        url: string,
        headers: { [key: string]: string }
    ): void;
    function websocketAsync(request: {
        url: string;
        headers?: { [key: string]: string };
        timeout?: number;
    }): void;
    function websocket(
        url: string,
        headers: { [key: string]: string }
    ): Websocket;
    function websocket(request: {
        url: string;
        headers?: { [key: string]: string };
        timeout?: number;
    }): Websocket;

    type Response = fs.ReadHandle & {
        getResponseCode(): LuaMultiReturn<[number, string]>;
        getResponseHeaders(): { [key: string]: string }[];
    };
    type Websocket = {
        receive(
            timeout?: number
        ): LuaMultiReturn<[string, boolean]> | LuaMultiReturn<[nil, string]>;
        send(message: string, binary?: boolean): void;
        close(): void;
        getResponseHeaders(): { [key: string]: string };
    };
}
