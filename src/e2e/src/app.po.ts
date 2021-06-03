import  {  navegador ,  por ,  elemento  }  de  'transferidor' ;

export  class  AppPage  {
  NavigationTo ( )  {
     navegador de retorno . get ( '/' ) ;
  }

  getParagraphText ( )  {
     elemento de retorno ( por . css ( 'app-root h1' ) ) . getText ( ) ;
  }
}