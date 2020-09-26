<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <!--
    The goal is to get these todos in the data array into this Todos Component
    v-bind is a directive, and todos has been passed in as a prop.
    -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <!-- {{msg}} --> 
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    -->
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
 //import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    //HelloWorld
    Header,
    Todos,
    AddTodo
  },
  data () {
    return {
      todos:[
       {
        id: 1,
        title: "Todo One",
        completed: false
       },
       {
        id: 2,
        title: "Todo Two",
        completed: true
       },
       {
        id: 3,
        title: "Todo Three",
        completed:false
       }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

   .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
 
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
