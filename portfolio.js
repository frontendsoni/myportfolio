// ham toggler start here
let toggleBtn = document.getElementById('ham');
let showNav = document.getElementById('show-nav');
let backArrow = document.getElementById('backArrow');

function toggleButton () {
  toggleBtn.classList.toggle("ham");
}

function showNavigation() {
  showNav.classList.toggle('show-navbar-menu');
}

toggleBtn.addEventListener('click', () => {
  toggleButton();
  showNavigation();
  
})
backArrow.addEventListener('click', () => {
  toggleButton();
  showNavigation();
})

// Toggling companies experience
 const brimmingGraceLink = document.getElementById('brimmingGraceLink');
  const lowestRateLink = document.getElementById('lowestRateLink');
  const brimmingGraceDesc = document.getElementById('brimmingGraceDesc');
  const lowestRateDesc = document.getElementById('lowestRateDesc');

  function clearActive() {
    brimmingGraceLink.classList.remove('active-company');
    lowestRateLink.classList.remove('active-company');
  }
  
  brimmingGraceLink.addEventListener('click', function (e) {
    e.preventDefault(); 
    clearActive();
    brimmingGraceLink.classList.add('active-company');
    brimmingGraceDesc.style.display = 'block'; 
    lowestRateDesc.style.display = 'none'; 
  });

  lowestRateLink.addEventListener('click', function (e) {
    e.preventDefault();
    clearActive();
    lowestRateLink.classList.add('active-company');
    brimmingGraceDesc.style.display = 'none';
    lowestRateDesc.style.display = 'block';
  });
// Toggling my work

const developementBtn = document.getElementById('devBtn');
const uiBtn = document.getElementById('uiBtn');
const devWork = document.getElementById('devWork');
const uiWork = document.getElementById('uiWork');

function removeActive() {
  developementBtn.classList.remove('change-btn');
  uiBtn.classList.remove('change-btn');
}

developementBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  removeActive();
  developementBtn.classList.add('change-btn');
  devWork.style.display = 'block'; 
  uiWork.style.display = 'none'; 
});

uiBtn.addEventListener('click', function (e) {
  e.preventDefault();
  removeActive();
  uiBtn.classList.add('change-btn');
  devWork.style.display = 'none';
  uiWork.style.display = 'block';
});



  // Fetching data from form and its validations

const contactForm = document.getElementById('contactForm');  

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let nameValue = e.target.name.value;
  let emailValue = e.target.email.value;
  let messageValue = e.target.message.value;

  // Validation logic here...

  if (nameValue == "") {
    document.getElementById('nameerr').innerText = 'Please write your full name.';
    return false
  } else {
    document.getElementById('nameerr').innerText = "";
  }
  if (emailValue == "") {
    document.getElementById('emailerr').innerText = 'Please write your email.';
    return false
  } else {
    document.getElementById('emailerr').innerText = "";
  }

  function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  var email = emailValue;
  if (!isValidEmail(email)) {
    document.getElementById('emailerr').innerText = 'Please write a valid email.';
    return false
  } else {
    document.getElementById('emailerr').innerText = "";
  }

  if (nameValue != "" && emailValue != "") {
    let data = {
      name: nameValue,
      email: emailValue,
      message: messageValue
    };

    try {
      const response = await fetch('https://formspree.io/f/xoqolaor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Form submitted successfully
        document.getElementById('form-submit-btn').innerText = "Please wait..."
        setTimeout(()=> {
          document.getElementById('form-submit-btn').innerText = "Form submitted successfully."
        }, 2000);
        console.log('Form submitted successfully');
        contactForm.reset();
      } else {
        // Handle the error here
        console.error('Form submission failed');
        document.getElementById('form-submit-btn').innerText = "Please try again"
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});
