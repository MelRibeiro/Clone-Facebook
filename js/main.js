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
