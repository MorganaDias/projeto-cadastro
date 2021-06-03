import  { Component ,  OnInit }  de  '@ angular / core' ;
importar  { PessoaModule }  de  '../../shared/pessoa.module' ;
import  { ActivatedRoute ,  Router }  de  '@ angular / router' ;
importar  { ApiService }  de  '../../api.service' ;
importar  { DataService }  de  '../../shared/data.service' ;

@ Component ( {
  seletor : 'app-pessoa-detalhes' ,
  templateUrl : './pessoa-detalhes.component.html'
} )
export  class  PessoaDetalhesComponent  implementa  OnInit  {
  pessoa : PessoaModule  =  null ;
  senhaInvisivel  =  true ;

  construtor (  dados privados  : DataService , API pública : ApiService , rota privada : ActivatedRoute , roteador privado : Roteador ) {       
  }

  ngOnInit ( )  {
    isso . rota . url . inscrever-se ( params  =>  {
      if  ( params [ 0 ] )  {
        const  id  =  parseInt ( params [ 0 ] . caminho ,  10 ) ;
        if  ( ! isNaN ( id ) )  {
          isso . getPessoaDetalhes ( id ) ;
        }  else  {
          isso . dados . storage  =  'Erro: ID não é um número.' ;
          isso . roteador . navegar ( [ '/ erro' ] ) ;
        }
      }
    } ) ;
  }

  getPessoaDetalhes ( id : number )  {
    isso . api . getPessoaById ( id ) . inscrever-se ( ( dados )  =>  {
      if  ( dados [ 'status' ]  ! ==  404 )  {
        isso . pessoa  =  dados ;
      }  else  {
        isso . dados . storage  =  'Erro: ID não existe no banco de dados.' ;
        isso . roteador . navegar ( [ '/ erro' ] ) ;
      }
    } ) ;
  }

}