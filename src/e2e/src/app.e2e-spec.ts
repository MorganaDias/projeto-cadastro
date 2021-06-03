importar  {  AppPage  }  de  './app.po' ;

describe ( 'workspace-project App' ,  ( )  =>  {
  deixar a  página : AppPage ;

  beforeEach ( ( )  =>  {
    page  =  new  AppPage ( ) ;
  } ) ;

  it ( 'deve exibir mensagem de boas-vindas' ,  ( )  =>  {
    página . NavigationTo ( ) ;
    esperar ( página . getParagraphText ( ) ) . toEqual ( 'Bem-vindo ao projeto-cadastro-pessoa!' ) ;
  } ) ;
} ) ;