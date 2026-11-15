/**
 * @noSelfInFile
 */
/**
 * Turtles are a robotic device, which can break and place blocks, attack mobs,
 * and move about the world. They have an internal inventory of 16 slots,
 * allowing them to store blocks they have broken or would like to place.
 *
 * ### Movement
 *
 * Turtles are capable of moving through the world. As turtles are blocks
 * themselves, they are confined to Minecraft's grid, moving a single block at a
 * time.
 *
 * turtle.forward and turtle.back move the turtle in the direction it is facing,
 * while turtle.up and turtle.down move it up and down (as one might expect!).
 * In order to move left or right, you first need to turn the turtle using
 * turtle.turnLeft/turtle.turnRight and then move forward or backwards.
 *
 * > #### 🛈 info
 * >
 * > The name "turtle" comes from Turtle graphics, which originated from the
 * > Logo programming language. Here you'd move a turtle with various commands
 * > like "move 10" and "turn left", much like ComputerCraft's turtles!
 *
 * Moving a turtle (though not turning it) consumes fuel. If a turtle does not
 * have any fuel, it won't move, and the movement functions will return false.
 * If your turtle isn't going anywhere, the first thing to check is if you've
 * fuelled your turtle.
 *
 * > #### Handling errors
 * >
 * > Many turtle functions can fail in various ways. For instance, a turtle
 * > cannot move forward if there's already a block there. Instead of erroring,
 * > functions which can fail either return true if they succeed, or false and
 * > some error message if they fail.
 * >
 * > Unexpected failures can often lead to strange behaviour. It's often a good
 * > idea to check the return values of these functions, or wrap them in assert
 * > (for instance, use `assert(turtle.forward()`) rather than
 * > `turtle.forward()`), so the program doesn't misbehave.
 *
 * ### Turtle upgrades
 *
 * While a normal turtle can move about the world and place blocks, its
 * functionality is limited. Thankfully, turtles can be upgraded with upgrades.
 * Turtles have two upgrade slots, one on the left and right sides. Upgrades can
 * be equipped by crafting a turtle with the upgrade, or calling the
 * turtle.equipLeft/turtle.equipRight functions.
 *
 * By default, any diamond tool may be used as an upgrade (though more may be
 * added with datapacks). The diamond pickaxe may be used to break blocks (with
 * turtle.dig), while the sword can attack entities (turtle.attack). Other tools
 * have more niche use-cases, for instance hoes can til dirt.
 *
 * Some peripherals (namely speakers and Ender and Wireless modems) can also be
 * equipped as upgrades. These are then accessible by accessing the `"left"` or
 * `"right"` peripheral.
 */
declare interface TurtleAPI {
    /**
     * Craft a recipe based on the turtle's inventory. The turtle's inventory
     * should set up like a crafting grid. For instance, to craft sticks, slots
     * 1 and 5 should contain planks. All other slots should be empty, including
     * those outside the crafting "grid".
     *
     * `turtle.craft(0)` can be used to check whether the turtle contains a
     * valid recipe, without actually crafting it.
     * @returns true If crafting succeeds.
     * @returns false If crafting fails.
     * @returns string A string describing why crafting failed.
     * @throws When limit is less than 0 or greater than 64.
     */
    craft(): possibleError;

    /**
     * Craft a recipe based on the turtle's inventory. The turtle's inventory
     * should set up like a crafting grid. For instance, to craft sticks, slots
     * 1 and 5 should contain planks. All other slots should be empty, including
     * those outside the crafting "grid".
     *
     * `turtle.craft(0)` can be used to check whether the turtle contains a
     * valid recipe, without actually crafting it.
     * @param limit The maximum number of crafting steps to run.
     * @returns true If crafting succeeds.
     * @returns false If crafting fails.
     * @returns string A string describing why crafting failed.
     * @throws When limit is less than 0 or greater than 64.
     */
    craft(limit: number): possibleError;

    /**
     * @deprecated Historically this table behaved differently to the main
     * turtle API, but this is no longer the case. You should not need to use
     * it.
     *
     * The builtin turtle API, without any generated helper functions.
     */
    native: TurtleAPI;

    /**
     * Move the turtle forward one block.
     *
     * @returns boolean Whether the turtle could successfully move.
     * @returns string | nil The reason the turtle could not move.
     */
    forward(): possibleError;

    /**
     * Move the turtle backwards one block.
     *
     * @returns boolean Whether the turtle could successfully move.
     * @returns string | nil The reason the turtle could not move.
     */
    back(): possibleError;

    /**
     * Move the turtle up one block.
     *
     * @returns boolean Whether the turtle could successfully move.
     * @returns string | nil The reason the turtle could not move.
     */
    up(): possibleError;

    /**
     * Move the turtle down one block.
     *
     * @returns boolean Whether the turtle could successfully move.
     * @returns string | nil The reason the turtle could not move.
     */
    down(): possibleError;

    /**
     * Rotate the turtle 90 degrees to the left.
     *
     * @returns boolean Whether the turtle could successfully turn.
     * @returns string | nil The reason the turtle could not turn.
     */
    turnLeft(): possibleError;

    /**
     * Rotate the turtle 90 degrees to the right.
     *
     * @returns boolean Whether the turtle could successfully turn.
     * @returns string | nil The reason the turtle could not turn.
     */
    turnRight(): possibleError;

    /**
     * Attempt to break the block in front of the turtle.
     *
     * This requires a turtle tool capable of breaking the block. Diamond
     * pickaxes (mining turtles) can break any vanilla block breakable in
     * survival mode, but other tools (such as axes) are more limited.
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    dig(): possibleError;
    /**
     * Attempt to break the block in front of the turtle.
     *
     * This requires a turtle tool capable of breaking the block. Diamond
     * pickaxes (mining turtles) can break any vanilla block breakable in
     * survival mode, but other tools (such as axes) are more limited.
     *
     * @param side The specific tool to use. Should be "left" or "right".
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    dig(side: sideLR): possibleError;

    /**
     * Attempt to break the block above the turtle. See dig for full details.
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    digUp(): possibleError;

    /**
     * Attempt to break the block above the turtle. See dig for full details.
     *
     * @param side The specific tool to use.
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    digUp(side: sideLR): possibleError;

    /**
     * Attempt to break the block below the turtle. See dig for full details.
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    digDown(): possibleError;

    /**
     * Attempt to break the block below the turtle. See dig for full details.
     *
     * @param side The specific tool to use.
     *
     * @returns boolean Whether a block was broken.
     * @returns string | nil The reason no block was broken.
     */
    digDown(side: sideLR): possibleError;

    /**
     * Place a block or item into the world in front of the turtle.
     *
     * "Placing" an item allows it to interact with blocks and entities in front
     * of the turtle. For instance, buckets can pick up and place down fluids,
     * and wheat can be used to breed cows. However, you cannot use place to
     * perform arbitrary block interactions, such as clicking buttons or
     * flipping levers.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     */
    place(): possibleError;

    /**
     * Place a block or item into the world in front of the turtle.
     *
     * "Placing" an item allows it to interact with blocks and entities in front
     * of the turtle. For instance, buckets can pick up and place down fluids,
     * and wheat can be used to breed cows. However, you cannot use place to
     * perform arbitrary block interactions, such as clicking buttons or
     * flipping levers.
     *
     * @param text When placing a sign, set its contents to this text.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     */
    place(text: string): possibleError;

    /**
     * Place a block or item into the world above the turtle.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     *
     * @see place
     */
    placeUp(): possibleError;

    /**
     * Place a block or item into the world above the turtle.
     *
     * @param text When placing a sign, set its contents to this text.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     *
     * @see place
     */
    placeUp(text: string): possibleError;

    /**
     * Place a block or item into the world above the turtle.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     *
     * @see place
     */
    placeDown(): possibleError;

    /**
     * Place a block or item into the world above the turtle.
     *
     * @param text When placing a sign, set its contents to this text.
     *
     * @returns boolean Whether the block could be placed.
     * @returns string | nil The reason the block was not placed.
     *
     * @see place
     */
    placeDown(text: string): possibleError;

    /**
     * Drop the currently selected stack into the inventory in front of the
     * turtle, or as an item into the world if there is no inventory.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    drop(): possibleError;

    /**
     * Drop the currently selected stack into the inventory in front of the
     * turtle, or as an item into the world if there is no inventory.
     *
     * @param count The number of items to drop. If not given, the entire stack
     * will be dropped.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    drop(count: number): possibleError;

    /**
     * Drop the currently selected stack into the inventory above the turtle, or
     * as an item into the world if there is no inventory.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    dropUp(): possibleError;

    /**
     * Drop the currently selected stack into the inventory above the turtle, or
     * as an item into the world if there is no inventory.
     *
     * @param count The number of items to drop. If not given, the entire stack
     * will be dropped.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    dropUp(count: number): possibleError;

    /**
     * Drop the currently selected stack into the inventory below the turtle, or
     * as an item into the world if there is no inventory.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    dropDown(): possibleError;

    /**
     * Drop the currently selected stack into the inventory below the turtle, or
     * as an item into the world if there is no inventory.
     *
     * @param count The number of items to drop. If not given, the entire stack
     * will be dropped.
     *
     * @returns boolean Whether items were dropped.
     * @returns string | nil The reason the no items were dropped.
     *
     * @throws If dropping an invalid number of items.
     *
     * @see select
     */
    dropDown(count: number): possibleError;

    /**
     * Change the currently selected slot.
     *
     * The selected slot is determines what slot actions like drop or
     * getItemCount act on.
     *
     * @param slot The slot to select.
     *
     * @returns true When the slot has been selected.
     *
     * @throws If the slot is out of range.
     *
     * @see getSelectedSlot
     */
    select(slot: number): true;

    /**
     * Get the number of items in the currently selected slot.
     *
     * @returns number The number of items in this slot.
     */
    getItemCount(): number;

    /**
     * Get the number of items in the given slot.
     *
     * @param slot The slot we wish to check. Defaults to the selected slot.
     *
     * @returns number The number of items in this slot.
     *
     * @throws If the slot is out of range.
     */
    getItemCount(slot: number): number;

    /**
     * Get the remaining number of items which may be stored in this stack.
     *
     * For instance, if the currently selected contains 13 blocks of dirt, it
     * has room for another 51.
     *
     * @returns The space left in this slot.
     */
    getItemSpace(): number;

    /**
     * Get the remaining number of items which may be stored in this stack.
     *
     * For instance, if a slot contains 13 blocks of dirt, it has room for
     * another 51.
     *
     * @param slot The slot we wish to check. Defaults to the selected slot.
     *
     * @returns The space left in this slot.
     *
     * @throws If the slot is out of range.
     */
    getItemSpace(slot: number): number;

    /**
     * Check if there is a solid block in front of the turtle. In this case,
     * solid refers to any non-air or liquid block.
     *
     * @returns If there is a solid block in front.
     */
    detect(): boolean;

    /**
     * Check if there is a solid block above the turtle. In this case, solid
     * refers to any non-air or liquid block.
     *
     * @returns If there is a solid block above.
     */
    detectUp(): boolean;

    /**
     * Check if there is a solid block below the turtle. In this case, solid
     * refers to any non-air or liquid block.
     *
     * @returns If there is a solid block below.
     */
    detectDown(): boolean;

    /**
     * Check if the block in front of the turtle is equal to the item in the
     * currently selected slot.
     *
     * @returns If the block and item are equal.
     */
    compare(): boolean;

    /**
     * Check if the block above the turtle is equal to the item in the currently
     * selected slot.
     *
     * @returns If the block and item are equal.
     */
    compareUp(): boolean;

    /**
     * Check if the block below the turtle is equal to the item in the currently
     * selected slot.
     *
     * @returns If the block and item are equal.
     */
    compareDown(): boolean;

    /**
     * Attack the entity in front of the turtle.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attack(): possibleError;

    /**
     * Attack the entity in front of the turtle.
     *
     * @param side The specific tool to use.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attack(side: sideLR): possibleError;

    /**
     * Attack the entity above the turtle.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attackUp(): possibleError;

    /**
     * Attack the entity above the turtle.
     *
     * @param side The specific tool to use.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attackUp(side: sideLR): possibleError;

    /**
     * Attack the entity below the turtle.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attackDown(): possibleError;

    /**
     * Attack the entity below the turtle.
     *
     * @param side The specific tool to use.
     *
     * @returns boolean Whether an entity was attacked.
     * @returns string | nil The reason nothing was attacked.
     */
    attackDown(side: sideLR): possibleError;

    /**
     * Suck an item from the inventory in front of the turtle, or from an item
     * floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the
     * currently selected one.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suck(): possibleError;

    /**
     * Suck an item from the inventory in front of the turtle, or from an item
     * floating in the world.
     *
     * This will pull items into the first acceptable slot, starting at the
     * currently selected one.
     *
     * @param count The number of items to suck. If not given, up to a stack of
     * items will be picked up.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suck(count: number): possibleError;

    /**
     * Suck an item from the inventory above the turtle, or from an item
     * floating in the world.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suckUp(): possibleError;

    /**
     * Suck an item from the inventory above the turtle, or from an item
     * floating in the world.
     *
     * @param count The number of items to suck. If not given, up to a stack of
     * items will be picked up.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suckUp(count: number): possibleError;

    /**
     * Suck an item from the inventory below the turtle, or from an item
     * floating in the world.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suckDown(): possibleError;

    /**
     * Suck an item from the inventory below the turtle, or from an item
     * floating in the world.
     *
     * @param count The number of items to suck. If not given, up to a stack of
     * items will be picked up.
     *
     * @returns boolean Whether items were picked up.
     * @returns string | nil The reason the no items were picked up.
     *
     * @throws If given an invalid number of items.
     */
    suckDown(count: number): possibleError;
    /**
     * Get the maximum amount of fuel this turtle currently holds.
     *
     * @returns The current amount of fuel a turtle this turtle has.
     * @returns "unlimited" If turtles do not consume fuel when moving.
     *
     * @see getFuelLimit
     * @see refuel
     */
    getFuelLevel(): number | unlimited;

    /**
     * Refuel this turtle.
     *
     * While most actions a turtle can perform (such as digging or placing
     * blocks) are free, moving consumes fuel from the turtle's internal buffer.
     * If a turtle has no fuel, it will not move.
     *
     * refuel refuels the turtle, consuming fuel items (such as coal or lava
     * buckets) from the currently selected slot and converting them into
     * energy. This finishes once the turtle is fully refuelled or all items
     * have been consumed.
     *
     * @returns true If the turtle was refuelled.
     *
     * OR
     *
     * @returns false If the turtle was not refuelled.
     * @returns string The reason the turtle was not refuelled.
     *
     * @throws If the refuel count is out of range.
     *
     * @see getFuelLevel
     * @see getFuelLimit
     */
    refuel(): possibleError;

    /**
     * Refuel this turtle.
     *
     * While most actions a turtle can perform (such as digging or placing
     * blocks) are free, moving consumes fuel from the turtle's internal buffer.
     * If a turtle has no fuel, it will not move.
     *
     * refuel refuels the turtle, consuming fuel items (such as coal or lava
     * buckets) from the currently selected slot and converting them into
     * energy. This finishes once the turtle is fully refuelled or all items
     * have been consumed.
     *
     * @param count The maximum number of items to consume. One can pass 0 to
     * check if an item is combustable or not.
     *
     * @returns true If the turtle was refuelled.
     *
     * OR
     *
     * @returns false If the turtle was not refuelled.
     * @returns string The reason the turtle was not refuelled.
     *
     * @throws If the refuel count is out of range.
     *
     * @see getFuelLevel
     * @see getFuelLimit
     */
    refuel(count: number): possibleError;

    /**
     * Compare the item in the currently selected slot to the item in another
     * slot.
     *
     * @param slot The slot to compare to.
     *
     * @returns boolean If the two items are equal.
     *
     * @throws If the slot is out of range.
     */
    compareTo(slot: number): boolean;

    /**
     * Move an item from the selected slot to another one.
     *
     * @param slot If the slot is out of range.
     *
     * @returns If some items were successfully moved.
     *
     * @throws If the slot is out of range.
     * @throws If the number of items is out of range.
     */
    transferTo(slot: number): boolean;

    /**
     * Move an item from the selected slot to another one.
     *
     * @param slot If the slot is out of range.
     * @param count The maximum number of items to move.
     *
     * @returns If some items were successfully moved.
     *
     * @throws If the slot is out of range.
     * @throws If the number of items is out of range.
     */
    transferTo(slot: number, count: number): boolean;

    /**
     * Get the currently selected slot.
     *
     * @returns The current slot.
     *
     * @see select
     */
    getSelectedSlot(): number;

    /**
     * Get the maximum amount of fuel this turtle can hold.
     *
     * By default, normal turtles have a limit of 20,000 and advanced turtles of
     * 100,000.
     *
     * @returns number The maximum amount of fuel a turtle can hold.
     * @returns "unlimited" If turtles do not consume fuel when moving.
     *
     * @see getFuelLevel
     * @see refuel
     */
    getFuelLimit(): number | unlimited;

    /**
     * Equip (or unequip) an item on the left side of this turtle.
     *
     * This finds the item in the currently selected slot and attempts to equip
     * it to the left side of the turtle. The previous upgrade is removed and
     * placed into the turtle's inventory. If there is no item in the slot, the
     * previous upgrade is removed, but no new one is equipped.
     *
     * @returns true If the item was equipped.
     *
     * OR
     *
     * @returns false If we could not equip the item.
     * @returns string The reason equipping this item failed.
     *
     * @see equipRight
     * @see getEquippedLeft
     */
    equipLeft(): possibleError;

    /**
     * Equip (or unequip) an item on the right side of this turtle.
     *
     * This finds the item in the currently selected slot and attempts to equip
     * it to the right side of the turtle. The previous upgrade is removed and
     * placed into the turtle's inventory. If there is no item in the slot, the
     * previous upgrade is removed, but no new one is equipped.
     *
     * @returns true If the item was equipped.
     *
     * OR
     *
     * @returns false If we could not equip the item.
     * @returns string The reason equipping this item failed.
     *
     * @see equipLeft
     * @see getEquippedRight
     */
    equipRight(): possibleError;

    /**
     * Get the upgrade currently equipped on the left of the turtle.
     *
     * This returns information about the currently equipped item.
     *
     * @returns ItemDetails | nil Information about the currently equipped item,
     * or nil if no upgrade is equipped.
     *
     * @see equipLeft
     * @see ItemDetails
     */
    getEquippedLeft(): ItemDetails | nil;

    /**
     * Get the upgrade currently equipped on the right of the turtle.
     *
     * This returns information about the currently equipped item.
     *
     * @returns ItemDetails | nil Information about the currently equipped item,
     * or nil if no upgrade is equipped.
     *
     * @see equipRight
     * @see ItemDetails
     */
    getEquippedRight(): ItemDetails | nil;

    /**
     * Get information about the block in front of the turtle.
     *
     * @returns boolean Whether there is a block in front of the turtle.
     * @returns table | string Information about the block in front, or a
     * message explaining that there is no block.
     *
     * @see BlockDetails
     */
    inspect(): possibleError | [true, BlockDetails];

    /**
     * Get information about the block above the turtle.
     *
     * @returns boolean Whether there is a block above the turtle.
     * @returns table | string Information about the block above, or a message
     * explaining that there is no block.
     *
     * @see BlockDetails
     */
    inspectUp(): possibleError | [true, BlockDetails];

    /**
     * Get information about the block below the turtle.
     *
     * @returns boolean Whether there is a block below the turtle.
     * @returns table | string Information about the block below, or a message
     * explaining that there is no block.
     *
     * @see BlockDetails
     */
    inspectDown(): possibleError | [true, BlockDetails];

    /**
     * Get information about the items in the given slot.
     *
     * @returns nil | table Information about the item in this slot, or nil if
     * it is empty.
     *
     * @throws If the slot is out of range.
     *
     * @see ItemDetails
     */
    getItemDetail(): nil | ItemDetails;

    /**
     * Get information about the items in the given slot.
     *
     * @param slot The slot to get information about. Defaults to the selected
     * slot.
     *
     * @returns nil | table Information about the item in this slot, or nil if
     * it is empty.
     *
     * @throws If the slot is out of range.
     *
     * @see ItemDetails
     */
    getItemDetail(slot: number): nil | ItemDetails;

    /**
     * Get information about the items in the given slot.
     *
     * @param slot The slot to get information about. Defaults to the selected
     * slot.
     * @param detailed Whether to include "detailed" information. When true the
     * method will contain much more information about the item at the cost of
     * taking longer to run.
     *
     * @returns nil | table Information about the item in this slot, or nil if
     * it is empty.
     *
     * @throws If the slot is out of range.
     *
     * @see ItemDetails
     */
    getItemDetail(slot: number, detailed: boolean): nil | ItemDetails;
}
