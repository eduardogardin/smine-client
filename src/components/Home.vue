<template>
  <md-layout md-column md-gutter>

    <br/>

    <md-layout md-align="center" md-flex="100" md-row md-gutter>
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

    <br/>

    <md-layout md-align="center" md-row md-gutter>

      <md-card>
        <md-card-area>
          <md-card-header>
            <div class="md-title">Board</div>
            <div class="md-subhead">All tickets with "doing" status, and all team members without assigment</div>
          </md-card-header></md-card-area>

        <md-card-actions>
          <md-button>
            <router-link to="/board">Go to board!</router-link>
          </md-button>
        </md-card-actions>
      </md-card>
    </md-layout>

    <br/>

    <md-layout md-align="center" md-row md-gutter>
      <md-card>
        <md-card-area>
          <md-card-header>
            <div class="md-title">TODO</div>
            <div class="md-subhead">All tickets that you need to resolve :)</div>
          </md-card-header>
        </md-card-area>

        <md-card-actions>
          <md-button>
            <router-link to="/todo">Ge my TODO list!</router-link>
          </md-button>
        </md-card-actions>
      </md-card>
    </md-layout>
  </md-layout>
</template>
