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
     -  Atenção renomear o arquivo para .env
   
    - Necessario configurar o arquivo .env conforme arquivo de exemplo que encontra-se na raiz do projeto.
   
    - Atenção ao configurar a conexão com banco, pois devido ao teste necessário configurar
    duas url base conforme exemplo que se encontra no arquivo env.exemplo
    
      - Para o banco de dados usar DATABASE_URL 
      - Para teste usar DATABASE_URL_TEST
    
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
     
      Rodar as migrates do teste:
   
        - npx prisma generate --schema ./prisma/schema.test.prisma
      
        - npx prisma migrate dev --schema=./prisma/schema.test.prisma
   
      Rodar o teste:
   
        - npm test 
    
   - :warning: Observações:
    - Testes encontra-se em desenvolvimento, até o momento foi feito alguns teste do banco de dados de Fornecedores referente a camada controller 
</details>

<details>
  <summary>
    <strong>🏦Comandos para rodar o banco de dados </strong>
  </summary><br>

  - No terminal digitar o seguinte comando:
    - `npx prisma generate`
    - `npx prisma migrate dev`
</details>
