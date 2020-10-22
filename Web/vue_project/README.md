# neeva

## How to run the project ##

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Features implemented ##

### Main feature implemented ###
I implemented the Search UI that supports searching over the items contained in the JSON files. 

### Additional feature implemented ###
I implemented a feature where the search results always display the most recent search results until the time the user presses the search button/return key.

## Approach to the product, including design decisions ##
I build seperate methods to perform searches over different kinds of data which makes the code modular and maintainable. In case of addition of new data entries in a particular kind of data. eg)tweets, the developer has to just update the search function pertaining to the type of data entry (tweets). I have used VueJS, Bootstrap4 as frameworks for this project.


