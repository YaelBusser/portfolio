<template>
    <div class="sidebar">
        <SidebarHeader :profil="monProfil"/>
        <SidebarBody/>
        <SidebarFooter :social="mesReseaux" />
    </div>
</template>

<script>
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import SidebarBody from "@/components/sidebar/SidebarBody";
import SidebarFooter from "@/components/sidebar/SidebarFooter";
export default {
    components: {
        SidebarHeader,
        SidebarBody,
        SidebarFooter
    },
    data(){
        return{
            monProfil: {
                nom: "Yaël",
                prenom: "Busser",
                img: {
                    alt: "Ma photo de profil",
                    url: require("@/assets/images/profil.png")
                },
                statut: "Étudiant en BTS SIO"
            },
            mesReseaux: {
                linkedin: "https://www.linkedin.com/in/yael-busser-00376518a/",
                github: "https://github.com/YaelBusser",
                twitter : "https://twitter.com/YaelBusser53200"
            }
        }
    }
}
</script>

<style scoped>
    .sidebar{
        width: 12em;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        position: fixed;
        background-color: #181818;
        display: flex;
        flex-direction: column;
    }
</style>
