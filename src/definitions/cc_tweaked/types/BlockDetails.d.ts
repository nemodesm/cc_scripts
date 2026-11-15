declare type BlockDetails = {
    name: string;
    state: { [id: string]: any };
    tags?: { [id: string]: true };
    mapColour?: number;
    mapColor?: number;
};
