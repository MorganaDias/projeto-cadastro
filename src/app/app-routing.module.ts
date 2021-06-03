importar  {  NgModule  }  de  '@ angular / core' ;
import  {  Routes ,  RouterModule  }  de  '@ angular / router' ;
importar  {  CriarPessoaComponent  }  de  './criar-pessoa/criar-pessoa.component' ;
importar  {  PessoasComponent  }  de  './pessoas/pessoas.component' ;
importar  {  ErroComponent  }  de  './erro/erro.component' ;

 rotas const : Rotas  =  [
  {  caminho : 'criar' ,  componente : CriarPessoaComponent  } ,
  {  caminho : 'lista' ,  filhos : [
      {  caminho : '' ,  componente : PessoasComponent  } ,
      {  caminho : ': id' ,  componente : PessoasComponent  }
    ]
  } ,
  {  caminho : '' ,
    redirectTo : '/ criar' ,
    pathMatch : 'full'
  } ,
  {  caminho : 'erro' ,  componente : ErroComponent  } ,
  {  caminho : '**' ,  redirectTo : '/ erro' }
] ;

@ NgModule ( {
  importações : [ RouterModule . forRoot ( rotas ) ] ,
  exportações : [ RouterModule ]
} )

exportar  classe  AppRoutingModule  {  }