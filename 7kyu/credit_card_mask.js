// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// Solution:

function maskify(cc) {
    let deleted = cc.split('').splice(0, cc.length-4);
    let lastFour = cc.split('').splice(-4).join('');
    let mask = deleted.map(e => '#').join('');
    return mask + lastFour;
}

// a much simpler refactor after a brain reset
// function maskify(cc) {
//     return cc.slice(-4).padStart(cc.length,'#')
//   }

