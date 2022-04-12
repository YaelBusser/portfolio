<template>
  <div class="accueil">
      <AccueilPresentation :presentation="maPresentation"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilPresentation from "@/components/Accueil/Presentation/AccueilPresentation";
export default {
  name: 'Accueil',
  components: {
    AccueilPresentation
  },
  data(){
      return{
        maPresentation: {
            text1: "Salut,",
            text2: "Je suis Yaël,",
            text3: "Étudiant et autodidacte",
            text4: "Étudiant en BTS SIO"
        }
      }
  }
}
</script>

<style scoped>
    .accueil{
      margin-left: 12em;
    }
</style>