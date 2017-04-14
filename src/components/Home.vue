<template>
  <md-layout md-gutter>
    <md-layout md-flex="30" md-flex-offset="25">
      <md-card>
        <md-card-area>
          <md-card-header>
            <div class="md-title">Daily time entries</div>
            <div class="md-subhead">Here you'll be able to know who is registering your spent time</div>
          </md-card-header>
        </md-card-area>

        <md-card-actions>
          <md-button>
            <router-link to="/timeentries">Get entries</router-link>
          </md-button>
        </md-card-actions>
      </md-card>
    </md-layout>

    <md-layout md-flex="30">
      <md-card>
        <md-card-area>
          <md-card-header>
            <div class="md-title">Daily time entries</div>
            <div class="md-subhead">Here you'll be able to know who is registering your spent time</div>
          </md-card-header>
        </md-card-area>

        <md-card-actions>
          <md-button>Get Entries!</md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
  </md-layout>
</template>
