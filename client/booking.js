const bookSession = event => {
    event.preventDefault();

    const day = document.getElementById('sessionDate').value;
    const time = document.getElementById('sessionTime').value;

    axios.post('http://localhost:4545/api/booking/', {
        day,
        time
    })
    .then(res => {
        alert(res.data);
    })
}

const bookSessionButton = document.getElementById('bookSession');
bookSessionButton.addEventListener('click', bookSession);