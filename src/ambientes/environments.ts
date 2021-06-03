// Este arquivo pode ser substituído durante a construção usando o array `fileReplacements`.
// `ng build --prod` substitui` environment.ts` por `environment.prod.ts`.
// A lista de substituições de arquivo pode ser encontrada em `angular.json`.

export  const  environment  =  {
    produção : falso ,
    apiUrl : 'http: // localhost: 3000'
  } ;
  
  / *
   * Para depuração mais fácil no modo de desenvolvimento, você pode importar o seguinte arquivo
   * para ignorar frames de pilha de erros relacionados à zona, como `zone.run`,` zoneDelegate.invokeTask`.
   *
   * Esta importação deve ser comentada no modo de produção porque terá um impacto negativo
   * no desempenho se um erro for lançado.
   * /
  // import 'zone.js / dist / zone-error'; // Incluído no Angular CLI.