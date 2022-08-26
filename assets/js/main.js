function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber

    function updateNumber() {
        if (currentNumber < finalNumber) {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                callback(currentNumber)
            } else {
                currentNumber += inc
                callback(currentNumber)
                requestAnimationFrame(updateNumber)
            }
        }
    }
    requestAnimationFrame(updateNumber)
}

document.addEventListener('DOMContentLoaded', function() {
    animateNumber(1200, 3000, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.house-count').innerText = formattedNumber
    })

    animateNumber(64, 3000, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.city-count').innerText = formattedNumber
    })

    animateNumber(10000, 3000, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.traffic-count').innerText = formattedNumber
    })

    animateNumber(100, 3000, 0, function(number) {
        const formattedNumber = number.toLocaleString()
        document.querySelector('.transaction-count').innerText = formattedNumber
    })
})