<template>
  <div class="container">
    <md-toolbar class="md-dense">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Welcome to Smine Client</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>      
    </md-toolbar>

    <md-card md-flex-small="50" md-align="center" md-with-hover>
        <md-card-area>
          <md-card-header>
            <div class="md-title">Time entries</div>
            <div class="md-subhead">Here you'll be able to know who is registering your spent time</div>
          </md-card-header>
        </md-card-area>

        <md-card-actions>
          <md-button>
            <router-link to="/timeentries">Get entries</router-link>
          </md-button>
        </md-card-actions>
      </md-card>

      <md-card md-with-hover>
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

      <md-card md-with-hover>
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
  </div>
</template>
