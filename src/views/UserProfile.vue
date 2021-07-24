<template>
    <div>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="style.css">
    <title>User Profile</title>
    <Header/>
       <div class="modal">
        <img src="@/assets/avatar.png" alt="">
        <div class="close"></div>
    </div>
    
    <div class="container">
        <div class="card">
            <div class="header"></div>
                <a href="#" class="mail">
                    <i class="far fa-envelope"></i>
                </a>
                <div class="main">
                    <div class="image"> 
                        <div class="hover">
                            <i class="fas fa-camera fa-2x"></i>
                        </div>
                    </div>
                    <h3 class="name">Madison Eve, 23</h3>
                    <h3 class="sub-name">jane123@gmail.com, Computer Science, UCLA</h3>
                </div>
                <div class="saved">
                    <div class="saved-text">
                        <a href="#" class="like-button">
                            <i class="fa fa-thumbs-up"></i>
                        </a> 
                        <h3 class="like-text">1.7 likes</h3>
    
                        <a href="#" class="star-button">
                            <i class="fa fa-star"></i>
                        </a>
                        <h3 class="star-text">16 Suggested items</h3>
                        <a href="#" class="comment-button">
                            <i class="fa fa-comments"></i>
                        </a>
                        <h3 class="comment-text">270 mins.</h3>
                    </div>
                </div>
                <div class="mood">
                    <div class="mood-content">
                        <h3 class="title">Mood Tracker:</h3>
                    </div>
                    <div class="mood-image">
                        <img src="@/assets/Group.png" 
                        width="380"
                        height="280"/>
                    </div>
                </div>
                <div class="activity">
                    <div class="activity-content">
                        <h3 class="title">Activity Tracker:</h3>
                    </div>
                    <div class="activity-image">
                        <img src="@/assets/Chart.png"
                        width="500"
                        height="300"/>
                    </div>
                </div>
            </div>
        </div>
        <Disclaimer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Disclaimer from "@/components/Disclaimer.vue";

window.onload = loadPage;
function loadPage(){
const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);
}
export default {
  name: "App",
  components: {
    Header,
    Disclaimer
  },
};


</script>

<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    background-color: #C7B9FF;
}

.container{
    padding: 20px;
    //background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

    .card{
    position: relative;
    width: 1000px;
    height: 610px;
    background-color: rgb(255, 255, 255) ;
    border-radius: 5px;
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
    margin-bottom: 150px;
    overflow: hidden;
    //background-color: black;
    //height: 80vh;
}
.saved:before{
    content: '';
    //display: grid;
    //grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );

    position: absolute;
    width: 35%;
    height: 40%;
    top: 0;
    left: 650px;
    background-image:linear-gradient(to top, #00ffff, #3366ff);
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.like-button{
    position: absolute;
    right: 17rem;
    display: flex;
    //margin-top: -10px;
    height: 265px;
    bottom: 263px;
    color: #fff;
}

.like-text{
    //margin-top: 100px;
    position: absolute;
    margin-left: 745px;
    margin-bottom: 8px;
    //right: 150px;
    display: flex;
    height: 265px;
    bottom: 268px;
    color: #fff;
}

.star-button{
    position: absolute;
    right: 17rem;
    display: flex;
    height: 265px;
    bottom: 208px;
    color: #fff;
}

.star-text{
    position: absolute;
    margin-left: 750px;
    margin-bottom: 5px;
    //right: 100px;
    display: flex;
    height: 265px;
    bottom: 215px;
    color: #fff;
    font-size: 20px;
}

.comment-button{
    position: absolute;
    right: 17rem;
    display: flex;
    height: 270px;
    bottom: 151px;
    color: #fff;
}

.comment-text{
    position: absolute;
    margin-left: 745px;
    margin-bottom: 8px;
    //right: 170px;
    display: flex;
    height: 270px;
    bottom: 158px;
    color: #fff;
}



.mood-image{
    position: absolute;
    left: 5rem;
    top: 288px;
}

.mood-content{
    position: absolute;
    left: 13rem;
    bottom: 324px;
}



.activity-image{
    position: absolute;
    right: 2rem;
    top: 290px;
}

.activity-content{
    position: absolute;
    right: 11rem;
    bottom: 324px;
}

.card:before{
    content: '';
    position: absolute;
    width: 65%;
    height: 40%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #e000fe, #924ffe);
    clip-path: inset(20px 20px 20px 20px round 15px);
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
}

.header{
    //background-color: beige;
    position: relative;
    height: 265px;
}

.mail{
    background: transparent;
    position: absolute;
    top: 1.4rem;
    right: 34px;
    font-size: 1.5rem;
    color: #fff;
    opacity: .6;
    transition: all .2s ease-in-out;
    z-index: 3;
    text-decoration: none;
}


.mail:hover{
    opacity: 1;
    transform: scale(1.02);
}

.main{
    position: relative;
    left: 60px;
    bottom: 230px;
}

.main .image{
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: src= "@/assets/avatar.png"; //no-repeat center / cover;
    overflow: hidden;
    cursor: pointer;
}

.image .hover{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(155, 79, 254, 0.651);
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    transition: .5s;
    opacity: 0;
    background: src= "@/assets/avatar.png" no-repeat center / cover;

}

.image:hover .hover{
    opacity: 1;
}

.name{
   font-size: 1.2rem; 
   color: #fff;
   font-weight: 500;
   line-height: 1;
   margin: 5px 0;
}

.sub-name{
    font-family: 'Cutive Mono', monospace;
    font-size: 1.2rem;
    opacity: .8;
    color: #fff;
}

.modal{
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.8); 
   z-index: -1;
   opacity: 0;
   transition: .5s;
}
.modal img{
    position:absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    transition: .5s;
}

.modal.show{
    opacity: 1;
    z-index: 99;
}

.modal.show img{
    top: 50%;
    transform: translate(-50%, -50%);
}

.close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: .3s;
}

.close:hover{
    opacity: .5;
}

.close:before, .close:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    top: 50%;
    left: 50%;
    background-color: #fff;
}

.close:before{
    transform: translate(-50%, -50%) rotate(45deg);
}

.close:after{
    transform: translate(-50%, -50%) rotate(135deg);
}
</style>