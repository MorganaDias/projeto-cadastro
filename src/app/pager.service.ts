/ * retirado de: http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google * /
// modificado para o número de itens ser 6 ao acerto de 10
export  class  PagerService  {
  getPager ( totalItems : number ,  currentPage : number  =  1 ,  pageSize : number  =  6 )  {
    // calcula o total de páginas
    const  totalPages  =  Math . ceil ( TotalItems  /  pageSize ) ;

    // certifique-se de que a página atual não está fora do intervalo
    if  (página atual  <  1 )  {
      currentPage  =  1 ;
    }  else  if  ( currentPage  >  totalPages )  {
      currentPage  =  totalPages ;
    }

    deixe  startPage : number ,  endPage : number ;
    if  ( totalPages  <=  6 )  {
      // menos de 6 páginas no total, então mostre todas
      startPage  =  1 ;
      endPage  =  totalPages ;
    }  else  {
      // mais de 6 páginas no total, então calcule as páginas inicial e final
      if  (página atual  <=  6 )  {
        startPage  =  1 ;
        endPage  =  6 ;
      }  else  if  ( currentPage  +  2  > =  totalPages )  {
        startPage  =  totalPages  -  5 ;
        endPage  =  totalPages ;
      }  else  {
        página inicial  = página  atual  -  3 ;
        endPage  =  currentPage  +  2 ;
      }
    }

    // calcula os índices de item inicial e final
    const  índiceInicial  =  ( currentPage  -  1 )  *  pageSize ;
    const  endIndex  =  Math . min ( startIndex  +  pageSize  -  1 ,  totalItems  -  1 ) ;

    // cria um array de páginas para repetir o ng no controle de pager
     páginas  const =  Array . from ( Array ( ( endPage  +  1 )  -  startPage ) . keys ( ) ) . mapa ( i  => página  inicial  +  i ) ;

    // retorna o objeto com todas as propriedades do pager exigidas pela visualização
    return  {
      totalItems : totalItems ,
      currentPage : currentPage ,
      pageSize : pageSize ,
      totalPages : totalPages ,
      startPage : startPage ,
      endPage : endPage ,
      startIndex : startIndex ,
      endIndex : endIndex ,
      páginas : páginas
    } ;
  }
}