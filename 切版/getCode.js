/**
 * 產生隨機數的函式
 */
 function validateCode(n){
    //驗證碼可能包含的字元
var s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var ret=""; //用於儲存生成的驗證碼
    //利用迴圈,隨機產生生成驗證碼的每一個字元
for(var i=0;i<n;i++) {
        var index = Math.floor(Math.random() * 62); //隨機產生一個0~62之間的數字
ret += s.charAt(index);//將隨機產生的數字當作字串的位置下標,在字串s中取出該字元，並加入到ret中
}
        return ret; //返回產生的驗證碼
}
/* 顯示隨機數的函式 */
function show() {
    document.getElementById("msg").innerHTML=validateCode(4);//在id為msg的物件顯示驗證碼
}
window.onload=show();//在整個頁面載入完成後執行此函式

