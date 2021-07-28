<template>
      <div class="box" id="popup">
        <div class = "overlay"></div>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <img style = "" src="@/assets/spots.png"  id= "image">
        <div class = "close-btn" onclick ="togglePopup()">&times;</div>
        <div class = "words">Choose Topics of Interest</div>
        <div class = "btn-group1">
           <!-- <h1 class="choose">Choose</h1>
            <h1 class="your">your </h1>
            <h1 class="moods">Moods</h1>-->
            <button id="work"><i class="fas fa-briefcase"></i>Work</button>
            <button style ="" id ="music"><i class="fas fa-music"></i>Music</button>
            <button style ="" id ="books"><i class="fas fa-book"></i>Books</button>
            <button style ="" id ="fashion"><i class="fas fa-shopping-bag"></i>Fashion</button>
            <button style ="" id ="food"><i class="fas fa-utensils"></i>Food</button>
            <button style ="" id ="relationships"><i class="fas fa-heart"></i>Relationships</button>
            <button style ="" id ="finance"><i class="fas fa-money-bill"></i>Finance</button>
            <button style ="" id ="technology"><i class="fas fa-laptop"></i>Technology</button>
            <button style ="" id ="politics"><i class="fas fa-vote-yea"></i>Politics</button>
            <button style ="" id ="random"><i class="fas fa-random"></i>Random</button>
            <router-link to = "/mood"><button id= "next">Next</button></router-link>

        </div>

       <!--onclick ="togglePopup();"-->
        <!--<div class = "close"></div>-->
       <!-- <div>       <button class= "test" >pop up</button>
    </div>-->
    </div>
</template>

<script>

window.addEventListener('click',function(){
    
    
    let btnwork = document.querySelector('#work');
    let btnmusic = document.querySelector('#music');
    let btnbooks = document.querySelector('#books');
    let btnfashion = document.querySelector('#fashion');
    let btnfood = document.querySelector('#food');
    let btnrelationships = document.querySelector('#relationships');
    let btnfinance = document.querySelector('#finance');
    let btntechnology = document.querySelector('#technology');
    let btnpolitics = document.querySelector('#politics');
    let btnrandom = document.querySelector('#random');

    //if(document.querySelector('#energetic').value)
    btnwork.addEventListener('click', ()=>btnwork.style.backgroundColor= '#A259FF');
    btnwork.addEventListener('click', ()=>btnwork.style.borderColor= '#000000');

    btnmusic.addEventListener('click', ()=>btnmusic.style.backgroundColor= '#A259FF');
    btnmusic.addEventListener('click', ()=>btnmusic.style.borderColor= '#000000');

    btnbooks.addEventListener('click', ()=>btnbooks.style.backgroundColor= '#A259FF');
    btnbooks.addEventListener('click', ()=>btnbooks.style.borderColor= '#000000');

    btnfashion.addEventListener('click', ()=>btnfashion.style.backgroundColor= '#A259FF');
    btnfashion.addEventListener('click', ()=>btnfashion.style.borderColor= '#000000');

    btnfood.addEventListener('click', ()=>btnfood.style.backgroundColor= '#A259FF');
    btnfood.addEventListener('click', ()=>btnfood.style.borderColor= '#000000');

    btnrelationships.addEventListener('click', ()=>btnrelationships.style.backgroundColor= '#A259FF');
    btnrelationships.addEventListener('click', ()=>btnrelationships.style.borderColor= '#000000');

    btnfinance.addEventListener('click', ()=>btnfinance.style.backgroundColor= '#A259FF');
    btnfinance.addEventListener('click', ()=>btnfinance.style.borderColor= '#000000');

    btntechnology.addEventListener('click', ()=>btntechnology.style.backgroundColor= '#A259FF');
    btntechnology.addEventListener('click', ()=>btntechnology.style.borderColor= '#000000');


    btnpolitics.addEventListener('click', ()=>btnpolitics.style.backgroundColor= '#A259FF');
    btnpolitics.addEventListener('click', ()=>btnpolitics.style.borderColor= '#000000');

    btnrandom.addEventListener('click', ()=>btnrandom.style.backgroundColor= '#A259FF');
    btnrandom.addEventListener('click', ()=>btnrandom.style.borderColor= '#000000');



});
    export default {
        name: "Interest"
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
    margin-left: 290px;
    margin-top: 350px;
    display: grid;
    width: 500px;
    //height: 100px;
    grid-gap: 40px 10px;
    //width: 100%;
    //grid-gap-bottom: 5px;
    grid-template-columns: repeat(2,minmax(150px,1fr) );
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

#random,
#politics,
#technology,
#finance,
#relationships,
#food,
#fashion,
#books,
#music,
#work{
    //margin-bottom: 200px;
    //margin-left: 5px;
    background-color: transparent;
    border-color: $purple;
    border-radius: 10px;
    padding-top: 10px;
    height: 40px;
    color: black;
    font-size: 25px;
    //text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    //width: 100%;
    //height: 30px;
}
.fa-briefcase,
.fa-book,
.fa-utensils{
    position: absolute;
    left: 5rem;
    //margin-right: 25px;
}
.fa-money-bill,
.fa-vote-yea{
    position: absolute;
    left: 4rem;
}
.fa-music{
    position: absolute;
    right: 12rem;
}
.fa-shopping-bag
{
    position: absolute;
    right: 13rem;
}

.fa-random{
    position: absolute;
    right: 13rem;
}
.fa-heart{
    position: absolute;
    right: 14.2rem;
}
.fa-laptop{
    position: absolute;
    right: 13.8rem;
}
.your,
.moods{
    font-size: 40px;
    color: $purple;
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
    //position: absolute;
    margin-left: 120px;
    background-color: $purple;
    width: 100%;
    //width: 50px;
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