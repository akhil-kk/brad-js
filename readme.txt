 Javascript Basics

 JS Console

The console object provides us with several different methods, like :

1. log() -  used to print the output to the console.
	eg: console.log('abc');

2. error() - Used to log error message to the console.
	eg: console.error('This is an error');

3. warn() - Used to log warning message to the console.
	eg: console.warn('This is a warning.'); 

4. clear() - Used to clear the console.
	eg: console.clear(); 

5. time() and timeEnd() - to know the amount of time spend by a block or a function.
	eg: console.time('hello');
	     console.log('hello world');
	     console.log('hello world');
	     console.log('hello world');
	     console.log('hello world');
	     console.log('hello world');
	     console.log('hello world');
	     console.log('hello world');
	    console.timeEnd('hello);


1. JavaScript variables were declared using the var keyword followed by the name of the variable.
	eg: var x;
	eg: var mark = 50;

2. The variable type Let is similar with var but unlike var it has scope constraints.
	eg: let name = 'Akhil';	

3. Const is another variable type whose value cannot change throught the script.
	eg: const pi = 3.14;