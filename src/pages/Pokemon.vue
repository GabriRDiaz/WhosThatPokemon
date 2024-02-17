<template>
    <div><h1>Who´s that Pokémon?</h1></div>
    <div v-if="currentPokemon">
        <PokemonPic :pokemonId="currentPokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions
            :options="pokemonOptionList"
            @selection="checkAnswer($event)"
        />
    </div>
    <div v-if="showAnswer" class="fade-in">
        <h2>{{ message }}</h2>
        <button @click="newGame">Play Again</button>
    </div>


</template>

<script>

import PokemonPic from '@/components/PokemonPic.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemons from '@/utils/getPokemons.js'



export default {
    components:{PokemonPic,PokemonOptions},
    data(){
        return{
            pokemonOptionList: [],
            currentPokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async getPokemonList(){
            this.pokemonOptionList = await getPokemons()
            this.currentPokemon = this.pokemonOptionList[Math.floor(Math.random()*4)]
        },
        checkAnswer(pokemonId){
            this.showPokemon=true;
            this.showAnswer=true;
            if(pokemonId==this.currentPokemon.id){
                this.message="You got it!"
            }else{
                this.message=`Wrong! it was ${this.currentPokemon.name}`
            }
        },
        newGame(){
            this.showPokemon=false;
            this.showAnswer=false;
            this.message='';
            this.pokemonOptionList = []
            this.currentPokemon=null
            this.getPokemonList();
        }
    },
    mounted(){
        this.getPokemonList()
    }
}
</script>
