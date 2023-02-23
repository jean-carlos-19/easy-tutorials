class Play {

    private boton:HTMLElement = null;

    public constructor(){
        this.boton = document.getElementById("play-btn");
    }

    public obtener_boton():HTMLElement{
        return this.boton;
    }

    public verificar_imagen():void{

        let verificacion:boolean = this.boton.getAttribute("src").includes("play.png");

        if(verificacion) this.agregar_pausa();
        else this.agregar_play();
           
    }

    public agregar_play():void{
        this.boton.removeAttribute("src")
        this.boton.setAttribute("src","./assets/img/play.png");
    }

    public agregar_pausa():void{
        this.boton.removeAttribute("src")
        this.boton.setAttribute("src","./assets/img/pause.png");
    }
    
}

export {Play}