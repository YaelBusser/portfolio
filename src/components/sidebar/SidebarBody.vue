<template>
    <div class="sidebarBody">
        <div :class="bodyClass">
            <router-link to="/">
                <div :class="routerLinkClass">
                    <div>
                        <i class="fas fa-home"/><span>Accueil</span>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ name: 'MentionsLegales' }">
                <div :class="routerLinkClass">
                    <div>
                        <i class="fas fa-gavel"/><span>Mentions Légales</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            routerLinkClass: ["routerLink"],
            bodyClass: ["flex-column"],
            iClass: ["iClass"]
        }
    }
}
</script>
<style>
    .sidebarBody{
        width: 100%;
        margin-top: 50px;
        border-top: 3px solid #1d1d1d;
        margin-top: auto;
        margin-bottom: auto;
    }
</style>
<style scope>
    .routerLink{
        padding: 20px;
        border-bottom: 3px solid #1d1d1d;
        transition: 0.2s ease-out;
        display: flex;
        align-items: center;
    }
    .routerLink:hover{
        color: rgb(8, 253, 216);
    }
    .routerLink:active{
        color: rgba(8, 253, 216, 0.5);
    }
    .routerLink div{
        width: 161px;
        margin: auto;
    }
    a{
        color: rgba(255,255,255,0.5);
        text-decoration: none;
    }
    a span{
        margin-left: 10px;
        font-family: "Lato";
    }
</style>