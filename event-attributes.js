function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsename.value.length < 5){
        elMsg.textContent = 'Username must be 5 chacracter or more';
    }else{
        elMsg.textContent = ''
    }
}