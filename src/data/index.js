const questoes = [
  {
    id: 1, 
    pergunta: 'Qual o navegador explorou o Novo Mundo?',
    opcoes: [
      {resposta: 'Pedro Alvares Cabral', correta: false}, 
      {resposta: 'Fernan de Magalhães', correta: false},
      {resposta: 'Vasco da Gama', correta: false},
      {resposta: 'Cristovão Colombo', correta: true }
    ]
  },
  { 
    id: 2,
    pergunta: 'Qual foi o 1° homem a pisar na lua?', 
    opcoes: [
      { resposta: 'Yuri Gagarin', correta: false },
      { resposta: 'Buzz Aldrin', correta: false },
      { resposta: 'Jonh Gleen', correta: false },
      { resposta: 'Neil Armstrong', correta: true }
    ]
  },
  { 
    id: 3, 
    pergunta: 'Quem pintou a Capela Sistina?', 
    opcoes: [
      { resposta: 'Leonardo da Vinci', correta: false },
      { resposta: 'Pablo Picasso', correta: false },
      { resposta: 'Vincent van Gogh', correta: false },
      { resposta: 'Michelangelo', correta: true }
    ]
  },
  {
    id: 4, 
    pergunta: 'Quem é o inventor da luz elétrica?', 
    opcoes: [
      { resposta: 'Nikola Tesla', correta: false },
      { resposta: 'Alexander Graham Bell', correta: false },
      { resposta: 'Charles Babbage', correta: false },
      { resposta: 'Thomas Edison', correta: true }
    ]
  },  
  {
    id: 5, 
    pergunta: 'Qual país da Ásia era membro do Eixo na 2° Guerra Mundial?', 
    opcoes: [
      { resposta: 'China', correta: false },
      { resposta: 'Coreia do Sul', correta: false },
      { resposta: 'Coreia do Norte', correta: false },
      { resposta: 'Japão', correta: true }
    ]
  },  
  {
    id: 6, 
    pergunta: 'Qual é a civilização mais antiga do mundo?', 
    opcoes: [
      { resposta: 'Babilônia', correta: false },
      { resposta: 'Suméria', correta: false },
      { resposta: 'Fenícia', correta: false },
      { resposta: 'Mesopotâmia', correta: true }
    ]
  },  
  {
    id: 7, 
    pergunta: 'Qual cidade da Grécia Antiga foi incendiada pelos persas?', 
    opcoes: [
      { resposta: 'Esparta', correta: false },
      { resposta: 'Corinto', correta: false },
      { resposta: 'Tebas', correta: false },
      { resposta: 'Atenas', correta: true }
    ]
  },  
  {
    id: 8, 
    pergunta: 'Qual autor escreveu O Guarani e O Gaúcho?', 
    opcoes: [
      { resposta: 'Aluísio de Azevedo', correta: false },
      { resposta: 'José de Anchieta', correta: false },
      { resposta: 'Machado de Assis', correta: false },
      { resposta: 'José de Alencar', correta: true }
    ]
  },  
  {
    id: 9, 
    pergunta: 'O Homem Vitruviano é um desenho de qual artista?', 
    opcoes: [
      { resposta: 'Van Gogh', correta: false },
      { resposta: 'Pablo Picasso', correta: false },
      { resposta: 'Donatello', correta: false },
      { resposta: 'Leonardo da Vinci', correta: true }
    ]
  },  
  {
    id: 10, 
    pergunta: 'Qual país foi dividido em 1949?', 
    opcoes: [
      { resposta: 'Bélgica', correta: false },
      { resposta: 'Polônia', correta: false },
      { resposta: 'Áustria', correta: false },
      { resposta: 'Alemanha', correta: true }
    ]
  },  
  {
    id: 11, 
    pergunta: 'Qual a montanha mais alta do mundo?', 
    opcoes: [
      { resposta: 'Monte Chimborazo', correta: false },
      { resposta: 'Monte Kilimanjaro', correta: false },
      { resposta: 'Monte Fuji', correta: false },
      { resposta: 'Monte Everest', correta: true }
    ]
  },  
  {
    id: 12, 
    pergunta: 'Quem inventou a 1° linguagem de programação?', 
    opcoes: [
      { resposta: 'Charles Babbage', correta: false },
      { resposta: 'Alan Turing', correta: false },
      { resposta: 'Grace Hopper', correta: false },
      { resposta: 'Ada Lovelace', correta: true }
    ]
  },  
  {
    id: 13, 
    pergunta: 'Quem inventou a lâmpada?', 
    opcoes: [
      { resposta: 'Benjamin Franklin', correta: false },
      { resposta: 'Graham Bell', correta: false },
      { resposta: 'Nikola Tesla', correta: false },
      { resposta: 'Thomas Edison', correta: true }
    ]
  },  
  {
    id: 14, 
    pergunta: 'Que evento histórico ocorre no Brasil no ano de 1822?', 
    opcoes: [
      { resposta: 'Revolução Farroupilha', correta: false },
      { resposta: 'Abolição da Escravidão', correta: false },
      { resposta: 'Ditadura Militar', correta: false },
      { resposta: 'Independência do Brasil', correta: true }
    ]
  },  
  {
    id: 15, 
    pergunta: 'Quem foi a primeira mulher a viajar para o espaço?', 
    opcoes: [
      { resposta: 'Kathryn D. Sullivan', correta: false },
      { resposta: 'Svetlana Savitskaya', correta: false },
      { resposta: 'Mae Jemison', correta: false },
      { resposta: 'Valentina Tereshkova', correta: true }
    ]
  },  
  {
    id: 16, 
    pergunta: 'Qual foi a invenção feita por Robert Kahn e Vint Cerf?', 
    opcoes: [
      { resposta: 'Televisão', correta: false },
      { resposta: 'Computador', correta: false },
      { resposta: 'Rádio-gravador', correta: false },
      { resposta: 'Internet', correta: true }
    ]
  },  
  {
    id: 17, 
    pergunta: 'Quanto tempo durou o regime do apartheid na África do Sul?', 
    opcoes: [
      { resposta: '51 anos', correta: false },
      { resposta: '37 anos', correta: false },
      { resposta: '22 anos', correta: false },
      { resposta: '46 anos', correta: true }
    ]
  },
  {
    id: 18, 
    pergunta: 'Que atleta é o detentor do recorde de medalhas olímpicas?', 
    opcoes: [
      { resposta: 'Usain Bolt', correta: false },
      { resposta: 'Carl Lewis', correta: false },
      { resposta: 'Michael Jordan', correta: false },
      { resposta: 'Michael Phelps', correta: true }
    ]
  },  
  {
    id: 19, 
    pergunta: 'Quem foi o inventor da vacina?', 
    opcoes: [
      { resposta: 'Louis Pasteur', correta: false },
      { resposta: 'Albert Sabin', correta: false },
      { resposta: 'Robert Koch', correta: false },
      { resposta: 'Edward Jenner', correta: true }
    ]
  },  
  {
    id: 20, 
    pergunta: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', 
    opcoes: [
      { resposta: '1914', correta: false },
      { resposta: '1922', correta: false },
      { resposta: '1956', correta: false },
      { resposta: '1904', correta: true }
    ]
  },  
  {
    id: 21, 
    pergunta: 'Em qual país foi inventado o chuveiro elétrico?', 
    opcoes: [
      { resposta: 'França', correta: false },
      { resposta: 'Inglaterra', correta: false },
      { resposta: 'Estados Unidos', correta: false },
      { resposta: 'Brasil', correta: true }
    ]
  },  
  {
    id: 22, 
    pergunta: 'Qual mulher ficou conhecida como "Dama de Ferro"?', 
    opcoes: [
      { resposta: 'Dilma Rousseff', correta: false },
      { resposta: 'Hillary Clinton', correta: false },
      { resposta: 'Angela Merkel', correta: false },
      { resposta: 'Margaret Thatcher', correta: true }
    ]
  },  
  {
    id: 23, 
    pergunta: 'Qual país saiu como derrotado na guerra das Malvinas?', 
    opcoes: [
      { resposta: 'Uruguai', correta: false },
      { resposta: 'Venezuela', correta: false },
      { resposta: 'Paraguai', correta: false },
      { resposta: 'Argentina', correta: true }
    ]
  },  
  {
    id: 24, 
    pergunta: 'Que figura pública realizou o famoso discurso "Eu Tenho um Sonho"?', 
    opcoes: [
      { resposta: 'Malcolm X', correta: false },
      { resposta: 'Barack Obama', correta: false },
      { resposta: 'Chadwick Boseman', correta: false },
      { resposta: 'Martin Luther King Jr.', correta: true }
    ]
  },  
  {
    id: 25, 
    pergunta: 'Em qual país é localizado o campo de concentração de Auschwitz?', 
    opcoes: [
      { resposta: 'Israel', correta: false },
      { resposta: 'França', correta: false },
      { resposta: 'Itália', correta: false },
      { resposta: 'Polônia', correta: true }
    ]
  },  
  {
    id: 26, 
    pergunta: 'Em qual cidade ocorreu o maior acidente nuclear da história?', 
    opcoes: [
      { resposta: 'Goiania', correta: false },
      { resposta: 'Fukushima', correta: false },
      { resposta: 'Windscale', correta: false },
      { resposta: 'Chernobyl', correta: true }
    ]
  },  
  {
    id: 27, 
    pergunta: 'Quem é o maior artilheiro da história das Copas do Mundo?', 
    opcoes: [
      { resposta: 'Ronaldo', correta: false },
      { resposta: 'Lionel Messi', correta: false },
      { resposta: 'Kylian Mbappé', correta: false },
      { resposta: 'Miroslav Klose', correta: true }
    ]
  },  
  {
    id: 28, 
    pergunta: 'Quem foi o 1º líder da União Soviética?', 
    opcoes: [
      { resposta: 'Joseph Stalin', correta: false },
      { resposta: 'Leon Trotsky', correta: false },
      { resposta: 'Karl Marx', correta: false },
      { resposta: 'Vladimir Lenin', correta: true }
    ]
  },  
  { 
    id: 29, 
    pergunta: 'Qual batalha marcou o fim da Segunda Guerra Mundial?', 
    opcoes: [
      { resposta: 'Batalha de Stalingrado', correta: false },
      { resposta: 'Batalha da Normandia', correta: false },
      { resposta: 'Batalha das Ardenas', correta: false },
      { resposta: 'Batalha de Midway', correta: true }
    ]
  },
  { 
    id: 30, 
    pergunta: 'Qual líder militar unificou o Japão durante o periodo Sengoku?', 
    opcoes: [
      { resposta: 'Date Masamune', correta: false },
      { resposta: 'Takeda Shinghen', correta: false },
      { resposta: 'Toyotomi Hideyoshi', correta: false },
      { resposta: 'Oda Nobunaga', correta: true }
    ]
  }
];

export default questoes;