var arr = [];
var arr1 = [];

window.addEventListener('DOMContentLoaded', (event) => {
    var div = document.createElement("div");
    div.className = "header-container"
    var num = 0;
    
    for (i = 0; i < 6; i++) {
        num++;
        var h = document.createElement("h" + num);
        h.className = "h" + num;
        var text = document.createTextNode("This is an h" + num);
        h.appendChild(text);
        div.appendChild(h);
        document.body.appendChild(div);
        arr.push(h);
    }
});

    var color = [
        "#F0F8FF",
        "#FAEBD7",
        "#00FFFF",
        "#7FFFD4",
        "#F0FFFF",
        "#F5F5DC",
        "#7FFF00",
        "#DEB887"
    ];

window.addEventListener('dblclick', (event) => {
    var divToDisplay = event.target.className
    console.log(divToDisplay)
    console.log(arr)


    let randomColor = color[Math.floor(Math.random() * color.length)];
    for (i = 0; i < 6; i++) {
        if (event.target == arr[i]) {
            console.log(randomColor)
            arr[i].style.color = randomColor
        }
    }
    for (i = 0; i < arr1.length; i++) {
        if (event.target == arr1[i]) {
            arr1[i].remove();
        }
    }

});

var newnum = 0;

window.addEventListener('click', (event) => {
    var divToDisplay = event.target.className
    console.log(event.target)
        if (divToDisplay == "button") {
            newListItem();
    }
    let randomColor = color[Math.floor(Math.random() * color.length)];
    for (i = 0; i < arr1.length; i++) {
        if (event.target == arr1[i]) {
            arr1[i].style.color = randomColor
        }
    }

});
function newListItem(){
    newnum++;
    var li = document.createElement("li");
    var item = document.createTextNode("This is list item " + newnum);
    li.appendChild(item)
    document.body.appendChild(li);
    arr1.push(li);
}



// window.onload=function squareButton() {
//     document.body.innerHTML += '<button id="button"onclick="addSquare()">Add Square</button>';
//     document.body.innerHTML += '<div id="squarerow" class="row" ></div>';
// }

// var num = 0;

// function addSquare() {
//     num++;
//     var square = document.getElementById('squarerow');
//     square.innerHTML += `<div id="${num}"class="col-md-1 square" onclick="randomize();removeSquare()">${num}</div>`;
//     console.log(num)
//     //var square = document.getElementById('square')
// }




// function randomize() {
//     var squares = document.getElementsByClassName('square');
//     var letters = '0123456789ABCDEF';
//     var randomColor = '#';
//     document.addEventListener('click', function (e) {
//         var divToDisplay = event.target.id
//         console.log(divToDisplay)
//         randomColor += letters[Math.floor(Math.random() * 16)];
//         for (i = 0; i < squares.length; i++) {
//            if (squares[i].id === divToDisplay) {
//                 return squares[i].style.backgroundColor = randomColor;
//             }
//         }
//     })
// }

// function removeSquare() {
//     var squares = document.getElementsByClassName('square');
//     document.addEventListener('dblclick', function (e) {
//         var divToDisplay = Number(event.target.id) + 1;
//         var divToDisplay1 = Number(event.target.id) - 1;
//         console.log(divToDisplay)
//         for (i = 0; i < squares.length; i++) {
//             if (squares[i].id == divToDisplay && squares[i].id%2 == 1) {
//                 return squares[i].remove();
//             }
//             if (squares[i].id == divToDisplay1 && squares[i].id%2 == 0) {
//                 return squares[i].remove();
//             }
//         }
//     })
// }
