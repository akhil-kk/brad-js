let re;

// literal chatacters
re = /hello/;
re = /hello/i;

// meta character symbols

re = /^h/i; // must start with
re = /World$/i; // must ends with
re = /^hello$/; // must start with and end with
re = /^h.llo$/; // must match one character
re = /h*llo/; // matches any character 0 or more

re = /gry?a?y/i; //optional character 
re = /gry?a?y\?/i; //escape character 


// srting to match
const str = 'Gray';  

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
