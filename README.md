# IDEIAS PARA USAR A IA EM SALA DE AULA

Plataforma educativa com 20 atividades curriculares práticas, passo a passo detalhado, engenharia de prompts e ferramentas de inteligência artificial com logótipos reais e hiperligações diretas para professores do Ensino Básico e Secundário.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

Este repositório já está 100% configurado para funcionar no GitHub Pages (com caminhos relativos em `vite.config.ts` e workflow automático em `.github/workflows/deploy.yml`).

### Opção 1: Publicação Automática com GitHub Actions (Recomendada)

1. Crie um novo repositório no seu GitHub (ex.: `ideias-ia-sala-de-aula`).
2. Envie todos os ficheiros deste projeto para o seu repositório:
   ```bash
   git init
   git add .
   git commit -m "Publicação inicial do portal de ideias de IA para sala de aula"
   git branch -M main
   git remote add origin https://github.com/SEU_UTILIZADOR/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, abra o seu repositório e vá a **Settings** > **Pages** (no menu lateral esquerdo).
4. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
5. O GitHub executará automaticamente o fluxo de trabalho configurado em `.github/workflows/deploy.yml` e o seu site estará online em poucos segundos no endereço:
   `https://SEU_UTILIZADOR.github.io/SEU_REPOSITORIO/`

---

### Opção 2: Publicação Manual via Pasta `dist`

1. Execute a compilação local:
   ```bash
   npm run build
   ```
2. A pasta `dist` gerada conterá todo o website estático pronto a publicar em qualquer alojamento web (GitHub Pages, Netlify, Vercel, Cloudflare Pages ou servidor escolar).

---

## 🛠️ Comandos de Desenvolvimento

- `npm run dev`: Inicia o servidor local de desenvolvimento na porta 3000.
- `npm run build`: Compila a aplicação otimizada para produção na pasta `dist/`.
- `npm run preview`: Pré-visualiza localmente a versão compilada de produção.
- `npm test`: Executa os testes unitários de lógica pura (`npx tsx --test src/utils/filterActivities.test.ts`).

---

## 📚 Conteúdo Pedagógico Incluído

1. **A IA Desenha o que Eu Imagino** (1.º Ciclo – 1.º Ano)
2. **A IA Adivinha o Animal** (1.º Ciclo)
3. **Criar Sons de um Mundo Imaginário** (1.º Ciclo)
4. **O Arquiteto das Formas Geométricas** (1.º Ciclo – 1.º ou 2.º Ano)
5. **A Fábula Interativa: "E se fosse eu?"** (1.º Ciclo – 3.º ou 4.º Ano)
6. **Transformando Histórias em Arte com IA** (1.º Ciclo – 3.º Ano)
7. **Explorando a História da Terra com Inteligência Artificial** (3.º Ciclo – 7.º Ano)
8. **Estratégias Matemáticas com IA** (1.º e 2.º Ciclos – 4.º e 5.º Anos)
9. **Sólidos Geométricos e Simetria** (2.º Ciclo – 5.º Ano)
10. **Utilização Responsável da IA** (2.º Ciclo – 5.º Ano)
11. **A água está em tudo: ciclo da água** (2.º Ciclo – 5.º e 6.º Anos)
12. **Equações em Ação** (3.º Ciclo – 7.º Ano)
13. **Mudanças Climáticas e Ciclo da Água** (3.º Ciclo – 8.º Ano)
14. **Conversas Iluminadas** (3.º Ciclo – 8.º Ano)
15. **Arte, Criatividade e Tecnologia** (3.º Ciclo – 9.º Ano)
16. **Texto de Jornal: Artigo de Opinião** (3.º Ciclo – 9.º Ano)
17. **Música Educativa com IA** (2.º e 3.º Ciclos – 5.º ao 9.º Ano)
18. **Debate com IA** (3.º Ciclo – 7.º ao 9.º Ano)
19. **Rádio Interativa de Turma com IA** (3.º Ciclo e Secundário – 8.º ao 12.º Ano)
20. **Entrevistas Simuladas (Carreiras e Profissões)** (3.º Ciclo e Secundário – 9.º ao 12.º Ano)
