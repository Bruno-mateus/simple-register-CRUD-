# Desafio MOCX
- [x]  Front end:
- [x]  Tela Principal formulário para cadastro de uma pessoas com os seguintes dados: Nome, CPF e data de nascimento; Ao cadastrar deve-se apresentar uma mensagem informando se o cadastro foi realizado com sucesso ou se houve algum erro.
- [x]  Tela de visualização das pessoas cadastradas, esta tela deve conter as seguintes funções: delete do registro e update somente do nome e data de nascimento; Ao excluir ou editar deve apresentar uma mensagem informado se foi alterado/excluido com sucesso ou se houve algum erro.
- [x]  Back end:
- [x]  Cadastro de pessoas: Não pode inserir uma pessoa sem CPF, deve-se fazer um calculo para validar se o CPF é válido (para descobrir a formula pesquise por CÁLCULO DE CPF no google), não pode inserir dois CPFs iguais; Caso já tenha algum CPF igual na base de dados, deve devolver uma mensagem pro front informando que já existe este CPF no banco. Quando o CPF for inválido, devolver a mensagem pro front dizendo o mesmo.

## Como utilizar

- Faça um clone do projeto

#### backend
- no console: npm i
- Obs: Sera nessario ter um cadastro no MongoDB Atlas e após o cadastro criar uma collection e após isso:
-ir em connect > connect using vscod > copiar o código.
Na pasta raiz do backend criar um arquivo chamdo .env (o prisma utilza para conectar a variavel ambiente),
e nesse arquivo criar variavel DATABASE_URL e colar o código copiado e colocar a senha escolhida na hora da criação do collection
ex:
![image](https://user-images.githubusercontent.com/63961258/213002886-f81c4a75-e0d7-4453-9016-9b0ad94b0b03.png)




ou voce podera usar o banco de sua preferencia desde que seje suportado pelo Prisma, bem facil a integração link: https://www.prisma.io/docs/getting-started/quickstart.

- no console: 
npx prisma generate 
npm run dev (subindo servidor locahost)
npx prisma studio (ver a tabela do banco de dados)


#### front end
npm i
npm run dev (subindo servidor locahost)

tudo certo para testar a aplicação

### Tecnologias utilizadas
- React
- Node
- Prisma
- MongoDB
- Axios
- Stitches
- Express
- Date-fns

## Imagens:

![image](https://user-images.githubusercontent.com/63961258/213003961-271072e4-a6fd-406b-af6b-b76bf0ca54ee.png)

![image](https://user-images.githubusercontent.com/63961258/213004401-5538612e-9956-4336-b9b9-a66e9b8da1e2.png)

![image](https://user-images.githubusercontent.com/63961258/213004504-8a24e214-764e-4cc3-b8f6-6cf5e82f1c69.png)


