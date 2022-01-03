const createAccount = event => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:4545/api/signup/', {
        firstName,
        lastName,
        phoneNumber,
        email,
        password
    })
    .then(res => {
        console.log(res.data);
    })
}

const login = event => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    axios.post('http://localhost:4545/api/login/', {
        email,
        password
    })
    .then(res => {
        console.log(res.data)
    })

}

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);

const signupBtn = document.getElementById('signupbtn');
signupBtn.addEventListener('click', createAccount);