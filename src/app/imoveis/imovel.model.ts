export class Imovel{
    public titulo: string;
    public imagemSrc: string;
    public precoInicial: number;
    public desconto: number;
    public precoFinal: number;
    public endereco: string;
    public link: string;
    public statusOcupacao: boolean;
    public descricao:string;
    public statusFgts: boolean;
    public statusFinanciamento: boolean;
    public area: number;
    public tipoImovel: string;

    
    constructor(titulo: string, imagemSrc:string, precoInicial: number, desconto: number,  precoFinal: number,  endereco: string, link: string, statusOcupacao: boolean, descricao: string, statusFgts: boolean, statusFinanciamento: boolean,
        area: number, tipoImovel: string){
        this.titulo = titulo;
        this.imagemSrc = imagemSrc;
        this.precoInicial = precoInicial;
        this.desconto = desconto;
        this.precoFinal = precoFinal;
        this.endereco = endereco;
        this.link = link;
        this.statusOcupacao = statusOcupacao;
        this.descricao = descricao;
        this.statusFgts = statusFgts;
        this.statusFinanciamento = statusFinanciamento;
        this.area = area ;
        this.tipoImovel = tipoImovel;
    }
}