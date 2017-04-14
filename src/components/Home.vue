<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Apontamentos de hora!</h1>
    <button class="btn btn-primary" v-on:click="getTimeEntries()">
     Get time entries!
    </button>

    <ul>
      <li v-for="entry in entries">
        Usuário: {{ entry.user.name }}
        Data:    {{ entry.spent_on }}
        Tempo:   {{ entry.hours }}
        Ticket:  #{{ entry.issue.id }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        entries: ''
      }
    },
    methods: {
      getTimeEntries () {
        const successCallback = response => {
          this.entries = response.body.time_entries
        }

        const errorCallback = err => {
          console.log(err)
        }

        this.$http
        .get('static/stub/time_entries.json')
        .then(successCallback, errorCallback)
      }
    }
  }
</script>

