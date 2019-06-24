const enhancer = require('./enhancer.js');
// test away!

// I think the easiest way to do this is using toEqual. 


it('if an item enhancement equals 20, then enhancement remains 20', () => {
    expect(enhancer.succeed({
        "name": "David Lee Roth",
        "enhancement": 20,
        "durability": 20
    })).toEqual({
        "name": "David Lee Roth",
        "enhancement": 20,
        "durability": 20
    });
})

it('if an item enhancement equals 15 or 16, then decrease durability by 10', () => {
    expect(enhancer.fail({
        "name": "Edward Van Halen",
        "enhancement": 16,
        "durability": 60
    })).toEqual({
        "name": "Edward Van Halen",
        "enhancement": 16,
        "durability": 50
    });
})

it('if an item enhancement is < 15, then decrease durability by 5', () => {
    expect(enhancer.fail({
        "name": "David Lee Roth",
        "enhancement": 14,
        "durability": 80
    })).toEqual({
        "name": "David Lee Roth",
        "enhancement": 14,
        "durability": 75
    });
})

it('if an item enhancement is > 16, increase durability by 1', () => {
    expect(enhancer.fail({
        "name": "David Lee Roth",
        "enhancement": 17,
        "durability": 80
    })).toEqual({
        "name": "David Lee Roth",
        "enhancement": 18,
        "durability": 80
    });
})

it('if a repair takes place, then set durability to 100', () => {
    expect(enhancer.repair({
        "name": "Edward Van Halen",
        "enhancement": 17,
        "durability": 55
    })).toEqual({
        "name": "Edward Van Halen",
        "enhancement": 17,
        "durability": 100
    });
})