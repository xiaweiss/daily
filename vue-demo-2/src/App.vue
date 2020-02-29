<template>
  <div id="app">
    {{message}} {{message + message}}
    <div :id="message"></div>
    <todo-list>
        <todo-item v-for="item in list" :key="item.title" :title="item.title" :del="item.del" @delete="handleDelete">
            <!-- <span slot="pre" slot-scope="{value}">pre {{value}}</span> -->
            <template v-slot:pre="{value}">
                <span>pre {{value}}</span>
            </template>
            <!-- <template v-slot:suf>
                <span >suf</span>
            </template> -->
        </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
// import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
  },
  data() {
    return {
        message: 'Hello, World',
        list: [
            {
                title: 'class1',
                del: false
            },
            {
                title: 'class2',
                del: true
            }
        ]
    }
  },
  methods: {
      handleDelete(val) {
          console.log('handleDelete', val)
      }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
