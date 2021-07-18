<template>
  <div class="container-fluid">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <!-- <div class="col-sm-1 text-left">
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
    </div> -->
    <div id="left"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="bottom"></div>

    <div class="app">  
    
     
      <!--<Header/>-->  
     


      <!-- Put a box on top of navbar-->
        <nav class="navbar navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-left">
              <img src="@/assets/Group 16.png" />
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">home</a></li>

              <li class="active"><a href="#">resources</a></li>
              <li><a href="#">chat</a></li>
              <li>
                <a class="number" href="#"><u>+1-800-273-TALK</u></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
   <div class="row content">
        <div class="wrapper">
          <div id="Resources">Resources</div>
        
          <div class = "input-field">
          <i class="fas fa-search "><input class="search" placeholder="   Search" type="text" /><i class="fas fa-times-circle"></i></i>
          </div>
        </div>

      <span>
        <div class = 'well-container'>
          <div class="well" id="first">
            <h2>
              benefits of exercise on mental health
              <h4>
                <u
                  ><a
                    class="inWell"
                    href="https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm"
                    target="_blank"
                    >read blog</a
                  ></u
                >
              </h4>
            </h2>
          </div>
          <div class="well" id="second">
            <h2>
              moderation - why do we do what we do
              <h4>
                <u
                  ><a
                    class="inWell"
                    href="https://healthyeating.sfgate.com/importance-moderation-1990.html"
                    target="_blank"
                    >read blog</a
                  ></u
                >
              </h4>
            </h2>
          </div>
          <div class="well" id="third">
            <h2>
              31 tips to boost your mental health
              <h4>
                <u
                  ><a
                    class="inWell"
                    href="https://www.mhanational.org/31-tips-boost-your-mental-health"
                    target="_blank"
                    >read blog</a
                  ></u
                >
              </h4>
            </h2>
          </div>
        </div>
          </span>


        <article>
          <div class="tabs">
            <div class= "ultabs">
              <li v-for="(tab, index) in tabs" :key="index">
                <div
                  class="nav-item"
                  
                  :class="{ 'is-active': tab.isActive }"
                  @click="selectTab(tab)"
                >
                  {{ tab.name }}
                </div>
              </li>
            </div>
          </div>
          <section class="tabs-details">
            <slot></slot>
          </section>
        </article>

        <Tabs class="tabs">
          <Tab name="Activities" id="activities" selected="true">
            <a href="https://www.netflix.com/" target="_blank">
              <img src="@/assets/Netflix.jpeg" id="Netflix"
            /></a>
            <a
              href="https://www.reidhealth.org/blog/mental-health"
              target="_blank"
            >
              <img src="@/assets/StressBall.png" id="StressBall"
            /></a>
            <a href="https://www.minecraft.net/en-us" target="_blank">
              <img src="@/assets/Minecraft.jpeg" id="Minecraft"
            /></a>
          </Tab>
          <Tab name="Healthcare" id="healthcare">
            <h3>healthcare</h3>
            <div id="Suicide Prevention">
              <h3>Suicide Prevention</h3>
              <p>
                <u
                  ><a
                    href="https://suicidepreventionlifeline.org/"
                    target="_blank"
                    >Suicide Hotline</a
                  ></u
                >
              </p>
              <p>
                <u
                  ><a href="https://www.stopbullying.gov/" target="_blank"
                    >StopBullying.gov</a
                  ></u
                >
              </p>
            </div>
            <div id="publication">
              <h3>Counseling</h3>
              <p>
                <u
                  ><a href="https://www.crisistextline.org/" target="_blank"
                    >Crisis Text Line</a
                  ></u
                >
              </p>
            </div>
          </Tab>

          <Tab name="research" id="research"><h3>research</h3></Tab>

          <Tab name="crowdfunding" id="crowdfunding">
            <h3>research</h3>
            <p>Tokyo is the capital of Japan.</p>
          </Tab>

          <Tab name="hotlines" id="hotlines">
            <h3>facts</h3>
            <p>Info.</p>
          </Tab>

          <Tab name="facts" id="facts">
            <h3>hotlines</h3>
            <p>Numbers.</p>
          </Tab>
        </Tabs>
      </div>
    </div>

    <!-- <div class="col-sm-1 text-left">
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
      <div class="well">Basic Well</div>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "@/global-styles/resource.scss";
@import "@/global-styles/typography.scss";
*{
  padding: 0;
  margin: 0;
}
body {
  background-color: $white;
  border-color: $purple;
}
h1 {
  @include heading-1($black);
  padding-bottom: 3rem;
  font-family: $font-family;
}
h3 {
  @include heading-3($black);
  padding-top: 2rem;
  padding-bottom: 2rem;
}
p {
  @include medium-text($light-blue);
}
a {
  color: black;
  &.number {
    color: $purple;
    border-style: solid
  }
}
li {
  @include medium-text($black);
  margin-right: 200px;
  &.active{
    border-bottom: 3px solid $light-purple;

  }
}
#top,
#bottom,
#left,
#right {
  //background: $purple; //Prob diff color
  margin: 0;
  padding: 0;
}
#left,
#right {
  top: 0;
  bottom: 0;
  //width: 30px;
  position: fixed;
}
#left {
  left: 0;
}
#right {
  right: 0;
}
#top,
#bottom {
  left: 0;
  right: 0;
  //height: 30px;
}
#top {
  top: 0;
}
#bottom {
  bottom: 0;
  position: fixed;
}
#Resources {
  font-size: 50px;
  color: $black;
  font-family: $font-family;
  font-weight: bold;
  //text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
  margin-left: 5.6rem;
}
#Netflix {
  width: 30%;
}
#StressBall {
  margin-left: 65px;
  width: 30%;
}
#Minecraft {
  margin-left: 65px;
  margin-right: 0;
  width: 30%;
}
.container-fluid{
  
}
//Use for each tab
.activities {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $black;
  // border-left: 3px solid black;
  // border-right: 3px solid black;
  //border-top: 3px solid black;
  //border-bottom: 3px solid black;
  //box-shadow: 0px 0px 5px black;
  display: relative;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-image: linear-gradient(
    0deg,
    rgba(255, 0, 0, 0) 85%,
    92%,
    rgb(218, 194, 245)
  );
}
/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {
  //height: 667px;
}
/* Set white background color and 100% height */
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
  margin-bottom: 0px;
  padding-bottom: 0rem;
  margin-top: 0px;
  padding-top: 8px;
  box-shadow: 0px 0px 1px rgb(209, 209, 209);
  height: 70px;
  //border-top: 15px solid #a68bd1;
  border-radius: 0px;
  background-color: $white;
  font-family: $font-family;
  
}
.navbar-inverse .navbar-brand,
.navbar-inverse .navbar-text {
  color: $white;
}
.navbar-inverse .navbar-nav > li > a {
  color: $white;
}
/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {
  height: 667px;
}
/* Set white background color and 100% height */
.sidenav {
  padding-top: 20px;
  background-color: $white;
  height: 100%;
}
.tabs {
  padding-top: 4rem;
  margin-left: 60px;
  margin-right: 60px;
  padding-bottom: 0;
  margin-bottom: 0;
  
}
.tabs-details {
  margin: 0;
  padding: 0;
  // padding: 1px;
  // background-color: $purple;
  // margin-left: 60px;
  // margin-right: 60px;
  // margin-bottom: 0;
  // border-radius: 5px;
  // box-shadow: 10px 10px 5px rgb(175, 174, 174), 0px 0px 10px 3px $light-purple;
}
#activities,
#healthcare,
#research,
#crowdfunding,
#hotlines,
#facts {
  background-color: $purple;
  margin-top: -20px;
  padding: 20px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 28px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px rgb(175, 174, 174), 0px 0px 10px 3px $light-purple;
}
.ultabs{
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  li {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0;
    padding: 0;
  }
  .nav-item {
    cursor: pointer;
    color: $black;
    margin: 0;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    border-radius: 6px;
    border: 1.5px solid white;
    //border: 2px solid black;
    &:hover {
      color: $purple;
    }
    &.healthcare {
      border: 2px solid $purple;
    }
    &.is-active {
      //Need to make bottom touch line
      color: $white;
      background-color: $purple;
      border-radius: 6px;
      //   padding-left: 15px;
      //   padding-right: 15px;
    }
  }
}

.wrapper {
  //position: relative;
  //display: flex;
  width: 100%;
  //background-color: blue;
  //min-width: 100%;
  padding-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
}
.input-field{
    //max-width: 300px;
    //width: 100%;
    height: 55px;
    margin-left: 120px;
    //background-color: rgb(166, 131, 248) ;
    ///margin: 10px 0;
    border-radius: 55px;
    display: flex;
    grid-template-columns: 15% 85%;
    //padding: 0 .4rem;
}
.search {
  border: 0px solid;
  border-radius: 10px;
  //display: flex;
  margin-top: 18px;
  flex: right;
  //margin-left: 200px;
  height: 30px;
  width: 200px;
  outline: 0;
  background-color: #e0e0e0f3;
  
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: grey;
  font-size: 17px;
  padding-left: 3px;
}
.search:hover,
.search:focus {
  border: 0px solid black;
  background-color: rgb(240, 240, 245);
  transition-duration: 420ms;
}
#first,
#second,
#third {
  //margin-left: 60px;
  color: white;
  text-align: center;
  min-height: 100px;
  //margin-top: 15px;
}
.well-container{
  //background-color: blue;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  
}
.well {
  //visibility: hidden;
  //margin-top: 15px;
  border-color: blue;
  border-radius: 5px;
  box-shadow: 4px 5px 5px rgb(175, 174, 174);
  background-color: $purple;
  margin-top: 40px;
  //display: grid;
  //grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  //width: 19.1%;
  //height: 18%;
  margin-bottom: 0;
}
.search-icon {
  //position: absolute;
  //top: 3.7rem;
  //left: 102.6rem;
  //width: 16px;
}
.clear-icon {
  position: absolute;
  top: 35px;
  right: 36px;
  width: 17px;
  cursor: pointer;
  //visibility: hidden;
}
@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {
    height: auto;
  }
}
</style>


<script>
import Tab from "@/components/Tab";
//import Header from "@/components/Header.vue"
//import Tabs from "@/components/Tabs";
export default {
  name: "App",
  components: {
    Tab,
    //Header
    
    
    //Tabs,
  },
  data: () => {
    return {
      tabs: [],
    };
  },
  
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>
