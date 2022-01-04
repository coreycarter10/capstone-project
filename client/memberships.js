const displayMemberships = arrOfObjs => {
    let listDiv = document.getElementById('listcontainer');
    listDiv.innerHTML = '';
    const newList = document.createElement('ul');
    listDiv.appendChild(newList);

    for (let i = 0; i < arrOfObjs.length; i++) {
        listItem = document.createElement('li');
        listItem.id = arrOfObjs[i].id;
        listItem.appendChild(document.createTextNode(arrOfObjs[i].text));
        newList.appendChild(listItem);
    }
}

const getMemberships = event => {
    event.preventDefault();

    axios.get('http://localhost:4545/api/plans/')
    .then(response => {
        displayMemberships(response.data);
    });
}

const membershipButton = document.getElementById('getMemberships');
membershipButton.addEventListener('click', getMemberships);
