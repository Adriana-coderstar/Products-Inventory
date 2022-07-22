## Products-Inventory!!

Projeto pessoal Back-end criado para desenvolver CRUD de estoque. 

O aplicativo compõe:

- Criação de produtos no estoque e dos fornecedores
- A busca de todos produtos cadastrados e de todos os fornecedores
- Atualização dos produtos e das empresas cadastradas
- A possibilidade de remover um determinado produto ou um fornecedor cadastrado


<details>
  <summary>
    <strong> :rocket: Tecnologias utilizadas:</strong>
  </summary><br>
  
- Nodejs
- MySql
- Prisma
- Express
- Jest
</details>

<details>
  <summary>
    <strong> Variável de ambiente .env</strong>
  </summary><br>
  
    - Arquivo encontra-se na base do projeto com nome env.exemplo
   
    - Necessario configurar o arquivo .env conforme arquivo de exemplo que encontra-se na raiz do projeto.
   
    - Atenção ao configurar a conexão com banco, pois devido ao teste necessário configurar
    duas url base conforme exemplo que se encontra no arquivo env.exemplo
    
      - para o banco de dados DATABASE_URL 
      - para teste DATABASE_URL_TEST
    
      - Exemplo para configurar a porta da aplicação:
      - PORT=3001
    
</details>

<details>
  <summary>
    <strong>🪛 Scripts <code>package.json</code> principal</strong>
  </summary><br>

  - Instalar dependencias do projeto com o seguinte comando:
    - `npm install`
    
  - Rodar a aplicação usar o comando abaixo:
    - `npm start`
</details>

<details>
  <summary>
    <strong>🛠 Testes - Comandos para testar aplicação</strong>
  </summary><br>
    - npm test 
    
   - :warning: Observações:
   - Testes encontra-se em desenvolvimento, até o momento foi feito alguns teste do banco de dados de Fornecedores referente a camada controller 
</details>
