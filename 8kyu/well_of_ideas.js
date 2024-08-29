// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Test cases
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

// Pseudocode
// count the bad ideas in array x (filter?)
// if good ideas > 2 return 'i smell a series'
// if good ideas < 2 && good ideas > 0 return 'publish'
// if good ideas < 0 return 'fail'

function well(x){
    let goodIdeas = x.filter(i => i === 'good' );
    if (goodIdeas.length > 2) {
        return('I smell a series!')
    } else if (goodIdeas.length <= 0) {
        return('Fail!')
    } else {
        return('Publish!')
    }
}


