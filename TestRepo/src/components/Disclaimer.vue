

<template>
<div class= "bigbox">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="disclaimerbox">
        <div class= "links">
            <p class= "about">About</p>
            <p class="privacy">Priacy Policy</p>
            <p class= "security">Security</p>
            <p class="chatbot">Chatbot</p>
            <p class = "contact">Evexia@Help.Com</p>
        </div>
    <div class="warningbox">
        <p class= "warning">*Evexia should not be used for profreessional medical diagnosis* </p>
        <div class = "teambox">
        <p class="rights">Rights reserved team evexia 2021</p>
    </div>
    </div>
    
    </div>
</div>
</template>

<script>
    export default {
        name: "Disclaimer"
    }
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";

.disclaimerbox{
    margin-top: 10px;
    background: #CDEEEC;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fit,minmax(150px,1fr) );
}

.links{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
    margin-top: 60px;
    margin-left: 50px;
    font-size: normal;
    font-family: 'Nunito Sans', sans-serif;    

}
.about,
.privacy,
.security,
.contact,
.chatbot{
    color: black;
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;    

}
.warningbox{
    width: 60%;
    display: grid;
    color:#C4C4C4;
      font-family: 'Nunito Sans', sans-serif;

    grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
}
.warning{
    margin-left: 30px;
    color:#C4C4C4;
    font-size: 14px;

}
.teambox{
margin-left: 280px;
width: 70%;

}
.rights{
    color: black;
    font-family: 'Nunito Sans', sans-serif;

    font-size: 14px;
}


</style>