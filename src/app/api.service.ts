/ * consultado: https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example+ * /

import  {  Injetável  }  de  '@ angular / core' ;
importar  {  ambiente  }  de  '../environments/environment' ;
import  {  HttpClient ,  HttpHeaders  }  de  '@ angular / common / http' ;
import  {  Observable ,  of  }  from  'rxjs' ;
import  {  map ,  catchError  }  de  'rxjs / operadores' ;

const  API_URL  =  ambiente . apiUrl ;
const  httpOptions  =  {
  cabeçalhos : new  HttpHeaders ( {
    'Content-Type' :   'application / json'
  } )
} ;

@ Injectable ( {
  fornecido em : 'root'
} )
export  class  ApiService  {

  construtor ( privado  http : HttpClient )  {

  }

  private  handleError < T >  ( operação  =  'operação' ,  resultado ?: T )  {
    return  ( erro : qualquer ) : Observável < T >  =>  {
      retorno  de ( erro  como  T ) ;
    } ;
  }

   extrairDados privados ( res : Resposta )  {
    let  body  =  res ;
     corpo de  retorno ||  {  } ;
  }

  // API: GET / pessoas
  public  getAllPessoas ( )  {
    devolva  isso . http . obter ( API_URL  +  '/ pessoas' ) . tubo (
      mapa ( este . extrairDados ) ) ;
  }

  // API: POST / pessoas
  public  createPessoa ( pessoa )  {
    devolva  isso . http . post < qualquer > ( API_URL  +  '/ pessoas' ,  JSON . stringify ( pessoa ) ,  httpOptions ) . tubo (
      catchError ( this . handleError < any > ( 'createPessoa' ) )
    ) ;
  }

  // API: GET / pessoas /: id
  public  getPessoaById ( pessoaId : número )  {
      devolva  isso . http . obter ( API_URL  +  '/ pessoas /'  +  pessoaId ) . tubo (
        mapa ( este . extrairDados ) ,
        catchError ( this . handleError < any > ( 'getPessoaById' ) )
      ) ;
  }
}