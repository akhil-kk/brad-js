// Init gihub
const github = new Github;

// Init Ui
const ui = new UI

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
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear profile
        ui.clearProfile();
    }
});