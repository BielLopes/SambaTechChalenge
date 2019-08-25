<template>
  <v-card
    class="mx-auto espaco"
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
      :height="height"
      :src="personagen.img"
    >
    <v-card-text :class="classes()">{{personagen.status}}</v-card-text>
    <v-card-text class="description"><b>{{personagen.name}}</b> <br>{{personagen.birthday}}  <br> {{personagen.nickname}}</v-card-text>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    props:{
      personagen: {
        type: Object,
        required: true,
      }
    },
    data: () => ({
      flat: false,
      media: true,
      loading: false,
      actions: false,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 300,
      height: 400,
    }),
    methods: {
      classes: function(){
        var classe
        classe = "texto"
        if(this.personagen.status == "Alive"){
          classe = classe + " green"
        }else if(this.personagen.status == "Deceased"){
          classe = classe + " red"
        }else{
          classe = classe + " purple"
        }

        return classe
      }
    }
  }
</script>

<style scoped>
.texto{
  color: white;
  margin-top: 10%;
  max-width: 35%;
  position: abosolute;
  float: right;
  border-radius: 10px 0px;
}
.green{
  background-color: green;
}
.purple{
  background-color: purple;
}
.red{
  background-color: red;
}
.description{
  align-items: center;
  color: white;
  position: abosolute;
  margin-top: 300px;
}
b{
  font-size: 20px;
}
.espaco{
  margin: 5px;
}
</style>
