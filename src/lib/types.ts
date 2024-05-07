export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] as const;

export type Rank = typeof RANKS[number];

// TODO think about '♥' | '♦' | '♠' | '♣';
export const SUITS = ['hearts', 'diamonds', 'spades', 'clubs'] as const;

export type Suit = typeof SUITS[number];

export type Card = {
  rank: Rank;
  suit: Suit;
};

export type Deck = Card[];