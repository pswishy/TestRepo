<template>
  <div class="container-fluid">
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
        <Header/>

      <!-- Put a box on top of navbar-->
  

      <div class="row content">
        <div class="wrapper">
          <div id="Resources">Resources</div>
          <img
            class="search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
          <input class="search" placeholder="search" type="text" />
          <img
            class="clear-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
          />
        </div>

        <Tabs>
          <Tab name="activities" class="activities" selected="true">
            <img scr="@/assets/Netflix.jpg" />
          </Tab>
          <Tab name="healthcare">
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

          <Tab name="crowdfunding">
            <h3>research</h3>
            <p>Tokyo is the capital of Japan.</p>
          </Tab>

          <Tab name="hotlines">
            <h3>facts</h3>
            <p>Info.</p>
          </Tab>

          <Tab name="facts">
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
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

*{
  padding: 0;
  margin: 0;
}
body {
  background-color: $white;
  border-color: white;
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
  color: $black;
  &.number {
    color: $purple;
  }
}
li {
  @include medium-text($black);
  margin-right: 70px;
  &.active {
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
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
  margin-bottom: 0px;
  padding-bottom: 0rem;
  margin-top: 0px;
  //padding-top: 8px;
  box-shadow: 0px 0px 5px black;
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
  //height: 667px;
}
/* Set white background color and 100% height */
.sidenav {
  //padding-top: 20px;
  background-color: $white;
  height: 100%;
}
.well {
  visibility: hidden;
}
.wrapper {
  position: relative;
  display: flex;
  min-width: 100%;
  padding-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
}
.search {
  border: 0px solid;
  border-radius: 10px;
  display: flex;
  margin-top: 18px;
  flex: right;
  margin-left: 200px;
  height: 30px;
  width: 30%;
  //padding: 2px 23px 2px 30px;
  //margin-left: 73.6rem;
  //margin-top: 2.85rem;
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
.search-icon {
  position: absolute;
  top: 3.7rem;
  left: 102.6rem;
  width: 16px;
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
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Tab,
    Tabs,
    Header
  },
};
</script>
