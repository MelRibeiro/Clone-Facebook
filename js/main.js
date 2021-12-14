let year = []

function createOptionYear(total) {
  for (let i = 2021; i > 1904; i--) {
    total = year.push(i)
  }
}

createOptionYear()

const select = document.getElementById('select')

year.forEach(function (element, value) {
  select.appendChild(new Option(element, value))
})

let day = []

function createOptionDay(total) {
  for (let i = 1; i <= 31; i++) {
    total = day.push(i)
  }
}

createOptionDay()

const idDay = document.getElementById('idDay')

day.forEach(function (element, value) {
  idDay.appendChild(new Option(element, value))
})

let month = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez'
]

const idMonth = document.getElementById('idMonth')

month.forEach(function (element, value) {
  idMonth.appendChild(new Option(element, value))
})

function startModal (modalID) {
  const modal = document.getElementById(modalID)

  if(modal) {
    modal.classList.add('show')
    modal.addEventListener('click', (event) => {
      if (event.target.id == modalID || event.target.className == 'close') {
      modal.classList.remove('show')
      }
    })
  }
}

const buttonSignUp = document.querySelector('.button-up')
buttonSignUp.addEventListener('click', () => startModal('modal'))


function startSection (sectionID) {
  const section = document.getElementById(sectionID)
  
  if (section) {
    section.classList.add('show-two')
    section.addEventListener('mouseover', (event) => {
      console.log(event.target)
      if (event.target.id == sectionID ) {
        section.classList.remove('show-two')
      } 
    })
  }
}

const questionBirthday = document.querySelector('.question')
questionBirthday.addEventListener('click', () => startSection('section'))


function startSectionGender (sectionG) {
  const section = document.getElementById(sectionG)
 
    section.classList.add('show-three')
    section.addEventListener('mouseover', (event) => {
      console.log(event.target)
      if (event.target.id == sectionG) {
        section.classList.remove('show-three')
      } 
    })
  }


const questionGenders = document.querySelector('.gender')
questionGenders.addEventListener('click', () => startSectionGender('gender-one'))