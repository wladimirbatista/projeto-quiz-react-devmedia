import questoes from "../data";

/**
 * Seleciona um subconjunto aleatório de perguntas da lista completa.
 *
 * Embaralha um array de perguntas e, em seguida, retorna um
 * array contendo 10 perguntas selecionadas aleatoriamente.
 */
const selecionarPerguntaAleatoria = () => {
  const indiceAleatorio = Math.floor(Math.random() * questoes.length);
  const questaoSelecionada = questoes.splice(indiceAleatorio, 1)[0];
  return [questaoSelecionada];
};


/**
 * Embaralha as opções de resposta de cada pergunta aleatoriamente.
 *
 * Recebe um array de objetos de perguntas e retorna um novo array com as opções
 * de resposta embaralhadas para cada pergunta.
 */
const embaralharOpcoesPergunta = (perguntasSelecionadas) => {
  const opcoesEmbaralhadas = perguntasSelecionadas.map((pergunta) => ({
    ...pergunta,
    opcoes: pergunta.opcoes.sort(() => Math.random() - 0.5),
  }));

  return opcoesEmbaralhadas;
};


/**
 * Encontra a opção de resposta correta que corresponde ao texto da opção selecionada.
 *
 * opcoes - Array de objetos de opção de resposta
 * opcaoSelecionada - Texto da opção de resposta selecionada
 * O objeto de opção de resposta correspondente que contém a resposta correta
 */

const encontrarOpcaoResposta = (opcoes, opcaoSelecionada) => {
  return opcoes.find((opcao) => opcao.resposta === opcaoSelecionada);
};


/**
 * Calcula a porcentagem de respostas corretas do total de perguntas.
 *
 * respostasCorretas - O número de perguntas respondidas corretamente
 * quantidadePerguntas - O número total de perguntas
 * A porcentagem de respostas corretas
 */
const calcularPorcentagemAcertos = (respostasCorretas, quantidadeQuestoes) => {
  const resultado = (respostasCorretas / quantidadeQuestoes) * 100;
  return resultado;
};

export {
  selecionarPerguntaAleatoria,
  embaralharOpcoesPergunta,
  calcularPorcentagemAcertos,
  encontrarOpcaoResposta
};

