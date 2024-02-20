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

function showCompanyDesc(descriptionId, event) {
  event.preventDefault();

  //remove highlight
  const highlightedCompany = document.querySelectorAll('.company');
  highlightedCompany.forEach( item => {
    item.classList.remove('active-company');
  });
  //make the current target highlight
  event.target.classList.add('active-company');
  // hide all active description
  const companyDetail = document.querySelectorAll('.company_desc');
  companyDetail.forEach( companyItem => {
    companyItem.classList.remove('c-active')
  })

  //show active description
  const selectedCompany = document.getElementById(descriptionId);
  selectedCompany.classList.add('c-active');
}

// Toggling my work using event delegation method

const workToggleBtn = document.querySelectorAll('.wt-btn');
const workSections = document.querySelectorAll('.w-section');

workToggleBtn.forEach( btn => {

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.dataset.target;
    //console.log('target id is' + ' ' +targetId)
    toggleWorkSection(targetId);
    workToggleBtn.forEach(item => item.classList.add('secondary_btn'));
     e.currentTarget.classList.remove('secondary_btn');
     e.currentTarget.classList.add('primary_btn');
  })
})

const toggleWorkSection = (targetId) => {
  workSections.forEach(section => {
    if(section.id == targetId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  })
}

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
