const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

// witjout template literals

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>job: ' + job + '</li><li>City: '+ city +'</li></ul>';

document.body.innerHTML = html;

html = '<ul>' + 
<li>Name: ' + name + '</li> +
<li>Age: ' + age + '</li> +
<li>job: ' + job + '</li> +
<li>City: '+ city +'</li>;

// with template literals

html  = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${Age}</li>
    <li>Job: ${Job}</li>
    <li>City: ${City}</li>
    <li>${2 + 2}</li>
    <li>${age > 30 ? 'over 30': 'under 30'}</li>
  </ul>
  `