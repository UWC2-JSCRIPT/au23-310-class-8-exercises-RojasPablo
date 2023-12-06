describe('Tests the accuracy of dealerShouldDraw function', () => {
    it('should return false to not draw with a 10 & 9 in hand', () => {
        const hand = [
            {displayVal: 'ten', val: 10, suit: 'hearts'},
            {displayVal: 'nine', val: 9, suit: 'hearts'}
        ];
        
        const shouldDraw = dealerShouldDraw(hand);
        expect(shouldDraw).toEqual(false)
    })
})

describe('Tests isSoft feature of dealerShouldDraw function', () => {
    it('should return true for isSoft after passing Ace & 6', () => {
        const hand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'six', val: 6, suit: 'hearts'}
        ];

        
        const result = calcPoints(hand);
        const isSoft = result.isSoft;
        const shouldDraw = dealerShouldDraw(hand);

        expect(isSoft).toEqual(true);
        expect(shouldDraw).toEqual(true);
    })
})

describe('Tests the dealerShouldDraw function', () => {
    it('should return false after the values of 10, 6, Ace are passed', () => {
        const hand = [
           {displayVal: 'ten', val: 10, suit: 'hearts'},
           {displayVal: 'six', val: 6, suit: 'hearts'},
           {displayVal: 'Ace', val: 11, suit: 'hearts'}   
        ];
        const shouldDraw = dealerShouldDraw(hand)
        expect(shouldDraw).toEqual(false);
    })
})

describe('Tests dealerShouldDraw function', () => {
    it('should pass as false after being delt a hand of 13 total', () =>{
        const hand = [
           {displayVal: 'two', val: 2, suit: 'hearts'},
           {displayVal: 'four', val: 4, suit: 'hearts'},
           {displayVal: 'two', val: 2, suit: 'spades'}, 
           {displayVal: 'five', val: 5, suit: 'hearts'} 
        ];
        const shouldDraw = dealerShouldDraw(hand);
        expect(shouldDraw).toEqual(true)
    })
})