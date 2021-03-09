console.log("Wu's Output from hw4 Exercise 5");

let word = prompt("Please enter a word:")

function vowel_count(s) {
    const length = s.length;   
    let vowel_list = 'aeiouyAEIOUY';
    let vCount = 0;
    let isPalindrome = true;

    for(i = 0; i < length; i++) {
        if (vowel_list.indexOf(s[i]) !== -1) {
            vCount++;
        }
        if (isPalindrome && (i < (length / 2))) {
            isPalindrome =  (s.toLowerCase()[i] === s.toLowerCase()[length - i - 1])
        }
    
    }
    if (isPalindrome) {
        console.log(`${s} contains ${vCount} vowels and is a palindrome.`);
    }
    else {
        console.log(`${s} contains ${vCount} vowels and is not a palindrom.`);
    }
}

vowel_count(word)



