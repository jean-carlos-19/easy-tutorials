import {Play} from './Play';
import {Sonido} from './sonido'

let play:Play = new Play();
let sonido:Sonido = new Sonido();
sonido.cargar_musica("./asset/mp3/Good-Day-Wake-Up-NEFFEX.mp3");

play.obtener_boton().addEventListener("click",()=>{

    sonido.obtener_objeto().playPause();
    play.verificar_imagen();
})

sonido.obtener_objeto().on("finish",()=>{
    play.agregar_pausa();
    sonido.obtener_objeto().stop();
})