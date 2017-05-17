<template>
  <md-layout md-row>
    <!-- TODO -->
    <md-layout md-gutter md-column md-flex="45">

      <h2>TODO</h2>

      <md-card md-with-hover v-for="todo in todos" :key="id">
        <md-card-header>
          <div class="md-title">{{todo.subject}} - {{todo.status.name}}</div>
          <div class="md-subhead">
            <strong>Created: </strong>{{todo.created_on}}
            <br>
            <strong>Author: </strong> {{todo.author.name}}
            <br>
            <strong>Project: </strong> {{todo.project.name}}
          </div>
        </md-card-header>

        <md-card-content>
          {{todo.description}}
        </md-card-content>
      </md-card>
    </md-layout>

    <md-layout md-column md-flex="10">
    </md-layout>

    <!-- Doing -->
    <md-layout md-column md-flex="45">
      <h2>Doing</h2>
      <md-card md-with-hover v-for="todo in doingList" :key="id">
        <md-card-header>
          <div class="md-title">{{todo.subject}} - {{todo.status.name}}</div>
          <div class="md-subhead">
            <strong>Created: </strong>{{todo.created_on}}
            <br>
            <strong>Author: </strong> {{todo.author.name}}
            <br>
            <strong>Project: </strong> {{todo.project.name}}
          </div>
        </md-card-header>

        <md-card-content>
          {{todo.description}}
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
  export default {

    data () {
      return {
        todos: [],
        doingList: []
      }
    },
    created: function () {
      this.getTodos()
      this.getDoing()
    },
    methods: {
      getTodos () {
        this.$http.get('/api/issues.json?assigned_to_id=me&project_id=juggernaut')
        .then(response => { this.todos = response.body.issues }, console.log)
      },
      getDoing () {
        this.$http.get('/api/issues.json?assigned_to_id=me&project_id=juggernaut&status_id=2')
        .then(response => { this.doingList = response.body.issues }, console.log)
      }
    }
  }
</script>
