<template>
  <div class="about">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <Header />
    <div class="PromptBox">
      <div class="textcontainer">
        <p class="prompttext">Say Hello to Evexia...</p>
      </div>
      <img src="@/assets/bird.png" class="bird" />
    </div>
    <div class="yellowstar">Madison has entered the chat</div>
    <amplify-chatbot :chatbotConfig="chatbotConfig"></amplify-chatbot>

    <div class="testimonials">
      <img src="@/assets/Review-Seth.png" id="Seth" />
      <img src="@/assets/Review-Mary.png" id="Mary" />
      <img src="@/assets/Review-Jennifer.png" id="Jennifer" />
      <img src="@/assets/Review-Chat.png" id="Chat" />
      <img src="@/assets/Review-Chat2.png" id="Chat2" />
    </div>
  </div>
</template>

<script>
import { Interactions } from "aws-amplify";
import Header from "@/components/Header.vue";
//import Alerts from "@/components/alerts.vue";
//import Mood from "@/components/mood.vue";
export default {
  //components: { Header },
  //Alerts,
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    chatbotConfig: {
      bot: "BookTrip_dev",
      clearComplete: false,
    },
  }),
  mounted() {
    Interactions.onComplete("BookTrip_dev", this.handleComplete);
  },
  methods: {
    handleComplete(err) {
      //confirmation) {
      if (err) {
        alert(err);
        return;
      }
      //alert(JSON.stringify(confirmation));
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  padding: 0;
  margin: 0;
}

.PromptBox {
  margin-top: -50px;
  width: 100%;
  display: flex;


  //grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  //grid-gap: 10em;

  height: 90px;

  
  //grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  //grid-gap: 10em;

  height: 60px;

  //background: green;
  box-shadow: 0px 2px 43px 1px rgba(199, 185, 255, 0.41);
}
.textcontainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 70%;
  //background: blue;
}
.prompttext {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: black;
  margin-top: 30px;
  text-align: center;
  //text-indent: 200px;
}

.bird {
}
.yellowstar {
  margin-top: 10px;
  text-align: center;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #7c7c7c;

  opacity: 0.7;
}

#Seth,
#Mary,
#Jennifer {
  margin-top: 5rem;
  margin-bottom: 100px;
  border: 1px solid grey;
  border-radius: 5px;
}

#Seth {
  margin-left: 8rem;
}

#Mary {
  margin-left: 10rem;
}

#Jennifer {
  margin-left: 10rem;
}

#Chat {
  margin-left: 20rem;
  margin-bottom: 100px;
  width: 17%;
}

#Chat2 {
  margin-left: 22rem;
  margin-bottom: 100px;
  width: 17%;
}
</style>