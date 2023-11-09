//colocamos uma string vazia para receber o valor digitado no prompt para nome e xp
let nomeDoHeroi = ""
let xp = ""

//colocamos um prompt para a pessoa digitar o nome do herio
nomeDoHeroi = prompt("Qual o nome do seu herói?")

//passamos o prompt na variável e o parseInt para ficar em formato numérico
xp = parseInt(prompt("Digite quanto de XP o herói tem entre 1 e 50000:"))

//optei por utilizar o switch e fiz cada case de acordo com o que foi pedido no projeto
switch (true) {
  case xp <= 1000:
    nomeDoNivel = "Ferro"
    break
  
  case xp >= 1001 && xp <= 2000:
    nomeDoNivel = "Bronze"
    break
  
  case xp >= 2001 && xp <= 5000:
    nomeDoNivel = "Prata"
    break
  
  case xp >= 5001 && xp <= 7000:
    nomeDoNivel = "Ouro"
    break

  case xp >= 7001 && xp <= 8000:
    nomeDoNivel = "Platina"
    break

  case xp >= 8001 && xp <= 9000:
    nomeDoNivel = "Ascendente"
    break

  case xp >= 9001 && xp <= 10000:
    nomeDoNivel = "Imortal"
    break

  case xp >= 10001 && xp <= 50000:
    nomeDoNivel = "Radiante"
    break

  default:
    alert("Não identificado nenhum XP :(")
}

alert("O herói " + nomeDoHeroi + " está no nível de " + nomeDoNivel + "!")