<template>
  <div class="container-fluid">
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    /> -->

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

    <Header />
    <div class="app">
      <!-- Put a box on top of navbar-->

      <div class="row content">
        <div class="wrapper">
          <div id="Resources">Resources</div>

          <div class="input-field">
            <i class="fas fa-search"></i
            ><input class="search" placeholder="Search" type="text" /><i
              class="fas fa-times-circle"
            ></i>
          </div>
        </div>

        <span>
          <div class="well-container">
            <div class="well" id="first">
              <h2>
                Benefits of Exercise on Mental Health
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
                Moderation - Why do we do what we do
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
                31 Tips to Boost Your Mental Health
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
            <h5>
              <a href="#" class="MoreTop"
                >see more <img src="@/assets/greyArrow.png" id="arrow" />
              </a>
            </h5>
          </div>
        </span>

        <article>
          <div class="tabs">
            <div class="ultabs">
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
              <img src="@/assets/Netflix.png" id="Netflix"
            /></a>

            <a
              href="https://www.reidhealth.org/blog/mental-health"
              target="_blank"
            >
              <img src="@/assets/StressBall.png" id="StressBall"
            /></a>

            <!--Gotta fix link--><a
              href="http://endeavorga.org/?video-arcade-games-online/"
              target="_blank"
            >
              <img src="@/assets/Arcade.png" id="Arcade"
            /></a>

            <a
              href="https://www.portstluciehospitalinc.com/10-journaling-prompts-for-mental-health/"
              target="_blank"
            >
              <img src="@/assets/Journal.png" id="Journal"
            /></a>

            <a
              href="https://www.bupa.co.uk/health-information/exercise-fitness/types-of-exercise"
              target="_blank"
            >
              <img src="@/assets/Exercise.png" id="Exercise"
            /></a>

            <a
              href="https://www.livekindly.co/7-surprising-ways-cooking-can-boost-your-mental-health/#:~:text=%E2%80%9CCooking%20at%20home%2C%20or%20other,%2C%20themselves%20or%20loved%20ones%2C%E2%80%9D"
              target="_blank"
            >
              <img src="@/assets/Cooking.png" id="Cooking"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
          </Tab>

          <Tab name="Healthcare" id="healthcare">
            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare"
            /></a>

            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare2"
            /></a>

            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare2"
            /></a>

            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare"
            /></a>

            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare2"
            /></a>

            <a href="https://www.teladoc.com/therapy/" target="_blank">
              <img src="@/assets/healthcare.png" id="HealthCare2"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
          </Tab>

          <Tab name="Research" id="research">
            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research"
            /></a>

            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research2"
            /></a>

            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research2"
            /></a>

            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research"
            /></a>

            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research2"
            /></a>

            <a
              href="https://onlinelibrary.wiley.com/journal/17461405"
              target="_blank"
            >
              <img src="@/assets/research.png" id="Research2"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
          </Tab>

          <Tab name="Crowdfunding" id="crowdfunding">
            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding"
            /></a>

            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding2"
            /></a>

            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding2"
            /></a>

            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding"
            /></a>

            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding2"
            /></a>

            <a
              href="https://www.gofundme.com/c/blog/mental-health-fundraising"
              target="_blank"
            >
              <img src="@/assets/crowdfunding.png" id="Crowdfunding2"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
          </Tab>

          <Tab name="Hotlines" id="hotlines">
            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines"
            /></a>

            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines2"
            /></a>

            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines2"
            /></a>

            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines"
            /></a>

            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines2"
            /></a>

            <a
              href="https://www.asafeplaceonline.com/?gclid=Cj0KCQjwub-HBhCyARIsAPctr7xRVAiSs8fVR_n8QFSbcni68MT2uQBpyHsd0B-ROHZ2qyyROuNUgrsaAh_QEALw_wcB"
              target="_blank"
            >
              <img src="@/assets/hotlines.png" id="Hotlines2"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
          </Tab>

          <Tab name="Facts" id="facts">
            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts"
            /></a>

            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts2"
            /></a>

            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts2"
            /></a>

            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts"
            /></a>

            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts2"
            /></a>

            <a
              href="https://www.mentalhealth.gov/basics/mental-health-myths-facts"
              target="_blank"
            >
              <img src="@/assets/facts.png" id="Facts2"
            /></a>

            <h5>
              <a href="#" class="More"
                >see more <img src="@/assets/arrow.png" id="arrow" />
              </a>
            </h5>
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
* {
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

h2 {
  @include heading-2($white);
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
}

h3 {
  @include heading-3($black);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h4 {
  @include heading-4($white);
  border: 2px solid $white;
  border-radius: 6px;
  width: 60%;
  //color: $white;
  margin-left: 2.9rem;
  margin-top: 8px;
}

h5 {
  @include heading-2-right($white);
  a {
    &.MoreTop {
      color: #808080;
      padding-left: 40px;
    }
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
    &:active {
      text-decoration: none;
    }
  }
}

p {
  @include medium-text($light-blue);
}

#arrow {
  float: right;
}
a {
  color: $white;

  &:hover {
    color: black;
  }

  &.More {
    color: $white;
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
    &:active {
      text-decoration: none;
    }
  }

  &.number {
    color: $purple;
    border-style: solid;
  }
  &.inwell {
    color: $white;
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      color: $black;
    }
  }
}

li {
  @include medium-text($black);
  margin-right: 50px;
  &.active {
    border-bottom: 3px solid $light-purple;
  }
}
#top,
#bottom,
#left,
#right {
  background: #c7b9ff; //Prob diff color
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
  margin-left: 60px;
}

#Netflix,
#StressBall,
#Arcade,
#Journal,
#Exercise,
#Cooking,
#HealthCare,
#HealthCare2,
#Research,
#Research2,
#Crowdfunding,
#Crowdfunding2,
#Hotlines,
#Hotlines2,
#Facts,
#Facts2 {
  width: 30%;
  margin-bottom: 80px;
  margin-top: 20px;
  border-radius: 5px;
}

#StressBall,
#Arcade,
#Exercise,
#Cooking,
#HealthCare2,
#Research2,
#Crowdfunding2,
#Hotlines2,
#Facts2 {
  margin-left: 60px;
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
  margin: 0;
  background-image: linear-gradient(
    0deg,
    rgba(255, 0, 0, 0) 85%,
    92%,
    rgb(241, 229, 253)
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
  margin-top: -22px;
  padding: 20px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 28px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px rgb(175, 174, 174), 0px 0px 10px 3px $light-purple;
}
.ultabs {
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
    //border: 1.5px solid $purple;
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
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.input-field {
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
  margin-top: 30px;
  flex: right;
  margin-left: 200px;
  height: 30px;
  width: 330px;
  outline: 0;
  text-align: left;
  padding-left: 30px;
  background-color: #e0e0e0f3;
}
.fa-search {
  position: absolute;
  margin-top: 36px;
  margin-left: 210px;
}
.fa-times-circle {
  position: absolute;
  margin-left: 535px;
  margin-top: 37px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: grey;
  font-size: 16px;
  padding-left: 3px;
}
.search:hover,
.search:focus {
  border: 0px solid black;
  background-color: rgb(240, 240, 245);
  transition-duration: 420ms;
}
#first {
  margin-left: 60px;
  color: white;
  text-align: center;
  min-height: 100px;
  border-color: blue;
  border-style: solid;
  border-width: 0.5px;
  //margin-top: 15px;
}
#second,
#third {
  margin-left: 160px;
  color: white;
  text-align: center;
  min-height: 100px;
  //margin-top: 15px;
  border-color: blue;
  border-style: solid;
  border-width: 0.2px;
}

.well-container {
  //background-color: blue;
  display: inline-flex;
  //grid-gap: 2em;
  //grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.well {
  border-color: blue;
  border-radius: 5px;
  box-shadow: 4px 5px 5px rgb(175, 174, 174);
  background-color: $purple;
  margin-top: 20px;
  display: inline-flex;
  width: 19.7%;
  height: 105px;
  margin-bottom: 0;
  padding-bottom: 13px;
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
import Header from "@/components/Header.vue";
//import Tabs from "@/components/Tabs";
export default {
  name: "App",
  components: {
    Tab,
    Header,
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