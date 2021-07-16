import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Chatbot from "@/views/Chatbot.vue";
import SignIn from "@/views/SignInFlow/SignIn.vue";
import Resources from "@/views/Resources.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
{
 path: "/chatbot",
  name: "chatbot",
 component: Chatbot
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources
  },
  

  
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
