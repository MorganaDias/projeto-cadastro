import  {  Inject ,  InjectionToken ,  NgModule  }  de  '@ angular / core' ;
import  {  CommonModule  }  de  '@ angular / common' ;

/ * consultado: https://stackoverflow.com/questions/51275878/angular-cant-resolve-all-parameters-for-component-ng-build-prod * /
exportar  const  ID : InjectionToken < string >  =  new  InjectionToken < number > ( 'ID' ) ;
exportar  const  NOME : InjectionToken < string >  =  new  InjectionToken < string > ( 'NOME' ) ;
export  const  EMAIL : InjectionToken < string >  =  new  InjectionToken < string > ( 'EMAIL' ) ;
exportar  const  IDADE : InjectionToken < string >  =  new  InjectionToken < number > ( 'IDADE' ) ;
export  const  LOGIN : InjectionToken < string >  =  new  InjectionToken < string > ( 'LOGIN' ) ;
export  const  SENHA : InjectionToken < string >  =  new  InjectionToken < string > ( 'SENHA' ) ;
export  const  STATUS : InjectionToken < string >  =  new  InjectionToken < boolean > ( 'STATUS' ) ;

@ NgModule ( {
  declarações : [ ] ,
  importações : [
    CommonModule
  ]
} )
export  class  PessoaModule  {

  construtor (
    @ Inject ( ID )  public  id : number ,
    @ Inject ( NOME )  nome público  : string ,
    @ Inject ( EMAIL )  e - mail público  : string ,
    @ Inject ( IDADE )  public  idade : number ,
    @ Inject ( LOGIN )  login público  : string ,
    @ Inject ( SENHA )  senha pública  : string ,
    @ Inject ( STATUS )  status público  : booleano ) { } 
}