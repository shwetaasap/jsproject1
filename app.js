var form=document.getElementById('form');
addEventListener('submit',function(e){
    e.preventDefault();
    var name1=document.getElementById( 'name1').value;
    var cityname=document.getElementById( 'cityname').value;
    if (name1 === 'shweta' || cityname ==='malmo'){
        alert( 'hi how ru?');
    }else{
        document.querySelector('.box1').style.backgroundColor="#ff8080";
        document.querySelector('.box2').style.backgroundColor="#ff8080";
    }
});
