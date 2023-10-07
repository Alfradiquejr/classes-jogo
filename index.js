class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(ataque){
        this.ataque = ""
        switch (this.tipo){
            case "mago":
                this.ataque = "usando magia"
                break;
            case "guerreiro":
                this.ataque = "usando espada"
                break;
            case "monge":
                this.ataque = "usando artes marciais"
                break;
            default:
                this.ataque = "usando shuriken"
        }
        console.log (`O ${this.tipo} atacou ${this.ataque}`)
    }
}

let heroiMago = new Heroi("Paulo", 25, "mago")
let heroiGuerreiro = new Heroi("Paulo", 25, "guerreiro")
let heroiMonge = new Heroi("Paulo", 25, "monge")
let heroiNinja = new Heroi("Paulo", 25, "ninja")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()