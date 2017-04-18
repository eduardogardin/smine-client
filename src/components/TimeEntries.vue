<template>
  <md-layout md-column md-gutter>
    <md-toolbar md-row>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Time entries</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-table-card md-row>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>User</md-table-head>
            <md-table-head>Date</md-table-head>
            <md-table-head>Activity</md-table-head>
            <md-table-head md-numeric>Time spent</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="entry in entries" :key="id">
            <md-table-cell>{{entry.user.name}}</md-table-cell>
            <md-table-cell>{{entry.spent_on}}</md-table-cell>
            <md-table-cell>{{entry.activity.name}}</md-table-cell>
            <md-table-cell md-numeric>{{entry.hours}}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>

    <md-snackbar :md-position="snackConfig.vertical + ' ' + snackConfig.horizontal" ref="snackbar" :md-duration="snackConfig.duration">
      <span>Could not retrieve Time entries from server</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </md-layout>
</template>

<script>
  import moment from 'moment'

  const snackbarConfig = {
    vertical: 'bottom',
    horizontal: 'center',
    duration: 4000
  }

  export default {
    data () {
      return {
        entries: [],
        snackConfig: snackbarConfig
      }
    },
    created: function () {
      this.getTimeEntries()
    },
    methods: {
      getTimeEntries () {
        const successCallback = response => {
          this.entries = response.body.time_entries
        }
        const errorCallback = err => {
          console.log(err)
          this.$refs.snackbar.open()
        }

        this.$http.get('/api/time_entries.json?project_id=my_project')
        .then(successCallback, errorCallback)
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
