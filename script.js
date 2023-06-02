let rd = document.getElementById('red')
let bl = document.getElementById('blue')
let yl = document.getElementById('yellow')
let gn = document.getElementById('green')
let i = document.getElementById('i')
let b = document.getElementById('b')
let u = document.getElementById('u')
let fontSize = document.getElementById('fontsize')
let upcase = document.getElementById('uppercase')
let locase = document.getElementById('lowercase')
let capital = document.getElementById('capital')
let textArea = document.getElementById('textarea')


rd.addEventListener('click', function () {
    textArea.style.color = 'red'
})
bl.addEventListener('click', function () {
    textArea.style.color = 'blue'
})
yl.addEventListener('click', function () {
    textArea.style.color = 'yellow'
})
gn.addEventListener('click', function () {
    textArea.style.color = 'green'
})
i.addEventListener('click', function () {
    textArea.style.fontStyle = 'italic'
})
b.addEventListener('click', function () {
    textArea.style.fontWeight = 'bold'
})
u.addEventListener('click', function () {
    textArea.style.textDecoration = 'underline'
})
upcase.addEventListener('click', function () {
    let textArea = document.getElementById('textarea');
    textArea.value = textArea.value.toUpperCase();
});
locase.addEventListener('click', function () {
    let textArea = document.getElementById('textarea')
    textArea.value = textArea.value.toLowerCase()
})
capital.addEventListener('click', function () {
    let textArea = document.getElementById('textarea');
    let name1 = textArea.value.split(" ");

    let finalString = "";
    for (let i = 0; i < name1.length; i++) {
        let new1 = name1[i].charAt(0).toUpperCase() + name1[i].slice(1);
        finalString = finalString + new1;
        finalString = finalString + " ";
    }
    
    textArea.value = finalString.trim();
});

fontSize.addEventListener('click', function () {
    fz = prompt('Enter font size')
    textArea.style.fontSize = fz + 'px'
})