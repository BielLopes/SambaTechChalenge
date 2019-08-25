<template>
  <div id="app">
      <v-row>
        <v-col cols="4" sm="4" md="4">
          <img class="logo" alt="BB logo" src="./assets/breaking-bad-logo.png">
        </v-col>
        <v-col cols="8" sm="8" md="8" class="">
          <div class="branco">
          </div>
          <v-text-field
            v-model="search"
            class="left"
            label="Pesquisa"
            placeholder="Pesquise os personagens"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
    <v-container>
      <v-row>
        <div v-for="personagen in personagensPesquisa" :key="personagen.char_id">
          <card-character :personagen="personagen" />        
        </div>
        
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Card from "./components/Card"
import {HTTP} from "./http-commom"

  export default {
    data(){
      return {
        personagens: [],
        search: ""
      }
    },
    components: {
      'card-character': Card,
    },
    created(){
      HTTP.get('characters')
      .then(response =>{
        this.personagens = response.data
      })
    },
    computed: {
      personagensPesquisa: function(){
        return this.personagens.filter((persnon) =>{
          return persnon.name.match(this.search)
        })
      }
    },

  }
</script>

<style>

.branco{
  float: right;
  margin: 1vw;
}
.logo{
  width: 10vw;
}
.v-input__slider {
  width: 100%;
}

.left{
  height: 100%;
  padding: 5px;
  margin-right: 10px;
}
</style>
