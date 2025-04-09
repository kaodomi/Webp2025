var container = document.getElementById('container');
var count = 0; // 移到外面，讓它記住錯誤次數

window.onload = function(){
    container.textContent = add_new_chars(3);
}

function add_new_chars(x, b = true){
    var numsize = x;
    if(b){
        numsize = Math.floor(Math.random() * x) + 1;
    }
    var rand_func = '';
    for (let i = 0; i < numsize; i++) {
        var numchars = 97 + Math.floor(Math.random() * 26);
        rand_func += String.fromCharCode(numchars);
    }
    return rand_func;
};

window.addEventListener("keyup", function(e) {
    var firstChar = container.textContent.substring(0, 1);
    
    if(e.key === firstChar){ 
        container.textContent = container.textContent.substring(1); // 移除第一個字元
        count = 0; // 正確輸入，錯誤計數歸零
    } else {
        count++; // 增加錯誤次數
        if (count >= 3) {
            var multiplier = Math.floor(count / 3); // 每三次錯誤觸發一次
            container.textContent += add_new_chars(6 * multiplier, false);
        }
    }

    container.textContent += add_new_chars(3);
});
