# handle-vuex

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


### 这种思想确实不好理解，但是是真的厉害

```
  init(app){
        const {history} = this
        history.listen(route => {
            app.__route = route
        })
        history.transitionsTo(history.getLocation())
        app.__route = this.history.current
    }
```


```
   listen(cb){
        this.cb = cb
    }
    transitionsTo(path){
        const componentObj = this.routerTable.match(path)
        this.current = componentObj
        this.cb(this.current)
    }
```
