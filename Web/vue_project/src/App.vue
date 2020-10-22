<template>
  <div id="app">
    <HelloWorld msg="ACME Search"/>
    <div class="search-container">
     <form class="form-inline mr-auto" @submit.prevent="searchFunc">
      <input class="form-control mr-sm-2" type="text" value="" v-model= "info" onkeypress="memSort(event);" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success btn-rounded btn-sm my-0" type="submit">Search</button>
     </form>
     
     <div v-if = "info !== ''"> 
      <SearchResult  v-bind:searches = "arraySearchResults"></SearchResult>
     </div>
     <div v-else>
        <h3>{{SearchAnything()}}</h3>
     </div>

    </div>

  </div>  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SearchResult from './components/SearchResult.vue';

import calendarJSON from './acme-search/calendar.json';
import contactsJSON from './acme-search/contacts.json';
import dropboxJSON from './acme-search/dropbox.json';
import slackJSON from './acme-search/slack.json';
import tweetJSON from './acme-search/tweet.json';


export default {
  name: 'App',
  components: {
    HelloWorld,
    SearchResult
  },
  data() {
    return {
      info: "",
      arraySearchResults: [],
      status: false,
      calendarObj: calendarJSON["calendar"],
      contactsObj: contactsJSON["contacts"],
      dropboxObj: dropboxJSON["dropbox"],
      slackObj: slackJSON["slack"],
      tweetObj: tweetJSON["tweet"]
    }
  },
  methods: {
     memSort: function (e)  {
      var key = e.keyCode || e.which;
      if (key == 13) {
        this.searchFunc();
      }
    },
    SearchAnything: function() {
        return "Search Anything at our Ad-free, Private search!!!";
    },
    findMatch: function(matching_terms, userSearch, i, check){
      for (var j = 0; j < matching_terms.length; j++) {
          if (matching_terms[j] === userSearch) {
           
            console.log("Match found!");
            switch(check) {
             case "sca":
                this.arraySearchResults.push(this.calendarObj[i]);
                break;
             case "sco":
                this.arraySearchResults.push(this.contactsObj[i]);
                break;
              case  "sdb": 
                this.arraySearchResults.push(this.dropboxObj[i]);
                break;
              case "ssl":
                this.arraySearchResults.push(this.slackObj[i]);
                break;
              case  "st":
                this.arraySearchResults.push(this.tweetObj[i]);
                break;
              default:
                break;
            }
          }
      }
      
    },
    searchCalendar: function() {
        var userSearch = this.info;
        for (var i = 0; i < this.calendarObj.length; i++) {
          var matching_terms = this.calendarObj[i]["matching_terms"];
          this.findMatch(matching_terms, userSearch, i, "sca");
        }
    },
    searchContacts: function () {
        var userSearch = this.info;
        for (var i = 0; i < this.contactsObj.length; i++) {
          var matching_terms = this.contactsObj[i]["matching_terms"];
          this.findMatch(matching_terms, userSearch, i, "sco");
        }
    },

    searchDropBox: function () {
        var userSearch = this.info;
        for (var i = 0; i < this.dropboxObj.length; i++) {
          var matching_terms = this.dropboxObj[i]["matching_terms"];
          this.findMatch(matching_terms, userSearch, i, "sdb");
        }
    },
    searchSlack: function () {
        var userSearch = this.info;
        for (var i = 0; i < this.slackObj.length; i++) {
          var matching_terms = this.slackObj[i]["matching_terms"];
          this.findMatch(matching_terms, userSearch, i, "ssl");
        }
    },
    searchTweets: function () {
      var userSearch = this.info;
        for (var i = 0; i < this.tweetObj.length; i++) {
          var matching_terms = this.tweetObj[i]["matching_terms"];
          this.findMatch(matching_terms, userSearch, i, "st");
        }
    },
    searchFunc: function () {
      this.arraySearchResults.length = 0;
      if (this.info === "") {
        console.log("Search is empty");
        this.arraySearchResults.length = 0;
      }
      else {
        this.searchCalendar(); 
        this.searchContacts();
        this.searchDropBox();
        this.searchSlack();
        this.searchTweets();
        
      }
     //printing out everything in arraysearchresults
      console.log(this.arraySearchResults);
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: #9a00ff;
}
* {
  padding: 0;
  margin-top: 0;
}

</style>
