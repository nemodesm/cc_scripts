declare type ItemDetails = {
    name: string;
    count: number;
    nbt?: string;
    displayName: string;
    lore: string[];
    maxCount: number;
    tags: { [id: string]: true };
    itemGroups: { id: string; displayName: string }[];
    damage: number;
    maxDamage: number;
    durability?: number;
    unbreakable?: boolean;
    enchantments: { name: string; displayName: string; level: number }[];
    potionEffects: {
        name: string;
        displayName: string;
        duration?: number;
        potency?: number;
    }[];
    mapColour?: number;
    mapColor?: number;
};
