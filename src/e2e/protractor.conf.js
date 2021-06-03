// Arquivo de configuração do transferidor, consulte o link para obter mais informações
// https://github.com/angular/protractor/blob/master/lib/config.ts

const  { SpecReporter }  =  require ( 'jasmine-spec-reporter' ) ;

exportações . config  =  {
  allScriptsTimeout : 11000 ,
  especificações : [
    './src/**/*.e2e-spec.ts'
  ] ,
  capacidades : {
    'browserName' : 'chrome'
  } ,
  directConnect : true ,
  baseUrl : 'http: // localhost: 4200 /' ,
  estrutura : 'jasmim' ,
  jasmineNodeOpts : {
    showColors : true ,
    defaultTimeoutInterval : 30000 ,
    imprimir : função ( )  { }
  } ,
  onPrepare ( )  {
    requer ( 'nó ts' ) . registrar ( {
      projeto : require ( 'caminho' ) . juntar ( __dirname ,  './tsconfig.e2e.json' )
    } ) ;
    jasmim . getEnv ( ) . addReporter ( novo  SpecReporter ( {  spec : {  displayStacktrace : true  }  } ) ) ;
  }
} ;