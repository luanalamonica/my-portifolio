# React + TypeScript + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, estão disponíveis dois plugins oficiais:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Expansão da Configuração do ESLint

Se você está desenvolvendo uma aplicação para produção, recomendamos atualizar a configuração para habilitar regras de linting cientes de tipo:

1. Configure a propriedade `parserOptions` no nível superior da seguinte maneira:

    ```js
    export default {
      // outras regras...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

2. Substitua `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`.
3. Opcionalmente, adicione `plugin:@typescript-eslint/stylistic-type-checked`.
4. Instale [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e adicione `plugin:react/recommended` e `plugin:react/jsx-runtime` à lista de `extends`.

## Melhorias Futuras

Para aprimorar ainda mais este template, considere as seguintes ações:

- **Adicionar mais plugins**: Explore outros plugins do Vite que podem ser úteis para o seu projeto.
- **Configurações de produção**: Adicione configurações específicas para otimização em ambientes de produção.
- **Documentação**: Melhore a documentação para facilitar o entendimento e uso do template.

## Contribuições

Contribuições são bem-vindas! Para ajudar a melhorar este template:

1. Faça um fork deste repositório.
2. Crie uma branch com suas alterações:
    ```bash
    git checkout -b feature/nova-funcionalidade
    ```

3. Envie suas alterações:
    ```bash
    git push origin feature/nova-funcionalidade
    ```

4. Abra um pull request para revisão.

Agradecemos seu interesse em contribuir para o projeto **React + TypeScript + Vite**!
