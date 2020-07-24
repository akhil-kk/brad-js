// Init gihub

const github = new Github;

// Search input

const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {

    //Get input text
    const userText = e.target.value;

    if(userText !== '') {
        console.log(userText);

        //make http call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found') {
                //show alert
            } else {
                //show profile
            }
        })
    } else {
        // clear profile
    }
});