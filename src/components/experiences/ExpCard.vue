<template>
  <div class="card">
      <div class="card-header">
        <div class="date">MAI 2018 - AUJOURD'HUI</div>
        <div class="company">La Cabane à Burger</div>
        <div class="city">Pontchâteau</div>
      </div>
        <hr>
      <div class="descri">
            CDI dans la vente et fabrication
            de burgers maison tous les week
            ends. Montage des hamburgers, 
            cuisson de steaks et caisse.
      </div>
      

  </div>
</template>

<script>
export default {
name:"ExpCard"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

.card {
    width: 60%;
    border: 3px solid white;
    border-radius: 42px;
    padding: 20px 20px 20px 20px;
    margin: 50px 10px 10px 10px;

    color: white;
    font-family: 'Lexend Deca', sans-serif;
}

hr {
    margin: 20px 0 20px 0;
}

.date {
    font-size: 1.7em;
}

.company {
    font-size: 1.5em;
}


</style>