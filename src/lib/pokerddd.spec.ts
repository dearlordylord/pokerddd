import { Rank, RANKS, Suit, SUITS } from './types';

describe('pokerddd', () => {
  it('ranks and suits are immutable', () => {
    // @ts-expect-error
    RANKS[0] = 'A';
    // @ts-expect-error
    SUITS[0] = 'hearts';
  });
  it('ranks and suits cannot accept an invalid string', () => {
    const _validRanks: Rank[] = ['2'];
    // @ts-expect-error
    const _invalidRanks: Rank[] = ['1', '11', '12', '13', '14'];
    const _validSuits: Suit[] = ['hearts'];
    // @ts-expect-error
    const _invalidSuits: Suit[] = ['heart', 'diamond', 'spade', 'club'];
  });
});
