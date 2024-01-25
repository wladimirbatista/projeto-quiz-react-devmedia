"use client";
import Login from '../components/Login'
import ContadorQuestoes from "../components/ContadorQuestoes";
import Botao from "../components/Botao";
import Quiz from "../components/Quiz";
import Resultado from '../components/Resultado'
import styles from '../styles/page.module.css'

import { useState } from "react";

import {
  selecionarPerguntaAleatoria,
  embaralharOpcoesPergunta,
  encontrarOpcaoResposta,
  calcularPorcentagemAcertos,
} from '../utils';

export default function Home() {

  const quantidadeQuestoes = 10;

  const [iniciarJogo, setIniciarJogo] = useState(false);
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState([]);
  const [respostaUsuario, setRespostaUsuario] = useState(null);
  const [contadorQuestoes, setContadorQuestoes] = useState(0);
  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [porcentagemAcertos, setPorcentagemAcertos] = useState(0);

  const handleIniciarJogo = () => {
    const perguntaAleatoria = selecionarPerguntaAleatoria();
    const perguntaOpcoesEmbaralhadas = embaralharOpcoesPergunta(perguntaAleatoria);
    
    setPerguntasSelecionadas(perguntaOpcoesEmbaralhadas);
    setIniciarJogo(true);
  }

  const handleCliqueResposta = (opcaoSelecionada) => {
    const opcoesPerguntaAtual = perguntasSelecionadas[0].opcoes;
    const opcaoSelecionadaCorreta = encontrarOpcaoResposta(opcoesPerguntaAtual, opcaoSelecionada);

    setRespostaUsuario(opcaoSelecionadaCorreta);
    
    if (opcaoSelecionadaCorreta.correta) {
      setRespostasCorretas(respostasCorretas + 1);
      setPorcentagemAcertos(calcularPorcentagemAcertos(respostasCorretas + 1, quantidadeQuestoes));
    }
  };

  const handleProximaPergunta = () => {
    if (indicePerguntaAtual < quantidadeQuestoes) { // verificar se há mais perguntas antes de incrementar o contador
      const proximaPerguntaAleatorio = selecionarPerguntaAleatoria();
      const proximaPerguntaOpcoesEmbaralhadas = embaralharOpcoesPergunta(proximaPerguntaAleatorio)

      setPerguntasSelecionadas(proximaPerguntaOpcoesEmbaralhadas);
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
      setRespostaUsuario(null);
      setContadorQuestoes(contadorQuestoes + 1);
    }
  };

  return (
    <>
      {!iniciarJogo ? (
        <Login 
          handleIniciarJogo={handleIniciarJogo}
        />
      ) : (
        <>
          {indicePerguntaAtual < quantidadeQuestoes && (
            <div className={styles.container_quiz}>
              <ContadorQuestoes 
                contadorQuestoes={contadorQuestoes}
                quantidadeQuestoes={quantidadeQuestoes}
              />
              <Quiz 
                pergunta={perguntasSelecionadas[0].pergunta}
                opcoes={perguntasSelecionadas[0].opcoes}
                handleCliqueResposta={handleCliqueResposta}
                respostaUsuario={respostaUsuario}
              />
              <Botao 
                handleProximaPergunta={handleProximaPergunta}
                respostaUsuario={respostaUsuario}
                indicePerguntaAtual={indicePerguntaAtual}
                quantidadeQuestoes={quantidadeQuestoes}
              />
            </div>
          )}
          {indicePerguntaAtual === quantidadeQuestoes && (
            <Resultado 
              porcentagem={porcentagemAcertos}
              respostasCorretas={respostasCorretas}
            />
          )}
        </>
      )}
    </>
  )
}
