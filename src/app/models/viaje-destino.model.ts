import { v4 as uuid } from 'uuid';

export class ViajeDestino{
    public selected: boolean;
    public servicios: string[];
    id = uuid();
    public votes = 0;
    constructor(public nombre: string, public imagenurl: string){
        this.servicios = ['Pileta','Desayuno','Masajes','Wifi','Climatización','Cine','Museo'];
    }
        setSelected(s: boolean){
            this.selected = s;
        }
        isSelected(){
            return this.selected;
        }
        voteUp(): any{
            this.votes++;
        }
        voteDown(): any{
            this.votes--;
        }
    }

