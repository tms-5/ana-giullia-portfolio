# Ana Giullia Calado Portfolio

Portfolio bilingue de Ana Giullia Calado, com duas experiencias principais:

- `/odonto`: pagina focada em odontologia.
- `/tech`: pagina focada em dados, BI e tecnologia em saude.

O projeto usa Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## Como Rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

- `dev`: inicia o servidor local do Next.
- `lint`: roda ESLint.
- `build`: gera a build de producao.
- `start`: serve a build gerada.

## Estrutura

```text
src/
  app/
    odonto/page.tsx
    tech/page.tsx
    layout.tsx
  components/
    commons/
      icons/
      layout/
      ui/
    odonto/
      hero/
      about/
      experience/
      projects/
      courses/
      contact/
    tech/
      hero/
      about/
      projects/
      experience/
      courses/
      contact/
  content/
    odonto.ts
    tech.ts
  data/
  lib/
```

## Conteudo

Os textos editaveis ficam fora dos componentes:

- `src/content/odonto.ts`: textos, experiencias, projetos, cursos e registro profissional da pagina de odonto.
- `src/content/tech.ts`: textos, projetos, experiencias, formacao, idiomas, competencias e cursos da pagina tech.

Os componentes devem ficar focados em renderizar UI. Quando precisar alterar copy, listas, formacoes ou cursos, prefira editar `src/content`.

## Componentes

- `src/components/commons`: componentes compartilhados, como header, footer, botoes, cards, layout e icones.
- `src/components/odonto`: secoes exclusivas da pagina de odonto.
- `src/components/tech`: secoes exclusivas da pagina tech.

## Contatos

Links de email, LinkedIn e Instagram ficam em:

```text
src/lib/contact.ts
```

O footer mostra as mesmas informacoes nas duas paginas.

## Validacao

Antes de finalizar alteracoes, rode:

```bash
npm run lint
npm run build
```
