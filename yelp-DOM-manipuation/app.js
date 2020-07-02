function loadStar(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'star.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const star = JSON.parse(this.responseText);
            for(i = 0; i<star.length; i++) {
                getChildElements(star[i].id, parseFloat(star[i].rating));
                addReview(star[i].id, star[i].review, star[i].opened);
            }
        }
    }
    xhr.send();
}

function getChildElements(boxId, starRating) {
    const element = document.getElementById(boxId).children;
    childSpanArray = [];
    for(let item in element) {
        if(typeof element[item] === 'object') {
            childSpanArray.push(element[item]);
        }
    }
    addStar(starRating, childSpanArray);
}

function addStar(userRating, childSpanArray) {
    if (Number.isInteger(userRating) === true) {
        for (let i=0; i<userRating; i++) {
            childSpanArray[i].classList.remove('unchecked');
            childSpanArray[i].classList.add('checked');
        }
    } else {
        for (let j=0; j<parseInt(userRating); j++) {
            childSpanArray[j].classList.remove('unchecked');
            childSpanArray[j].classList.add('checked'); 
        } 
        childSpanArray[Math.floor(userRating)].classList.remove('unchecked');
        childSpanArray[Math.floor(userRating)].classList.add('fa-star-half-o');
    }
}

function addReview(boxId, userReview, opened) {
    const element = document.getElementById(boxId).parentElement;
    const showReview = document.createElement('span');
    const textNode = document.createTextNode(`${userReview} reviews`);
    showReview.appendChild(textNode);
    element.appendChild(showReview);

    openedParent = element.parentElement;
    const openedElement = document.createElement('span');
    const openedTextNode = document.createTextNode(`Opened ${opened} ago`);
    openedElement.appendChild(openedTextNode);
    openedParent.appendChild(openedElement);
}

function imageShuffle(businessImage) {
    const orderNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    const imageParentElement = document.getElementById(businessImage);
    imageParentElement.style.order = orderNum;
}

loadStar();
