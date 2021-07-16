<template>
<article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
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

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
.tabs {
  padding-top: 7rem;
  margin-left: 60px;
  margin-right: 60px;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  
}
.tabs-details {
  padding: 1px;
  background-color: $purple;
  margin-left: 60px;
  margin-right: 60px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px rgb(175, 174, 174), 0px 0px 10px 3px $light-purple;
  //display: grid;
  //grid-gap: 2em;
  //grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  
}
ul {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr) );
  
  padding: 0;
  list-style: none;
  margin: 0px;
  li {
    margin-left: 0px;
    margin-right: 50px;
  }
  .nav-item {
   
  
    cursor: pointer;
    color: $black;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    &:hover {
      color: $purple;
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
</style>