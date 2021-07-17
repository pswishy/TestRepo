<template>
    <div>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="style.css">
    <title>User Profile</title>
    <Header/>
       <div class="modal">
        <img src="img/avataaars.png" alt="">
        <div class="close"></div>
    </div>

    <div class="container">
        <div class="card">
            <div class="header">
                </div>
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
                        <a href="#" class="like-button">
                            <i class="fa fa-thumbs-up"></i>
                        </a> 
                    <h3 class="like-text">1.7 likes</h3>

                    <a href="#" class="star-button">
                        <i class="fa fa-star"></i>
                    </a>
                    <h3 class="star-text">Suggested items</h3>
                    <a href="#" class="comment-button">
                        <i class="fa fa-comments"></i>
                    </a>
                    <h3 class="comment-text">comments</h3>
                </div>
                <div class="mood">
                    
                </div>
                <div class="activity">

                </div>
            </div>
            </div>
            <div class="content">
                <div class="left">
                    <div class="about-container">
                        <h3 class="title">About</h3>
                        <p class="text">hello</p>
                    </div>
                </div>

                <div class="right"></div>
            </div>
        </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card{
    position: relative;
    width: 1000px;
    height: 600px;
    background-color: rgb(255, 255, 255) ;
    border-radius: 5px;
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
    overflow: hidden;
}
.saved:before{
    content: '';
    position: absolute;
    width: 35%;
    height: 45%;
    top: 0;
    left: 650px;
    background-image:linear-gradient(to top, #00ffff, #3366ff);
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.like-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 265px;

}

.like-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 265px;
}

.star-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 230px;
}

.star-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 230px;
}

.comment-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 210px;
}

.comment-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 210px;
}

.mood:before{
    content: '';
    position: absolute;
    width: 50%;
    height: 55%;
    top: 250px;
    left: 1rem;
    background-color:springgreen;
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.activity:before{
    content: '';
    position: absolute;
    width: 50%;
    height: 45%;
    top: 300px;
    right: 1rem;
    background-color:rgb(251, 255, 5);
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.card:before{
    content: '';
    position: absolute;
    width: 65%;
    height: 45%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #e000fe, #924ffe);
    clip-path: inset(20px 20px 20px 20px round 15px);
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
}

.header{
    position: relative;
    height: 265px;
}

.mail{
    background: transparent;
    position: absolute;
    top: 1.2rem;
    right: 2rem;
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
    //background: url('@/assets/avataaars.png') no-repeat center / cover;
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

.content{
    position: absolute;
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
}*{
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card{
    position: relative;
    width: 1000px;
    height: 600px;
    background-color: rgb(255, 255, 255) ;
    border-radius: 5px;
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
    overflow: hidden;
}
.saved:before{
    content: '';
    position: absolute;
    width: 35%;
    height: 45%;
    top: 0;
    left: 650px;
    background-image:linear-gradient(to top, #00ffff, #3366ff);
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.like-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 265px;

}

.like-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 265px;
}

.star-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 230px;
}

.star-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 230px;
}

.comment-button{
    position: absolute;
    right: 13rem;
    display: flex;
    height: 265px;
    bottom: 210px;
}

.comment-text{
    position: absolute;
    right: 7rem;
    display: flex;
    height: 265px;
    bottom: 210px;
}

.mood:before{
    content: '';
    position: absolute;
    width: 50%;
    height: 55%;
    top: 250px;
    left: 1rem;
    background-color:springgreen;
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.activity:before{
    content: '';
    position: absolute;
    width: 50%;
    height: 45%;
    top: 300px;
    right: 1rem;
    background-color:rgb(251, 255, 5);
    clip-path: inset(20px 20px 20px 20px round 15px);
}

.card:before{
    content: '';
    position: absolute;
    width: 65%;
    height: 45%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #e000fe, #924ffe);
    clip-path: inset(20px 20px 20px 20px round 15px);
    box-shadow: 0 5px 15px 1px rgba(38, 3, 41, 0.1);
}

.header{
    position: relative;
    height: 265px;
}

.mail{
    background: transparent;
    position: absolute;
    top: 1.2rem;
    right: 2rem;
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
    //background: url('img/avataaars.png') no-repeat center / cover;
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

.content{
    position: absolute;
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