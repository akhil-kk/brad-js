// let re;

// // literal chatacters
// re = /hello/;
// re = /hello/i;

// // meta character symbols

// re = /^h/i; // must start with
// re = /World$/i; // must ends with
// re = /^hello$/; // must start with and end with
// re = /^h.llo$/; // must match one character
// re = /h*llo/; // matches any character 0 or more

// re = /gry?a?y/i; //optional character 
// re = /gry?a?y\?/i; //escape character 

// Bracket basically []character sets

re = /gr[ae]y/i; // must be an a or e
re = /[GF]r[ae]y/i; // must be G or F
re = /[^GF]ray/i;   // match anything except g or f
re = /[A-Z]ray/; // any uppercase letter
re = /[a-z]ray/; // any lowercase letter
re = /[A_Za-z]ray/; // macth any letter
re = /[0-9]ray/ // match any digit

// braces {}  -quantifiers

re = /He{2}o/i; // must occure exactly {m} amount of times

re= /Hel{2, 4}o/i;

re  = /Hel{2,}o/ //  must occure atleast m times

//paretheses () Gruping
re = /^([0-9]x){3}$/;

// short hand charatcter classes

re = /\w/; // word character - alphanumeric - word or underscore
re = /w\+/; // = =  one or more
re = /\W/; // non word characters (space exclamations etc)
re = /\d/; //match any digit
re = /\d+/; //match any digit 0 or more times
re = /\D/ // match any non-digit
re = /\s/  // match white space
re = /\S/  // match non white space
re = /Hell\b/i // word boundary

// Assertions
re = /x(?=y)/ // match x only followed by y
re = /x(?!y)/ // match x only if not followed by y
 


// srting to match
const str = '3x3x3x';  

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);   
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);
