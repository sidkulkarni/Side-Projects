<template>
    <ul> 
        <li v-for="search in searches" v-bind:key="search"> 
        <br>
           <ul id = "erase"> 
            <li v-for="(value, propertyName) in search" v-bind:key="(value, propertyName)">
                <strong>{{propertyName}}</strong> : {{value}}
            </li>
           </ul> 
        </li>
    </ul>

</template>

<script>
    export default {
        name: 'SearchResult',
        props: {
            searches: {
                type: Array
            }
        }
    }

</script>
   

<style>
    #erase li {
        list-style-type: none;
    }

 

</style>
