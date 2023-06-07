# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
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

## 📝 LINK

Clique <a href="http://127.0.0.1:2021/sign_in/sing_in.html">AQUI</a> para ver o projeto funcionando localmente.

## 📁 Estrutura de pastas

```
|--> documentos<br>
  &emsp;| --> outros<br>
  &emsp;| T7_G4_V1_Web_application_document.docx<br>
  &emsp;| T7_G4_V1_Web_application_document.pdf<br>
  &emsp;| T7_G4_V2_Web_application_document.docx<br>
  &emsp;| T7_G4_V2_Web_application_document.pdf<br>
  &emsp;| T7_G4_V3_Web_application_document.docx<br>
  &emsp;| T7_G4_V3_Web_application_document.pdf<br>
  &emsp;| T7_G4_V4_Web_application_document.docx<br>
  &emsp;| T7_G4_V4_Web_application_document.pdf<br>
|--> imagens<br>
|--> src<br>
  &emsp;|--> Backend<br>
  &emsp;|--> Data<br>
  &emsp;|--> Frontend<br>
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
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm start
```
5. Agora você pode acessar a aplicação através do link http://localhost:1234/
6. O servidor está online.

## 🗃 Histórico de lançamentos

* 0.2.1 - 25/01/2022
    * Atualização de documentos (código do módulo permanece inalterado).
* 0.2.0 - 15/01/2022
    * Remove `setDefaultXYZ()`
    * Adiciona `init()`
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

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Spidus/Teste_Final_1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">Inteli, Diogo Pelaes Burgierman, Freddy Mester Harari, Isabella Fernandes Saldanha, Joselito Júnior Motta de Carvalho, Marco Antonio Rizzi Meneguetti, Ricardo Baumgart Magalhães de Novaes, Vitoria Novaes Xavier</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
