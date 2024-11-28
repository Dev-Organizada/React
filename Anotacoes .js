-- React é uma biblioteca JavaScript para desenvolvimento de aplicações front-end
-- O Node.js é uma runtime de JavaScript, ou seja, uma biblioteca utilizada por um compilador
-- npm é um gerenciador de pacotes do Node.
-- npx é um executor de scripts
 
//Comandos
Criação de uma nova aplicação -- npm create vite@latest
Iniciar a aplicação -- npm run dev
 
-- Repositorio do curso: https://github.com/matheusbattisti/curso_react

//Hooks
-- Recursos do react q tem diversas funções, como guardar e alterar o estado de algum dado, por exemplo.
-- Todos os Hooks começam com use, por exemplo: useState
-- Pode-se criar um Hooks, isso é chamado de custom Hook
-- Precisam ser importados

-- o Hook mais usado é o useState, serve para gerenciar o estado de algum dado
-- Para guardar dado é preciso definir o nome da variavel e para alterar, utiliza setNome

//Propriedade keys
-- o react precisa de uma chave unica em cada item iterado
-- Isso serve para ajuda-lo na renderização do componente

//Previous state
-- É um recurso q permite pegar o dado em seu valor original dentro do set
-- É muito utilizado para modificar listas

//Estrutura do IF e Else 
{variavel === condição ? (se for verdadeiro) : (se for falso)}

ex:
{name === "Joao" ? ( //if
        <div>
          <p>O Nome é Joao</p>
        </div>
      ) : ( //else
        <div>
          <p>Não nao encontrado!</p>
        </div>
      )}
	  
//Props
-- Permite passar valores de um componente pai para um componente filho	  
-- Muito util no carregamento via banco de dados
-- Elas vem em um obj no argumento da função do componente