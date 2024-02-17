<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imgSrc" alt="pkmn"/>
        <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pkmn"/>
    </div>
</template>

<script>
export default {
    props:{
            pokemonId: {
                type: Number,
                required: true
            },
            showPokemon:{
                type: Boolean,
                default: false,
                required: true
            }
        },
    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

<style scoped>
    .hidden-pokemon{
        filter: brightness(0);
    }
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        width: 100vw;
        margin-left: -50vw;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
</style>
