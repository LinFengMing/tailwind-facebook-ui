import "./index.css";

const plusBtn = document.getElementById('plus-btn')
const msgBtn = document.getElementById('msg-btn')
const notificationBtn = document.getElementById('notification-btn')
const moreBtn = document.getElementById('more-btn')

const plusPanel = document.getElementById('plus-panel')
const msgPanel = document.getElementById('msg-panel')
const notificationPanel = document.getElementById('notification-panel')
const morePanel = document.getElementById('more-panel')

const panels = [plusPanel, msgPanel, notificationPanel, morePanel]

function openPanel(index) {
  panels.forEach((p, idx) => {
    if (index === idx) {
      p.classList.remove('hidden')
      return
    }

    if (p.classList.contains('hidden')) {
      return
    }

    p.classList.add('hidden')
  })
}

window.addEventListener('click', () => {
  openPanel(-1)
})

plusBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  openPanel(0)
})

msgBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  openPanel(1)
})

notificationBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  openPanel(2)
})

moreBtn.addEventListener('click', (event) => {
  event.stopPropagation()
  openPanel(3)
})
// 取消告訴 window 被點的情況
plusPanel.addEventListener('click', (event) => {
  event.stopPropagation()
})

msgPanel.addEventListener('click', (event) => {
  event.stopPropagation()
})

notificationPanel.addEventListener('click', (event) => {
  event.stopPropagation()
})

morePanel.addEventListener('click', (event) => {
  event.stopPropagation()
})
