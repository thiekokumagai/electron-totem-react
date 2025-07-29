Totem Inovvati - React + Electron + TypeScript
Projeto simples e limpo de um app desktop com React, Electron e TypeScript, que permite:

Escolher temas dinâmicos (Detran, Inovvati, Sefaz)

Aplicar menus específicos e cores por tema

Alternar entre modo claro e escuro

Navegação entre tela inicial e menu com React Router

🚀 Como rodar o projeto localmente
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seuusuario/totem-inovvati.git
cd totem-inovvati
2. Instale as dependências
bash
Copiar
Editar
npm install
3. Rodar React e Electron em desenvolvimento
bash
Copiar
Editar
npm run dev
Isso inicia o React na porta 3000 e abre o app Electron apontando para ele automaticamente.

🧱 Scripts disponíveis
Script	Descrição
npm start	Roda apenas o servidor React (React Scripts)
npm run electron	Abre o app Electron (necessita React rodando)
npm run dev	Roda React e Electron simultaneamente (desenvolvimento)
npm run build	Gera build de produção do React

📦 Funcionalidades
Escolha de tema: Tela inicial para escolher entre detran, inovvati e sefaz

Menu dinâmico: Cada tema carrega seu menu e cores específicos

Dark mode: Alterna entre modo claro e escuro mantendo identidade visual do tema

Navegação SPA: Com React Router para tela inicial e menu

📋 Tecnologias utilizadas
React 18 + TypeScript

React Router DOM

Electron (app desktop)

Context API para gerenciar tema e menu

Scripts via NPM e ferramentas comuns