import { writable } from 'svelte/store';
// Importing the deck
import { card_deck } from '../card_functions/generateDeck';

export const deck = writable(card_deck);
export const num_players = writable(2);
export const current_player = writable(1);
export const top_card = writable(card_deck[0]);
export const players_cards = writable([]);
