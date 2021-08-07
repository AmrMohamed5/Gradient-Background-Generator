let colorOne = document.getElementById('colOne');
let colorTwo = document.getElementById('colTwo');
let finalValue = document.getElementById('colValue');
function gradiant () {
   document.body.style.background = 'linear-gradient(to right,' + colorOne.value + ','+colorTwo.value + ')';
   finalValue.innerHTML = `Your Color Code is : ${colorOne.value} & ${colorTwo.value}`
};
colorOne.addEventListener('input',gradiant);
colorTwo.addEventListener('input',gradiant);