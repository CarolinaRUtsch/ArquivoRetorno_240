//Arquivo CNAB 240 ARQUIVO Retorno
const path = require("path");
const filename = path.basename("CPBBV_31818873000130_03062021045308861.RET");
const fs = require("fs");

// ler o arquivo
const fileContent = fs.readFileSync(filename, "utf8");
const fileContentLines = fileContent.split("\n");

let objeto = {
  header: {},
  lote: {},
  detalheT: [],
  detalheU: []
};

fileContentLines.forEach((stringCnab, linha) => {

//Faz leitura conforme a linha em que esta. 
//Arquivo CNAB e dividido em 6 partes principais:
// Header, HeaderLote,Seguimento T, Seguimento U, Trailer Lote, Trailer Arquivo

  if (linha == 0) {
    objetoJson = {};
    //HEADER
    objetoJson.CodigoBancoCompensacaoHEADER = stringCnab.substring(0, 3);
    objetoJson.LoteServico = stringCnab.substring(3, 7);
    objetoJson.TipoRegistro = "0";
    objetoJson.FEBRABAN_Cnab = "         ";
    objetoJson.TipoInscricaoEmpresa = stringCnab.substring(17, 18);
    objetoJson.NIncricaoEmpresa = stringCnab.substring(18, 32);
    objetoJson.Zeros = stringCnab.substring(32, 52);
    objetoJson.AgenciaConta = stringCnab.substring(52, 57);
    objetoJson.DVAgencia = stringCnab.substring(57, 58);
    objetoJson.Ncontacorrente = stringCnab.substring(58, 70);
    objetoJson.DVVerificadorConta = stringCnab.substring(70, 71);
    objetoJson.DVVverificadorAGConta = stringCnab.substring(71, 72);
    objetoJson.NomeEmpresa = stringCnab.substring(72, 102);
    objetoJson.NomeBanco = stringCnab.substring(102, 132);
    objetoJson.FEBRABAN_Cnab = "          ";
    objetoJson.CDRemessa_Retorno = stringCnab.substring(142, 143);
    objetoJson.DTGeracaoArquivo = stringCnab.substring(143, 151);
    objetoJson.HRGeracaoArquivo = stringCnab.substring(151, 157);
    objetoJson.NSequencialArquivo = stringCnab.substring(157, 163);
    objetoJson.NVersaoLayout = "001";
    objetoJson.DensidadeGravacaoArquivo = stringCnab.substring(166, 171);
    objetoJson.UsoReservadoBanco = stringCnab.substring(171, 191);
    objetoJson.UsoReservadoEmpresa = stringCnab.substring(191, 210);
    objetoJson.FEBRABAN_Cnab = " ";
    objeto.header = objetoJson;

  } else if (linha == 1) {
    ObjetoJsonLote = {};
    //HEADER lote
    ObjetoJsonLote.CodigoBancoCompensacaoLOTE = stringCnab.substring(0, 3);
    ObjetoJsonLote.LoteServico = stringCnab.substring(3, 7);
    ObjetoJsonLote.TipoRegistro = "1";
    ObjetoJsonLote.TipoOperacao = stringCnab.substring(9, 9);
    ObjetoJsonLote.tipoServico = "01";
    ObjetoJsonLote.FEBRABAN_Cnab = "  ";
    ObjetoJsonLote.NVersaoLayout = "040";
    ObjetoJsonLote.FEBRABAN_Cnab = " ";
    ObjetoJsonLote.TipoInscricaoEmpresa = stringCnab.substring(17, 18);
    ObjetoJsonLote.NIncricaoEmpresa = stringCnab.substring(19, 33);
    ObjetoJsonLote.CDConvenioBanco = stringCnab.substring(33, 53);
    ObjetoJsonLote.AgenciaMantenedoraConta = stringCnab.substring(53, 58);
    ObjetoJsonLote.DVVerificadorConta = stringCnab.substring(58, 59);
    ObjetoJsonLote.Ncontacorrente = stringCnab.substring(59, 71);
    ObjetoJsonLote.DVVerificadorConta = stringCnab.substring(71, 72);
    ObjetoJsonLote.DVVverificadorAGConta = stringCnab.substring(72, 73);
    ObjetoJsonLote.NomeEmpresa = stringCnab.substring(73, 103);
    ObjetoJsonLote.Mensagem1 = stringCnab.substring(103, 143);
    ObjetoJsonLote.Mnesagem2 = stringCnab.substring(143, 183);
    ObjetoJsonLote.NSequencialArquivo = stringCnab.substring(183, 191);
    ObjetoJsonLote.DTGeracaoArquivo = stringCnab.substring(191, 199);
    ObjetoJsonLote.DTCredito = stringCnab.substring(199, 207);
    ObjetoJsonLote.FEBRABAN_Cnab = " ";
    objeto.lote = ObjetoJsonLote;

  } else if (linha > 1 && stringCnab.substring(13,14) == 'T') {
    objetoJsonDetalhe = {};
    //DETALHES SEGUIMENTO T
    objetoJsonDetalhe.CodigoBancoCompensacaoDetalhe = stringCnab.substring(0,3);
    objetoJsonDetalhe.LoteServico = stringCnab.substring(3, 7);
    objetoJsonDetalhe.TipoRegistro = "3";
    objetoJsonDetalhe.NumeroSequencialLote = stringCnab.substring(8, 13);
    objetoJsonDetalhe.CDsegmentoDetalhe =  stringCnab.substring(13,14);
    objetoJsonDetalhe.FEBRABAN_Cnab = " ";
    objetoJsonDetalhe.CDMovimento = stringCnab.substring(16, 17);
    objetoJsonDetalhe.AgenciaMantenedoraConta = stringCnab.substring(18, 22);
    objetoJsonDetalhe.DVAgencia = stringCnab.substring(22, 23);
    objetoJsonDetalhe.Ncontacorrente = stringCnab.substring(23, 35);
    objetoJsonDetalhe.DVVerificadorConta = stringCnab.substring(35, 36);
    objetoJsonDetalhe.DVVverificadorAGConta = stringCnab.substring(36, 37);
    objetoJsonDetalhe.Zeros = stringCnab.substring(37, 47);
    objetoJsonDetalhe.IdentificacaoTitulo = stringCnab.substring(47, 57);
    objetoJsonDetalhe.CdCarteira = stringCnab.substring(57, 58);
    objetoJsonDetalhe.NdocumentoCobranca = stringCnab.substring(58, 68);
    objetoJsonDetalhe.Brancos = stringCnab.substring(68, 73);
    objetoJsonDetalhe.DTVencimentoTitulo = stringCnab.substring(73, 81);
    objetoJsonDetalhe.ValorNominalTitulo = stringCnab.substring(81, 96);
    objetoJsonDetalhe.NumeroBanco = stringCnab.substring(96, 99);
    objetoJsonDetalhe.AgenciaCobradora = stringCnab.substring(99, 104);
    objetoJsonDetalhe.DVAgencia = stringCnab.substring(104, 105);
    objetoJsonDetalhe.identificacaoEmpresaTitulo = stringCnab.substring(105,130);
    objetoJsonDetalhe.CDMoeda = stringCnab.substring(130, 132);
    objetoJsonDetalhe.TipoInscricao = stringCnab.substring(132, 133);
    objetoJsonDetalhe.inscricao = stringCnab.substring(133, 148);
    objetoJsonDetalhe.Nome = stringCnab.substring(148, 188);
    objetoJsonDetalhe.NcontratoOperacao = stringCnab.substring(188, 198);
    objetoJsonDetalhe.VlrTarifa = stringCnab.substring(198, 213);
    objetoJsonDetalhe.IdentificacaoRejeicao = stringCnab.substring(213, 223);
    objetoJsonDetalhe.DDA = stringCnab.substring(223, 224);
    objetoJsonDetalhe.FEBRABAN_Cnab = "          ";
    objeto.detalheT.push(objetoJsonDetalhe);
  }
    else if (linha > 1 && stringCnab.substring(13,14) == 'U') {
      objetoJsonDetalheU = {};
      //DETALHES SEGUIMENTO U
      objetoJsonDetalheU.CodigoBancoCompensacao = stringCnab.substring(0,3);
      objetoJsonDetalheU.LoteServico = stringCnab.substring(3,7);
      objetoJsonDetalheU.TipoRegistro = '3';
      objetoJsonDetalheU.NumeroSequencialLote = stringCnab.substring(8,13);
      objetoJsonDetalheU.CDsegmentoDetalhe = 'U';
      objetoJsonDetalheU.FEBRABAN_Cnab = '';
      objetoJsonDetalheU.CDMovimento = stringCnab.substring(15,17);
      objetoJsonDetalheU.JurosMultasEncargos = stringCnab.substring(17,32);
      objetoJsonDetalheU.VlrDesconto = stringCnab.substring(32,47);
      objetoJsonDetalheU.VlrAbate = stringCnab.substring(47,62);
      objetoJsonDetalheU.VlrIOF = stringCnab.substring(62,77);
      objetoJsonDetalheU.VlrPago = stringCnab.substring(77,92);
      objetoJsonDetalheU.VlrLiquido = stringCnab.substring(92,107);
      objetoJsonDetalheU.VlrOUtrasDespresas = stringCnab.substring(107,122);
      objetoJsonDetalheU.VlrOutrosCreditos = stringCnab.substring(122,137);
      objetoJsonDetalheU.DTOcorrencia = stringCnab.substring(137,145);
      objetoJsonDetalheU.DTEfetivacao = stringCnab.substring(145,153);
      objetoJsonDetalheU.CodigoOcorrencia = stringCnab.substring(153,157);
      objetoJsonDetalheU.DTOcorrencia = stringCnab.substring(157,165);
      objetoJsonDetalheU.VlrOcorrencia = stringCnab.substring(165,180);
      objetoJsonDetalheU.ComplementoOcorrencia = stringCnab.substring(181,210);
      objetoJsonDetalheU.CdBancoCorrespondente = stringCnab.substring(210,213);
      objetoJsonDetalheU.NossoNBanco = stringCnab.substring(213,233);
      objetoJsonDetalheU.FEBRABAN_Cnab = '';

      objeto.detalheU.push(objetoJsonDetalheU);
  }
  // else if (linha.tail -1  ) {
   else if (stringCnab.length-0) {
  //Realiza leitura da ultima linha
    ObjetoJsonTrailerLote = {};
        //Trailer lote
        ObjetoJsonTrailerLote.CodigoBancoCompensacao = stringCnab.substring(0,3);
        ObjetoJsonTrailerLote.LoteServico = stringCnab.substring(3,7);
        ObjetoJsonTrailerLote.TipoRegistro = '5';
        ObjetoJsonTrailerLote.FEBRABAN_Cnab = '';
        ObjetoJsonTrailerLote.QuantidadeREgistrosLote = stringCnab.substring(17,23);
        ObjetoJsonTrailerLote.QuantidadeTituloCobrancaSimples = stringCnab.substring(23,29)
        ObjetoJsonTrailerLote.VlrTotalTitulosCobrancaSimples = stringCnab.substring(29,46);
        ObjetoJsonTrailerLote.QuantidadeTituloCobrancaVinculada = stringCnab.substring(46,52);
        ObjetoJsonTrailerLote.VlrTotalTitulosCobrancaVinculada = stringCnab.substring(52,69);
        ObjetoJsonTrailerLote.QuantidadeTituloCobrancaGarantia = stringCnab.substring(69,75);
        ObjetoJsonTrailerLote.VlrTotalTitulosCobrancaGarantia = stringCnab.substring(75,92);
        ObjetoJsonTrailerLote.QuantidadeTituloCobrancaDescontada = stringCnab.substring(92,98);
        ObjetoJsonTrailerLote.VlrTotalTitulosCobrancaDescontada = stringCnab.substring(98,115);
        ObjetoJsonTrailerLote.NAviso = stringCnab.substring(115,123);
        ObjetoJsonTrailerLote.CNAB = '';

        objeto.TrailerLote = ObjetoJsonTrailerLote;

        ObjetoJsonTrailerdeArquivo = {};
        //Trailer ARquivo
        ObjetoJsonTrailerdeArquivo.CodigoBancoCompensacao = stringCnab.substring(0,3);
        ObjetoJsonTrailerdeArquivo.LoteServico = '9999';
        ObjetoJsonTrailerdeArquivo.TipoRegistro = '9';
        ObjetoJsonTrailerdeArquivo.FEBRABAN_Cnab = '';
        ObjetoJsonTrailerdeArquivo.QuantidadeLOtesArquivo = stringCnab.substring(17,23);
        ObjetoJsonTrailerdeArquivo.QuantidadeREgistrosArquivos = stringCnab.substring(23,29);
        ObjetoJsonTrailerdeArquivo.QuantidadeContasConciliadas = stringCnab.substring(29,35);
        ObjetoJsonTrailerdeArquivo.FEBRABAN_Cnab = '';

        objeto.TrailerArquivo = ObjetoJsonTrailerdeArquivo;
  
  }
});


//Salva arquivo em .Json com basciamente o mesmo nome q ele foi lido 
var texto = JSON.stringify(objeto);

fs.writeFile(filename  + ".json", texto, function (err) {
  if (err) throw err;
  console.log("Salvo");
});