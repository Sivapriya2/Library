
// Function to handle login
async function login() {
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    //const remember = document.getElementById('Remember').value;
    if (!username || !password) {
        alert('All fields are required.');
        return;
    }
    else{
        alert('Login Successfull!');
        window.location.href = 'index.html';
    }
}

// Function to handle registration
async function signup() {
    const email = document.getElementById('signupEmail').value;
    const screenName = document.getElementById('signupScreen').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    const checkbox = document.getElementById('checkbox').checked;

    // Basic form validation
    if (!email || !screenName || !password || !confirm) {
        alert('All fields are required.');
        return;
    }

    if (password !== confirm) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    if (!checkbox) {
        alert('Please agree to the terms.');
        return;
    }
    else{
        alert('Registration Successfull!');
        window.location.href = 'index.html';
    }
   
}


