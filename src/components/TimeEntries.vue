<template>
  <md-table v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head >User</md-table-head>
      <md-table-head >Date</md-table-head>
      <md-table-head >Activity</md-table-head>
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
</template>

<script>
  export default {
    data () {
      return {
        entries: []
      }
    },
    created: function () {
      this.getTimeEntries()
    },
    methods: {
      getTimeEntries () {
        console.log('Getted time entry')
        const successCallback = response => {
          this.entries = response.body.time_entries
        }
        const errorCallback = err => {
          console.log(err)
        }

        this.$http.get('static/stub/time_entries.json')
        .then(successCallback, errorCallback)
      }
    }
  }
</script>
