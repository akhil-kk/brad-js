const user = {email: 'john@gmail.com'}

try {
    //Produce a reference error
    myFunction();

    //syntax error
    eval('Hello world');

    // URI error
    decodeURIComponent('%');

    if(!user.name) {
       throw 'user has no name';
       throw new SyntaxError('User has no name');
    }
} catch(e)    {
    console.log(`User Erroe: ${e.message}`);
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
} finally {
    console.log('Finaly runs regardless of result');
}

console.log('program continues');