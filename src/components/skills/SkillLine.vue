<template>
  <div class="line">
      <p>{{ skillName }}</p>
        <fa-rating 
            :glyph="fa_circle"
            inactive-color="#754cbd"
            active-color="#ffffff"
            :rating="rating"
            read-only
            :show-rating=false
            border-width=2
            border-color="#ffffff"
            item-size=17
            spacing=1
            ></fa-rating>
  </div>
</template>

<script>
import {FaRating} from 'vue-rate-it';
import fa_circle from 'vue-rate-it/glyphs/circle';

export default {
name:"SkillLine",
props:{
    rating: Number,
    skillName: String
},
components:{
    FaRating
  },
  created(){
    // register the icon
    this.fa_circle = fa_circle
  },
  data(){
    return{
      fa_circle: '' // declare the icon
    } 
  } 
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

    .line {
        display: flex;
        align-items: center;
        justify-content: center
    }
    p {
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1.5em;
    }

</style>