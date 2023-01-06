// @ts-nocheck
const card_types = ['Jett', 'Kill Joy', 'Skye', 'Fade'];
const card_powers = ['skip', 'reverse', 'plus two'];
const exclusive_powers = ['wild', 'plus four'];

export const card_deck = [];

for (const type of card_types) {
	for (let i = 0; i < 10; i++) {
		let new_card = {
			variant: type,
			type: 'number',
			number: i
		};

		card_deck.push(new_card);

		if (i != 0) {
			card_deck.push(new_card);
		}
	}

	for (const power of card_powers) {
		let new_card = {
			variant: type,
			type: 'power',
			power: power
		};

		card_deck.push(new_card);
		card_deck.push(new_card);
	}
}

let wild_card = {
	variant: null,
	type: 'power',
	power: exclusive_powers[0]
};

let four_card = {
	variant: null,
	type: 'power',
	power: exclusive_powers[1]
};

card_deck.push(wild_card);
card_deck.push(wild_card);
card_deck.push(wild_card);
card_deck.push(wild_card);
card_deck.push(four_card);
card_deck.push(four_card);
card_deck.push(four_card);
card_deck.push(four_card);
