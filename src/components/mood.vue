<template>
    <div class="box">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
        <img style = "" src="@/assets/spots.png" onclick="popupToggle();">
        <div class = "btn-group1">
            <h1 class="choose">Choose</h1>
            <h1 class="your">your </h1>
            <h1 class="moods">Moods</h1>
            <button  style = "height: 150px" class="energetic"><i class="far fa-sun"></i><p>Energetic</p></button>
            <button style ="" class ="neutral"><i class="far fa-meh"></i><p>Neutral</p></button>
            <button style ="" class = "relaxed"><i class="far fa-smile"></i><p>Relaxed</p></button>
            <button style ="height: 150px" class = "indecisive"><i class="far fa-meh-blank"></i><p>Indecisive</p></button>
            <button style ="" class = 'sad'><i class="far fa-frown"></i><p>Sad</p></button>
            <button  style ="" class = 'sleepy'><i class="far fa-moon"></i><p>Sleepy</p></button>
            <button class= "next">Next</button>
        </div>
        <div class = "close"></div>
    </div>
</template>

<script>
window.onload = loadPage;
function loadPage(){
    const box = document.getElementsByClassName('box');
    function popupToggle(){
    box.classList.toggle('active');
}
box.addEventListener('mousedown', () => {
    popupToggle();
});
}

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
}

.box .btn-group1 {
    //background-color: black;
    //border-color: $purple;
    position: absolute;
    margin-left: 330px;
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
.relaxed, 
.indecisive,
.energetic,
.sad,
.sleepy,
.neutral{
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
.next{
    margin-left: 220px;
    background-color: $purple;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 20px;
}

.energetic:hover,
.neutral:hover,
.relaxed:hover,
.indecisive:hover,
.sad:hover,
.sleepy:hover {
  background-color: $purple;
  &:hover {
    cursor:pointer;
    
  }
}
</style>