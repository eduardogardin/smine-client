<template>
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">TODOs</h1>
    </md-toolbar>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>#</md-table-head>
          <md-table-head>Project</md-table-head>
          <md-table-head>Tracker</md-table-head>
          <md-table-head>Author</md-table-head>
          <md-table-head>Sprint</md-table-head>
          <md-table-head>Created</md-table-head>
          <md-table-head>Subject</md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="issue in todos" :key="id">
          <md-table-cell>{{issue.id}}</md-table-cell>
          <md-table-cell>{{issue.project.name}}</md-table-cell>
          <md-table-cell>{{issue.tracker.name}}</md-table-cell>
          <md-table-cell>{{issue.author.name}}</md-table-cell>
          <md-table-cell>{{issue.fixed_version.name}}</md-table-cell>
          <md-table-cell>{{issue.created_on | moment}}</md-table-cell>
          <md-table-cell>{{issue.subject}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>
</template>

<script>
  var moment = require('moment')

  export default {
    data () {
      return {
        todos: []
      }
    },
    created: function () {
      this.getTodos()
    },
    methods: {
      getTodos () {
        const onSuccessCallback = response => {
          console.log('on success')
          this.todos = response.body.issues
        }
        const onErrorCallback = err => {
          console.log(err)
        }

        this.$http.get('static/stub/todos.json')
        .then(onSuccessCallback, onErrorCallback)
      },
      moment (date) {
        return moment(date)
      }
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
      }
    }
  }
</script>
