import WaveSurfer from "wavesurfer.js";
import {configuracion} from './configuracion'

class Sonido {

    private wavesurfer:WaveSurfer = null;

    public constructor(){
        this.wavesurfer = WaveSurfer.create(configuracion);
    }

    public cargar_musica(url:string):void{
        this.wavesurfer.load(url);
    }

    public obtener_objeto():WaveSurfer{
        return this.wavesurfer;
    }
}
/* var wavesurfer = WaveSurfer.create(configuracion);

wavesurfer.load("./asset/mp3/Good-Day-Wake-Up-NEFFEX.mp3");

play_btn.addEventListener("click",()=>{
    
    wavesurfer.playPause();

    if(play_btn.src.includes("play.png"))    play_btn.src = "./asset/img/pause.png";
    else play_btn.src = "./asset/img/play.png";
    
});

wavesurfer.on("finsh",()=>{
    play_btn.src = "./asset/img/play.png";
    wavesurfer.stop();
}); */

export {Sonido}