// clock

// const hand = document.querySelectorAll('.hand')

const s = document.querySelector('.second')
const m = document.querySelector('.minute')
const h = document.querySelector('.hour')

function clock() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30
    s.style = `transform:rotate(${sec}deg `
    m.style = `transform:rotate(${min}deg `
    h.style = `transform:rotate(${hour}deg `
    setTimeout(() => {
        clock()
    }, 1000);
}
clock()


