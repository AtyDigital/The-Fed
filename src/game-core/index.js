/**
 * The Fed — game core.
 *
 * A pure, presentation-free model of the game's economy, shared by the React
 * app and (later) the server-side replay verifier. Both must run the exact same
 * rules, so nothing in this folder may import React, the router, styles or
 * artwork.
 *
 * CORE_VERSION is recorded against every session. Changing any rule — a price,
 * a rate, the growth factor — means previously recorded logs no longer replay
 * to the same score, so bump it whenever the economy changes.
 */
export const CORE_VERSION = 1;

export { ITEMS, PRICE_GROWTH } from './items';
export {
    SET_PLAYER,
    START_GAME,
    END_GAME,
    INCREMENT_TIMER,
    PRINT_MONEY,
    PURCHASE_PRODUCT,
    ECONOMIC_ACTIONS,
    isEconomicAction,
    incrementTimer,
    printMoney,
    purchaseProduct
} from './actions';
export { createInitialState, reducer, applyLog } from './reducer';
