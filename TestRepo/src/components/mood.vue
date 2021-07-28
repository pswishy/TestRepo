<template>
    <div class="box" id="popup">
        <div class = "overlay"></div>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <img style = "" src="@/assets/spots.png"  id= "image">
        <div class = "close-btn" onclick ="togglePopup()">&times;</div>
        <div class = "words">Choose your Moods</div>
        <div class = "btn-group1">
           <!-- <h1 class="choose">Choose</h1>
            <h1 class="your">your </h1>
            <h1 class="moods">Moods</h1>-->
            <button  style = "height: 150px" id="energetic"><i class="far fa-sun"></i><p>Energetic</p></button>
            <button style ="" id ="neutral"><i class="far fa-meh"></i><p>Neutral</p></button>
            <button style ="" id = "relaxed"><i class="far fa-smile"></i><p>Relaxed</p></button>
            <button style ="height: 150px" id = "indecisive"><i class="far fa-meh-blank"></i><p>Indecisive</p></button>
            <button style ="" id = 'sad'><i class="far fa-frown"></i><p>Sad</p></button>
            <button  style ="" id = 'sleepy'><i class="far fa-moon"></i><p>Sleepy</p></button>
            <router-link to = "/chatbot"><button id= "next">Next</button></router-link>
        </div>
       <!--onclick ="togglePopup();"-->
        <!--<div class = "close"></div>-->
       <!-- <div>       <button class= "test" >pop up</button>
    </div>-->
    </div>
    

</template>

<script>

window.addEventListener('click',function(){
    
    
    let btnenergetic = document.querySelector('#energetic');
    let btnneutral = document.querySelector('#neutral');
    let btnrelaxed = document.querySelector('#relaxed');
    let btnindecisive = document.querySelector('#indecisive');
    let btnsad = document.querySelector('#sad');
    let btnsleepy = document.querySelector('#sleepy');
    //if(document.querySelector('#energetic').value)
    btnenergetic.addEventListener('click', ()=>btnenergetic.style.backgroundColor= '#A259FF');
    btnenergetic.addEventListener('click', ()=>btnenergetic.style.borderColor= '#000000');

    btnneutral.addEventListener('click', ()=>btnneutral.style.backgroundColor= '#A259FF');
    btnneutral.addEventListener('click', ()=>btnneutral.style.borderColor= '#000000');

    btnrelaxed.addEventListener('click', ()=>btnrelaxed.style.backgroundColor= '#A259FF');
    btnrelaxed.addEventListener('click', ()=>btnrelaxed.style.borderColor= '#000000');

    btnindecisive.addEventListener('click', ()=>btnindecisive.style.backgroundColor= '#A259FF');
    btnindecisive.addEventListener('click', ()=>btnindecisive.style.borderColor= '#000000');

    btnsad.addEventListener('click', ()=>btnsad.style.backgroundColor= '#A259FF');
    btnsad.addEventListener('click', ()=>btnsad.style.borderColor= '#000000');

    btnsleepy.addEventListener('click', ()=>btnsleepy.style.backgroundColor= '#A259FF');
    btnsleepy.addEventListener('click', ()=>btnsleepy.style.borderColor= '#000000');


});


    //document.getElementsByClassName("test").classList.toggle("active")

//window.attachEvent('onload', function (){
 //  alert('Function #1');
//});
//window.onload = loadPage;
//function loadPage(){
  //  let btnenergetic = document.querySelector('#energetic');
  //  if(document.querySelector('#energetic').value)
  //  btnenergetic.addEventListener('click', ()=>btnenergetic.style.backgroundColor= '#A259FF')
//}

    export default {
        name: "Mood"
    }

</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
*{
  padding: 0;
  margin: 0;
}

.box .close-btn{
transform: translate(-50%, -50%) scale(1);
position: absolute;
top: 7%;
margin-right: 500px;
font-size: 40px;
color: $purple;
//background: black;
}

.words{
position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
    color: $purple;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    margin-left: 15px;
}
.box{
    background: $light-purple;
   //position: relative;
   //width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.box.active{
    visibility: visible;
}
.box img{
    //width: 100%;
    height: 700px;
    //width: 600px;
    border-color: $light-purple;
}
.box .btn-group1 {
    //background-color: black;
    //border-color: $purple;
    position: absolute;
    margin-left: 280px;
    margin-top: 280px;
    display: grid;
    grid-gap: 40px 10px;
    //grid-gap-bottom: 5px;
    grid-template-columns: repeat(3,minmax(150px,1fr) );
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transition: 200ms ease-in-out;
    //background-color: yellow;
    //color: black;
    font-size: 16px;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 5px;
}
#relaxed, 
#indecisive,
#energetic,
#sad,
#sleepy,
#neutral{
    //margin-bottom: 200px;
    //margin-left: 5px;
    background-color: transparent;
    border-color: $purple;
    border-radius: 10px;
}
.fa-sun,
.fa-meh,
.fa-smile,
.fa-meh-blank,
.fa-frown,
.fa-moon{
    font-size: 25px;
    //margin-bottom: 10px;
}
.choose,
.your,
.moods{
    font-size: 40px;
    color: $purple;
}
.choose{
    margin-left: 130px;
}
.your{
    margin-left: 80px;
   //margin-top: 25px;
}
.moods{
    //margin-left: 100px;
    //margin-right: 50px;
    
}
p{
    color: black;
    font-size: 25px;
    //text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
}
#next{
    margin-left: 220px;
    background-color: $purple;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
    &:hover {
    cursor:pointer;
    
  }
}
#energetic:hover,
#neutral:hover,
#relaxed:hover,
#indecisive:hover,
#sad:hover,
#sleepy:hover {
  background-color: $purple;
  &:hover {
    cursor:pointer;
    
  }
}
</style>