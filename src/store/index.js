import { writable } from 'svelte/store';
// Importing the deck
import { card_deck } from './generateDeck';

export const deck = writable(card_deck);
export const num_players = writable(4);
export const current_player = writable(1);
export const top_card = writable(card_deck[0]);
