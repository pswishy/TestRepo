<template>
  <div id="app">
    
    <div id ="nav">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.box{
    background: green;
   //position: relative;
   //width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.box img{
    //width: 100%;
    height: auto;
}

.box .btn-group1 {
    //background-color: black;
    border-color: $purple;
    position: absolute;
    margin-left: 289px;
    margin-top: 100px;
    display: grid;
    //grid-gap: 5px;
  grid-template-columns: repeat(3,minmax(150px,1fr) );
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    //background-color: yellow;
    color: black;
    font-size: 16px;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 5px;
}
.happy, .indecisive{
    //margin-bottom: 200px;
    margin-left: 5px;
    border-color: $purple;
}

.box .happy:hover {
  background-color: black;
}
</style>
