# 🚀 Gabriel Cannes | Full Stack Developer Portfolio

Este é o repositório do meu portfólio pessoal, desenvolvido com o objetivo de centralizar meus projetos, experiências e habilidades técnicas. O site foi construído focando em **performance**, **interatividade** e **acessibilidade global**.

## 🌐 [Visualize o Projeto Ao Vivo](https://seu-link-da-vercel.app)

---

## ✨ Diferenciais deste Projeto

* **i18n (Internationalization):** Implementação de sistema bilíngue (PT-BR / EN) utilizando **React Context API** para persistência de estado e troca dinâmica de textos sem refresh.
* **Asset Logic:** Lógica inteligente para download de currículos específicos (PDF) baseada no idioma selecionado pelo usuário no momento do clique.
* **UI/UX Moderna:** Interface responsiva com animações fluidas utilizando **Framer Motion** e efeito de escrita dinâmica com **React Type Animation**.
* **Performance:** Desenvolvido com **Next.js (App Router)** para garantir carregamento otimizado, aproveitando componentes de servidor e cliente de forma equilibrada.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14+](https://nextjs.org/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Ícones:** [Heroicons](https://heroicons.com/)

## 📂 Estrutura de Pastas Principal

```text
├── app/                  # Rotas e páginas (App Router)
│   ├── components/       # Componentes modulares (Hero, Navbar, ProjectCard, etc.)
│   ├── constants/        # Dicionários de tradução (PT/EN)
│   └── layout.tsx        # Layout global e fontes
├── context/              # Context API para gerenciamento de idioma (useLanguage)
├── public/               # Ativos estáticos (Imagens, Logos e CVs)
└── tailwind.config.ts    # Configurações de design system e cores personalizadas
```

## 🚀 Como rodar localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/gabrielcannes/seu-repositorio.git](https://github.com/gabrielcannes/seu-repositorio.git)
    ```

2. **Instale as dependências:**
   ```bash
   npm install
    ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
    ```

4. **Acesse o projeto::**
   Abra http://localhost:3000 no seu navegador para ver o resultado.


## 📄 Currículo Dinâmico

O projeto conta com uma lógica inteligente de **Asset Management**. O download do currículo é adaptado automaticamente com base no idioma selecionado na interface, garantindo que o recrutador sempre receba a versão correta:

> **Lógica de Seleção:**
> * 🇬🇧 **Site em Inglês:** Realiza o download do arquivo `cvEN.pdf`.
> * 🇧🇷 **Site em Português:** Realiza o download do arquivo `cvPT.pdf`.

---

## 📫 Contato

Fique à vontade para entrar em contato para oportunidades, parcerias ou apenas para trocar uma ideia sobre tecnologia!

| Canal | Link |
| :--- | :--- |
| 💼 **LinkedIn** | [Gabriel Coelho Cannes](https://www.linkedin.com/in/gabriel-coelho-cannes-406a84140/) |
| 💻 **GitHub** | [github.com/gabrielcannes](https://github.com/gabrielcannes) |
| 📧 **Email** | [gabrielcannes.gc@gmail.com](mailto:gabrielcannes.gc@gmail.com) |
| 💬 **WhatsApp** | [Entre em contato](https://wa.link/769rm9) |

---

<p align="center">
  Developed with ☕ and <strong>React</strong>
</p>