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
            class="left"
            label="Pesquisa"
            placeholder="Pesquise os personagens"
            solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-card
          class="mx-auto"
          :flat="flat"
          :loading="loading"
          :outlined="outlined"
          :elevation="elevation"
          :raised="raised"
          :width="width"
          :height="height"
        >
          <v-img
            v-if="media"
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          <v-card-text class="bottom">I'm card text<br/> Aloha</v-card-text>
          </v-img>
        </v-card>
      </v-row>

  </div>
</template>

<script>
  export default {
    data: () => ({
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 344,
      height: undefined,
    }),
  }
</script>

<style>
.bottom{
  align-items: center;
  color: aquamarine;
  background-color: blue;
  margin-top: 40%;
}
.left{
  float: right;
  margin: 1px;  
}
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
</style>
