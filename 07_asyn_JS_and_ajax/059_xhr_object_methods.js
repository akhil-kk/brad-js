document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an xhr object
    const xhr = new XMLHttpRequest();
    console.log(typeof XMLHttpRequest());

    // open
    xhr.open('GET', '059_xhr_object_methods.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //optional - used for spinners/ loader
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState)
    }


    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //   if(this.status === 200 && this.readyState === 4) {
    //       console.log(this.responseText);
    //   }  
    // }

    xhr.onerror = function() {
        console.log('request error...')
    }

    xhr.send();

    /// ready state values
    // 0: request not initialised
    // 1: sever connection established
    // 2: request achieved
    // 3: processing request
    // 4: request finished and response is ready


    //HTTP statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

}