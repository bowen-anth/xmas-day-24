/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 milliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

//hints
// 🎁 This challenge involves adding and removing the "lights-on" CSS class.

// 🎁 You can select all elements with the same class with getElementsByClassName.

// 🎁 getElementsByClassName gives you an HTMLCollection. How can you iterate over it?

// 🎁 setInterval is useful for setting a delay for functions that are executed again and again.

// 🎁 setTimeout might also be useful, especially for the stretch goal.

const blue = document.querySelectorAll('.blue')
const red = document.querySelectorAll('.red')
const green = document.querySelectorAll('.green')
const yellow = document.querySelectorAll('.yellow')
const purple = document.querySelectorAll('.purple')

const blueArray = Array.from(blue)
const redArray = Array.from(red)
const greenArray = Array.from(green)
const yellowArray = Array.from(yellow)
const purpleArray = Array.from(purple)

const blueLightsOn = () => {
    // forEach since don't need map with new array
    blueArray.forEach(light => {
        light.classList.add('lights-on')
    })
        // blueArray.map((light) => {
        //     light.classList.add('lights-on')
        // })
}

const blueLightsOff = () => {
    blueArray.forEach(light => {
        light.classList.remove('lights-on')
    })
}

const redLightsOn = () => {
    redArray.forEach(light => {
        light.classList.add('lights-on')
    })
}

const redLightsOff = () => {
    redArray.forEach(light => {
        light.classList.remove('lights-on')
    })
}

const greenLightsOn = () => {
    greenArray.forEach(light => {
        light.classList.add('lights-on')
    })
}

const greenLightsOff = () => {
    greenArray.forEach(light => {
        light.classList.remove('lights-on')
    })
}

const yellowLightsOn = () => {
    yellowArray.forEach(light => {
        light.classList.add('lights-on')
    })
}

const yellowLightsOff = () => {
    yellowArray.forEach(light => {
        light.classList.remove('lights-on')
    })
}

const purpleLightsOn = () => {
    purpleArray.forEach(light => {
        light.classList.add('lights-on')
    })
}

const purpleLightsOff = () => {
    purpleArray.forEach(light => {
        light.classList.remove('lights-on')
    })
}

setInterval(() => {
    blueLightsOn()
    redLightsOff()
}, "800")

setInterval(() => {
    blueLightsOff()
    redLightsOn()
}, "1600")

setInterval(() => {
    greenLightsOn()
    purpleLightsOff()
    yellowLightsOn()
}, "400")

setInterval(() => {
    greenLightsOff()
    purpleLightsOn()
    yellowLightsOff()
}, "800")

