import { writable } from 'svelte/store';
// Importing the deck
import { card_deck } from './generateDeck';

export const deck = writable(card_deck);
