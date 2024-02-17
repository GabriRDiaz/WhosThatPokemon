import pokemonApi from '../api/pokemonApi'

const getPokemons = () =>{
    const pokemonList = Array.from(Array(650));
    return pokemonList.map((_,index)=>index+1);
}

const getPokemonOptions = async() =>{
    var shuffledList = Array.from(Array(4)).fill(0);
    for (var i = 0; i < shuffledList.length; i++) {
    var r;
    do {
        r = Math.floor(Math.random() * 650) + 1;
    } while (shuffledList.includes(r));
        shuffledList[i] = r;
    }

const pokemons = await consumePokemonApi(shuffledList.splice(0,4))
return pokemons;
}

const consumePokemonApi = async([p1,p2,p3,p4] = [])=>{
    const promises = [
        pokemonApi.get(`/${p1}`),
        pokemonApi.get(`/${p2}`),
        pokemonApi.get(`/${p3}`),
        pokemonApi.get(`/${p4}`)
    ]

    const [r1,r2,r3,r4] = await Promise.all(promises)
    return [
        //ToDo: Add capitalize function 
        {name: r1.data.name.charAt(0).toUpperCase() + r1.data.name.slice(1), id: r1.data.id},
        {name: r2.data.name.charAt(0).toUpperCase() + r2.data.name.slice(1), id: r2.data.id},
        {name: r3.data.name.charAt(0).toUpperCase() + r3.data.name.slice(1), id: r3.data.id},
        {name: r4.data.name.charAt(0).toUpperCase() + r4.data.name.slice(1), id: r4.data.id}
    ]
}
export default getPokemonOptions