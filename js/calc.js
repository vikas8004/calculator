let backspace = document.getElementById("backspace");
let clear = document.getElementById("clear");
let res = document.getElementById("res");
let equals = document.getElementById("equals")
clear.addEventListener("click", () => {
    res.value = '';
})

backspace.addEventListener("click", () => {
    let val = res.value;
    val = val.substr(0, val.length - 1)
    res.value = val;
})
equals.addEventListener("click", () => {
    if (res.value == '') {
        res.value == '';
    }
    else {
        res.value = eval(res.value)
    }
})