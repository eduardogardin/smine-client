<template>
  <md-layout md-column md-gutter>
    <md-toolbar md-row>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">TODO</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>#ID</md-table-head>
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
  </md-layout>
</template>

<script>
  import moment from 'moment'

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

        this.$http.get('/api/issues.json?assingned_to_id=me')
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
