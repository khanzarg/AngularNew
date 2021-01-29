export class pokemon {
    id:any
    name:null
    url:null
    img:string
    type:[]
    stats:[]

    image() {
        return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
    }
}