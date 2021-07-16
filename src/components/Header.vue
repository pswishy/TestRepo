<template>
    <div id= "nav">
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="headercontainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <router-link to =/about><p class="telephone"><i class="fas fa-phone-alt"></i>+1-800-273-TALK</p></router-link>
       <!-- <p class="aboutbutton">About</p> -->
        <router-link to = "/resources"><p class="resourcebutton">Resources</p></router-link>
        <router-link to ="/signin"><p class="signinbutton">Login</p></router-link>
        <router-link to ="/"><p class = "homebutton">Home</p></router-link>
        <img src="@/assets/Group 16.png" width="150" height="50">
    </div>
    </div>
</template>

<script>
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
.signinbutton{
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
</style>