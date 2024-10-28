export class Serie{
    id: number;
    name: string;
    canal: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(id: number, name: string, canal: string, seasons: number, description: string, link: string, image: string){
        this.id = id;
        this.name = name;
        this.canal = canal;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}