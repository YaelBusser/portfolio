<template>
    <div class="AccueilPresentation">
        <span class="baliseHtml"></span>
        <div class="textPresentation">
            <h1>{{presentation.text1}}</h1>
            <h1>{{presentation.text2}}</h1>
            <h1>{{presentation.text3}}</h1>
            <p>{{presentation.text4}}<button @click="toggleModal"><i class="fa-solid fa-circle-question i"></i></button></p>
        </div>
    </div>
    <ModalBts :revele="LeRevele" :toggleModal="toggleModal" />
</template>

<script>
import ModalBts from "@/components/Accueil/Presentation/ModalBts";
export default {
    props: ["presentation"],
    components: {
        ModalBts
    },
    data(){
        return{
            LeRevele: false
        }
    },
    methods: {
        toggleModal: function(){
            this.LeRevele = !this.LeRevele
        }
    }
}
</script>

<style scoped>
    button{
        width: 20px;
        height: 20px;
        position: relative;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        background-color: rgba(0,0,0,0);
        border: none;
    }
    .i{
        top: 0;
        left: 0;
        position: absolute;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transition: 0.2s ease-out;
    }
    .i:hover{
        color: rgb(8, 253, 216);
    }
    .textPresentation{
        margin-top: 200px;
    }
    .AccueilPresentation{
        position: relative;
        border: 1px solid red;
        padding-top: 90px;
        padding-left: 90px;
    }
    .baliseHtml::before{
        content: "<html>";
        top: 15px;
        left: 30px;
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 1em;
        color: rgba(255, 255, 255, 0.2);
    }
    .baliseHtml::after{
        content: "<body>";
        top: 35px;
        left: 50px;
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.2);
    }
    h1{
        color: white;
        font-size: 4em;
        font-family: "Poppins";
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: -25px;
    }
    h1:nth-child(1)::before{
        margin-top: -10px;
        left: 4.5rem;
        content: "<h1>";
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.2);
    }
    h1:nth-child(3)::after{
        content: "</h1>";
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.2);
        left: 4.5rem;
        margin-top: 80px;
    }
    p{
        margin-top: 40px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.5em;
        font-family: "Inconsolata";
        display: flex;
        align-items: center;
    }
    p::before{
        content: "<p>";
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.2);
        left: 4.5rem;
        margin-top: -20px;
    }
    p::after{
        content: "</p>";
        position: absolute;
        user-select: none;
        font-family: "La belle aurore";
        font-weight: lighter;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.2);
        left: 4.5rem;
        margin-top: 20px;
    }
</style>