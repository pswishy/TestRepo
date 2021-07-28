<template>

    <div id= "nav">
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="headercontainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <!--<router-link to =/about>--><p class="telephone"><i class="fas fa-phone-alt"></i>+1-800-273-TALK</p><!--</router-link>-->
       <!-- <p class="aboutbutton">About</p> -->
        <router-link to = "/resources"><p class="resourcebutton">Resources</p></router-link>
        <router-link to ="/interest"><p class= "chatbutton">Chat</p></router-link>
        <router-link to ="/"><p class = "homebutton">Home</p></router-link>
        <img src="@/assets/Group 16.png" width="150" height="50">
    </div>
    </div>
</template>

<script>
//window.addEventListener('click', function(){

    //const popup = document.getElementById('popup');

    //popup.classList.toggle('active');
    
//})
    export default {
        name: "Header"
        
    };
</script>

<style scoped lang="scss" >
@import "@/global-styles/colors.scss";
.headercontainer{
    width: 100%;
    height: 100px;
    //grid-gap: 10em;

    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
    //margin-left: 60px;
    margin-top: 30px;
    background-color: white;
    
}
.aboutbutton{
    float: right;
    border: none;
    font-weight: 700;
    //margin-right: 40px;
    
    width: 12%;
    height: 30px;
    font-size: normal;
    color: black;
    &:hover{
        cursor:pointer;
        text-decoration-line: underline;
    text-decoration-color: $purple;
    text-decoration-thickness: 5px;    
    text-decoration-style: solid;
        
    }
        
  font-family: 'Nunito Sans', sans-serif;
}
.resourcebutton{
    float: right;
    height: 30px;
    width: 16%;
    font-weight: 700;
    margin-right: 20px;
    font-size: normal;
  font-family: 'Nunito Sans', sans-serif;
    color: black;
    &:hover{
        cursor:pointer;
        text-decoration-line: underline;
    text-decoration-color: $purple;
    text-decoration-thickness: 5px;    
    text-decoration-style: solid;
       
        
    }
}
.chatbutton{
    float: right;
  font-family: 'Nunito Sans', sans-serif;

    height: 30px;
    width: 10%;
    border: none;
    font-weight: 700;
    margin-right: 10px;
    font-size: normal;
    color: black;
    &:hover{
        cursor:pointer;
        text-decoration-line: underline;
    text-decoration-color: $purple;
    text-decoration-thickness: 5px;    
    text-decoration-style: solid;
        
    }
}
.homebutton{

float: right;
border: none;
font-weight: 700;
margin-right: 10px;
width: 10%;
height: 30px;
font-size: normal;
color: black;
  font-family: 'Nunito Sans', sans-serif;
&:hover {
    cursor:pointer;
    text-decoration-line: underline;
    text-decoration-color: $purple;
    text-decoration-thickness: 5px;    
    text-decoration-style: solid;
}
}
img{
    float:left;
    margin-bottom: 20px;
    width: 20%;
    margin-left: -16px;
}
.telephone{
    //margin-right: 50px;
      font-family: 'Nunito Sans', sans-serif;

    float:right;
    font-weight: 700;
    font-size: normal;
    width: 20%;
    color: $purple;
    &:hover {
    cursor:pointer;
    text-decoration-line: underline;
    text-decoration-color: $purple;
    text-decoration-thickness: 5px;    
    text-decoration-style: solid;
    
    
}
}

//Pop up code

.box .overlay{
    position: fixed;
    //top: 0px;
    //left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    z-index: 1;
    display: none;
}
.box.active .overlay{
    display: block;
}
.box.active .words .close-btn .btn-group1 img{
    transition: all 300ms ease-in-out;
      transform: translate(-50%, -50%) scale(1);

}
.words{
position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  font-size: 40px;
    color: $purple;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    margin-left: 15px;

}
.close-btn{
    position: absolute;
    transform: translate(-50%, -50%) scale(0);
    top: 7%;
    //left: 10%;
    color: $purple;
    margin-right: 500px;
    font-size: 50px;

}
.box{
    background: $light-purple;
   //position: relative;
   //width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transform: translate(-50%, -50%) scale(0);

}

.box img{
    //width: 100%;
    height: 700px;
    width: 700px;
    border-color: $light-purple;
    transform: translate(-50%, -50%) scale(0);

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
    transform: translate(-50%, -50%) scale(0);
    -ms-transform: translate(-50%, -50%)scale(0);
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