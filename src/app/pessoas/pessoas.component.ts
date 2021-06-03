import  {  Component ,  OnInit  }  de  '@ angular / core' ;
importar  { DataService }  de  '../shared/data.service' ;
@ Component ( {
  seletor : 'app-pessoas' ,
  templateUrl : './pessoas.component.html'
} )
export  class  PessoasComponent  implementa  OnInit  {
  pessoaCadastrada  =  falso ;
  construtor ( dados privados  : DataService ) { }  

  ngOnInit ( )  {
    isso . pessoaCadastrada  =  isso . dados . adicionar ;
  }

}