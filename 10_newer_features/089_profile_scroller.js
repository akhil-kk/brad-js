const data = [
    {
        name: 'John',
        age: 32,
        gender: 'male',
        lookingfor: 'Female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },

    {
        name: 'Don',
        age: 31,
        gender: 'male',
        lookingfor: 'male',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },

    {
        name: 'Devaki',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'Florida, FL',
        image: 'https://randomuser.me/api/portraits/women/88.jpg'
    }

];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // no more profiles
        window.location.reload();
    }
}

//Profile iterator

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}