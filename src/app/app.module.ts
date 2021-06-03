import  {  BrowserModule  }  de  '@ angular / platform-browser' ;
importar  {  NgModule  }  de  '@ angular / core' ;
import  {  FormsModule ,  ReactiveFormsModule  }  de  '@ angular / forms' ;
importar  {  HttpClientModule  }  de  '@ angular / common / http' ;
importar  {  AppRoutingModule  }  de  './app-routing.module' ;
importar  {  AppComponent  }  de  './app.component' ;
importar  {  HeaderComponent  }  de  './header/header.component' ;
importar  {  PessoasComponent  }  de  './pessoas/pessoas.component' ;
importar  {  ListaPessoasComponent  }  de  './pessoas/lista-pessoas/lista-pessoas.component' ;
importar  {  PessoaDetalhesComponent  }  de  './pessoas/pessoa-detalhes/pessoa-detalhes.component' ;
importar  {  CriarPessoaComponent  }  de  './criar-pessoa/criar-pessoa.component' ;
importar  {  ErroComponent  }  de  './erro/erro.component' ;

importar  {  ApiService  }  de  './api.service' ;
importar  {  DataService  }  de  './shared/data.service' ;
import  { PagerService }  de  './pager.service' ;

@ NgModule ( {
  declarações : [
    AppComponent ,
    HeaderComponent ,
    PessoasComponent ,
    ListaPessoasComponent ,
    PessoaDetalhesComponent ,
    CriarPessoaComponent ,
    ErroComponent
  ] ,
  importações : [
    BrowserModule ,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule ,
    ReactiveFormsModule
  ] ,
  provedores : [ ApiService ,  DataService ,  PagerService ] ,
  bootstrap : [ AppComponent ]
} )
exportar  classe  AppModule  {  }