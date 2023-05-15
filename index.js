
  const navItems = ['Home', 'Service', 'About', 'Contact'];

  const navLinks = navItems.map(item => {
    return `<a href="#${item}">${item}</a>`;
  });

  const navbar = document.getElementById('navbar');
  navbar.innerHTML = navLinks.join('');

  document.addEventListener('scroll', highlightActiveNavItem);
  window.addEventListener('load', highlightActiveNavItem);

  function highlightActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    let currentSectionIndex = true
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= window.innerHeight / 10) {
        currentSectionIndex = i;
      }
    }

    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[currentSectionIndex].classList.add('active');
  }
  
 const gridItems  = [
  
  {       
    name: 'grid 1',
    svg: '/asset/web-development.svg',
    title: 'web development',
    description: 'blog, e-commerce'
  },

  {
    name: 'grid 2',
    svg: '/asset/ux-design.svg',
    title: 'uI/uX design',
    description: 'Mobile app, website design'
  },

  {
    name: 'grid 3',
    svg: '/asset/Microphone-design.svg',
    title: 'sound design',
    description: 'Voice Over, Beat Making'
  },

  {
    name: 'grid 4',
    svg: './asset/game-design.svg',
    title: 'game design',
    description: 'Character Design, Props & Objects'
  },

  {
    name: 'grid 5',
    svg: './asset/photography.svg',
    title: 'photography',
    description: 'portrait, product photography'
  },

  {
    name: 'grid 6',
    title: 'advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
    text: 'ORDER NOW >'
  },
 ];

 const gridContainer = document.getElementById('grid-container');
 console.log(gridContainer);
 gridItems.forEach(item => {
  if(item.svg){
 const gridItem = document.createElement('div'); 
  gridItem.classList.add('grid-item');

  gridItem.innerHTML = `
  <img src="${item.svg}" alt="${item.name}">
  <h2>${item.title}</h2>
  <p>${item.description}</p>`;
  gridContainer.appendChild(gridItem);
  return gridItem;
} else{
  const gridItem = document.createElement('div'); 
  gridItem.classList.add('grid-item');
  
  gridItem.innerHTML = `
  <h2>${item.title}</h2>
  <p>${item.description}</p>
  <button>${item.text}</button>
 `;
 gridContainer.appendChild(gridItem);
 return gridItem;
}
  
 });



const SchoolsArr = 
[ 
  {
    id: 1,
    name:'University of Toronto',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Bachelor’s degree',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
    
  },

  {
    id: 2,
    name:'Programming institute of Chicago',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Certificate of web training',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
  },

  {
    id: 3,
    name:'web developer courses',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Certificate of web training',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
  },
]

const schoolSection = document.querySelector('#school')
schoolSection.innerHTML = SchoolsArr.map(school => 
  `
  <div class='container'>
    <div class='left'>
    <h1>${school.name}</h1>
    <h2>${school.text}</h2>
    <h3>${school.date}</h3>
    </div>
    <div class='right'>

   ${
    school.certificate ? `<h4>${school.certificate}</h4>` : ''
  }
    <p>${school.paragraph}</p>
    </div>
  </div>
  `).join('');


 
const WorksArr = 
  [
  { 
    id: '4',
    name:'Lead Web Designer',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Certificate of web training',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
  },

  { 
    id: '5',
    name:'Junior Web Designer',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Certificate of web training',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
  },

  {
    id: '6',
    name:'Senior Web Designer',
    text: 'Student',
    date: 'Jan 2016 - Dec 2021',
    certificate: 'Certificate of web training',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.'
  }
]

const workSection = document.querySelector('#work')
workSection.innerHTML = WorksArr.map(work => 
  `
  <div class='container'>
    <div class='left'>
    <h1>${work.name}</h1>
    <h2>${work.text}</h2>
    <h3>${work.date}</h3>
    </div>
    <div class='right'>
   ${
    work.certificate ? `<h4>${work.certificate}</h4>` : ''
  }
    <p>${work.paragraph}</p>
    </div>
  </div>
  `).join('');
   
  const nameField = document.getElementById("fName");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  function validate() {
    let valid = true;

    // validate name field
    if (nameField.value.trim() === "") {
      nameError.textContent = "Name field is required.";
      fName.style.border = "1px solid red";
      valid = false;
    } else {
      nameField.style.border = "1px solid green";
      nameError.textContent = "";
    }

    // validate email field
    if (emailField.value.trim() === "") {
      emailError.textContent = "Email field is required.";
      email.style.border = "1px solid red";
      valid = false;
    } else if (!isValidEmail(emailField.value)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailField.style.border = "1px solid green";
      emailError.textContent = "";
    }

    // if form is valid, submit the form
    // if (valid) {
    //   alert("Form submitted successfully!");
    //   return true;
    // }

    return false;
  }

  function isValidEmail(email) {
    const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRules.test(email);
  }



  
 