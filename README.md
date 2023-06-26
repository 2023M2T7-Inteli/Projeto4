# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inteli.edu.br%2F&psig=AOvVaw2XL1f93YfJYxye8U9-9ma5&ust=1687886217521000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDvuaa44f8CFQAAAAAdAAAAABAI"><img src="/imagens/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Protocom

## Grupo Tukumã

## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/diogo-pelaes-a34593279/">Diogo Pelaes Burgierman</a>
- <a href="https://www.linkedin.com/in/freddy-mester-harari-375860279">Freddy Mester Harari</a>
- <a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/">Isabella Fernandes Saldanha</a> 
- <a href="https://www.linkedin.com/in/joselitojunior/">Joselito Júnior Motta de Carvalho</a> 
- <a href="https://www.linkedin.com/in/marco-antonio-rizzi-meneguetti-620b56257/">Marco Antonio Rizzi Meneguetti</a>
- <a href="https://www.linkedin.com/in/ricardo-novaes-24276b271/">Ricardo Baumgart Magalhães de Novaes</a> 
- <a href="https://www.linkedin.com/in/vitoria-novaes/">Vitoria Novaes Xavier</a>

## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/juliastateri/">Julia Stateri</a>
### Instrutores
- <a href="https://www.linkedin.com/in/andreluizbraga/">André Souto Mayor Braga</a>
- <a href="https://www.linkedin.com/in/egondaxbacher/">Egon Ferreira Daxbacher</a> 
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco de Souza Escobar</a> 
- <a href="https://www.linkedin.com/in/geraldo-magela-severino-vasconcelos-22b1b220/">Geraldo Magela Severino Vasconcelos</a>

## 📝 Descrição

O Protocom é uma aplicação web desenvolvida pelo grupo Tukumã para a Natura. A solução busca resolver a dificuldade na coleta de dados da cadeia produtiva de insumos na Amazônia e sua digitalização. A plataforma permite o registro e a digitalização de informações sobre origem, práticas sustentáveis e certificações, promovendo transparência e rastreabilidade. O Protocom facilita a interação entre produtores, fornecedores, pesquisadores e a Natura, promovendo a sustentabilidade e responsabilidade socioambiental, simplificando e agilizando o processo de coleta de dados na região amazônica.

Para ter acesso ao vídeo explicativo da nossa aplicação web, acesse o seguinte link: https://www.youtube.com/watch?v=0IkuDsZrW2w&ab_channel=VingadoresBRA

## 📝 LINK

Esta versão de entrega não incluirá link para o deploy em um servidor.

## 📁 Estrutura de pastas


|--> documentos<br>
  &emsp;| T7_G4_V5_Web_application_document.docx<br>
  &emsp;| T7_G4_V5_Web_application_document.pdf<br>
|--> imagens<br>
|--> src<br>
  &emsp;|--> Backend<br>
  &emsp;|--> Data<br>
  &emsp;|--> Frontend<br>
  &emsp;|.DS_Store<br>
| .DS_Store<br>
| .gitignore.txt<br>
| readme.md<br>
| license.txt

Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estarão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde estão presentes aqueles documentos complementares ao <b>web application document</b>.

- <b>imagens</b>: imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins).

- <b>src</b>: nesta pasta encontra-se todo o código fonte do sistema (existem três subpastas <b>backend</b>, <b>data</b> e <b>frontend</b> que contêm, respectivamente, o código do servidor, banco de dados e o código da página web).

## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta "src" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install sqlite3 express cors multer
```

4. Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto.
5. Em seguida, digite o comando:

```sh
node PROTOCM_V1.JS
```

6. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```
7. Agora você pode acessar a aplicação através do link http://127.0.0.1:2021/sign_in/sign_in.html
8. O servidor está online.

## 🗃 Histórico de lançamentos
      
* 0.4.4 - 21/06/2023
    * Finalização do frontend da tela de "create-protocols"
    * Alteração no frontend da tela de "create-protocols"
    * Alteração na tela de "select-usuario"
    * Finalização do desenvolvimento da página "view-usuario"
    * Atualização no read.me
    * Alteração no backend e frontend da tela de responder protocolos (answer)
    * Alteração no backend e frontend da tela de login (sign in)
    * Alteração no frontend da tela do agricultor

* 0.4.3 - 20/06/2023
    * Correção de erros no armazenamento de documentos da tela de responder protocolos (answer)
    * Atualização e alteração no read.me
    * Alteração de alguns detalhes de design na página "select-usuario"
    * Atualização da integração da tela de criação de protocolos
    * Modificação no banco de dados
    * finalização da integração da tela de responder (answer)
      
* 0.4.2 - 19/06/2023
    * Correção de erros no armazenamento de documentos da tela de responder protocolos (answer)
    * Atualização no frontend da tela "create-protocols"
    * Alteração de alguns detalhes de design na página "create-protocols"
    * Finalização da tela "select-usuario"
      
* 0.4.1 - 18/06/2023
    * Adiciona tabela no banco de dados para tratar respostas de checkbox e radio
    * Desenvolvimento de endpoints para tratar as respostas de checkbox e radio
    * Atualização da tela de responder protocolos (answer)
      
* 0.4.0 - 17/06/2023
    * Continuação da integração da tela de responder protocolos (answer)
    * Desenvolvimento do frontend da tela de "create-protocols"

* 0.3.9 - 16/06/2023
    * Alteração de alguns detalhes de design na página "create-protocols"
    * Continuação da integração da tela de responder protocolos (answer)

* 0.3.9 - 14/06/2023
    * Atualização no frontend da tela responder protocolos (answer)
    * Alteração da tela de responder protocolos (answer)
    * Integração da tela de responder protocolos (answer)
    * Atualização na visualização de protocolos da tela de seleção de protocolos (Select_P)

* 0.3.9 - 13/06/2023
    * Atualização e refatoração do código da tela de seleção de protocolos (Select_P)
    * Alteração no frontend da tela de seleção de protocolos (Select_P)
    * Alteração no frontend da tela do agricultor
    * Alteração no frontend da tela de responder protocolos (answer)
    * Alteração no frontend da tela de login (sign in)

* 0.3.8 - 12/06/2023
    * Correção de erros de senha da tela de login (sign in)
    * Correção de erros de senha da tela de login (sign in)
    * Atualização no funcionamento da tela de login (sign in)
    * Adiciona "campo visualizado" na tabela protocolo da tela de selecionar protocolos  (Select_P)
    * Atualização no funcionamento do frontend da tela de selecionar protocolos (Select_P)
      
* 0.3.7 - 08/06/2023
    * Inserção de comentários no frontend da página de cadastro (sign up)
    * Inserção de comentários no frontend da página "create-protocols"
      
* 0.3.6 - 07/06/2023
    * Desenvolvimento e correção do design na página de selecionar protocolos (Select_P)
    * Alteração de alguns detalhes de design e funcionamento da página "create-protocols"
    * Alteração na documentação (WAD)
    * Novas imagens ao WAD
    * Update no readme.md
    * Inserção de comentários na frontend da página de responder protocolos (answer)
    * Remoção da antiga página dos pesquisadores

* 0.3.5 - 06/06/2023
    * Correção de erros de design
    * Implementação da responsividade na página de cadastro
    * Início à nova página dos pesquisadores (create-protocols)
    * Desenvolvimento e correções de erros na página de selecionar protocolos (Select_P)
    * Modificação das tags de botão para âncora no HTML
    * Integração da navegação entre algumas páginas
    * Correção do erro de um botão na página inicial do agricultor
    * Versão em PDF dos WADs adicionada
    * Update no readme.md

* 0.3.4 - 05/06/2023
    * Correção de erros no código de integração da página de login
    * Implementação da responsividade na página de login e na página inicial do agricultor
    * Alteração do design da página do agricultor para manter o mesmo padrão em relação as outras páginas
    * Criação da nova tela de login
    * Novo endpoint e novo script para a página do agricultor
    * Remoção de elementos desnecessários para o cadastro do extrativista (telefone)
    * Tradução de alguns comentários do backend e página de login do português para inglês
    * Integração do backend para a página incial do agricultor

* 0.3.3 - 04/06/2023
    * Integração da página de cadastro
    * Alterações no código backend
    * Correção de erros no código de integração da página de cadastro

* 0.3.2 - 03/06/2023
    * Integração do frontend página de cadastro
    * Adiciona comentários no código JavaScript da página de cadastro
    * Criação da página de responder protocolos

* 0.3.1 - 02/06/2023
    * Integração da página de login
    * Adiciona comentários na tela de login
    * Desenvolvimento da tela inicial do agricultor

* 0.3.0 - 01/06/2023
    * Melhorias no banco de dados
    * Aprimoramente do frontend da tela de login
    
* 0.2.9 - 29/05/2023
    * Arruma todas as vulnerabilidades de injeção de SQL
    * Criação de novos endpoints
    
* 0.2.8 - 26/05/2023
    * Adiciona comentários nas telas restantes
    
* 0.2.7 - 25/05/2023
    * Confecção do Read.me
    * Adiciona imagens na tela do agricultor
    * Adiciona comentários nos códigos da tela de login e agricultor
    * Atualiza código das telas do agricultor e pesquisador
* 0.2.6 - 24/05/2023
    * Confecção e estruturação do frontend e backend das telas do pesquisador
    * Adiciona imagens na tela do pesquisador
    * Adiciona comentários nos códigos da tela de login e agricultor
    * Atualiza código das telas do agricultor e pesquisador
* 0.2.5 - 23/05/2023
    * Confecção do frontend e backend das telas do agricultor
    * Adiciona imagens e ícones nas telas do agricultor
* 0.2.4 - 22/05/2023
    * Alterações no HTML e CSS da tela inicial/login e outras
* 0.2.3 - 21/05/2023
    * Confecção do HTML e CSS da tela inicial 
    * Adiciona imagens de ícones na pasta `Design`
* 0.2.2 - 17/05/2023
    * Adiciona imagens do css e html das principais telas na pasta `Design`
* 0.2.1 - 16/05/2023
    * Adiciona `teste` com contéudo vazio e retira o commit teste
    * Criação da pasta "design" e o lançamento das imagens do design do projeto
    * Alterações na código frontend do projeto
* 0.2.0 - 11/05/2023
    * Alterações e correções na primeira versão do Documento de Aplicação WEB (WAD)
    * Lançamento da segunda versão do Documento de Aplicação WEB (WAD)
    * Alterações no código backend do projeto
    * Alterações no código frontend do projeto
    * Alterações no database do projeto
* 0.1.2 - 09/05/2023
    * Alterações no código backend do projeto
    * Alterações no database do projeto
* 0.1.1 - 07/05/2023
    * Criação da pasta `"Arquivos_Projeto"`
    * Criação da subpasta "backend" e lançamento dos seus primeiros arquivos contendo os primeiros códigos do backend do projeto
    * Criação da subpasta "data" e lançamento de seus primeiros arquivos contendo o banco de dados do projeto
    * Criação da subpasta "frontend" e lançamento de seus primeiros arquivos contendo os primeiros códigos do frontend do projeto
* 0.1.0 - 28/04/2023
    * Lançamento adequado da primeira versão do Documento de Aplicação WEB (WAD)
* 0.0.1 - 14/04/2023
    * Início do repositório 

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M2T7-Inteli/Projeto4">PROTOCOM</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M2T7-Inteli/Projeto4">Inteli, <a href="https://www.linkedin.com/in/diogo-pelaes-a34593279/">Diogo Pelaes Burgierman</a>, <a href="https://www.linkedin.com/in/freddy-mester-harari-375860279">Freddy Mester Harari</a>, <a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/">Isabella Fernandes Saldanha</a>, <a href="https://www.linkedin.com/in/joselitojunior/">Joselito Júnior Motta de Carvalho</a>, <a href="https://www.linkedin.com/in/marco-antonio-rizzi-meneguetti-620b56257/">Marco Antonio Rizzi Meneguetti</a>, <a href="https://www.linkedin.com/in/ricardo-novaes-24276b271/">Ricardo Baumgart Magalhães de Novaes</a>, <a href="https://www.linkedin.com/in/vitoria-novaes/">Vitoria Novaes Xavier</a></a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
