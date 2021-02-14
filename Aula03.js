let nome = prompt("Nome:", "Digite o seu nome");
let sobreNome = prompt("Sobrenome:", "Digite o seu sobrenome");
let idade = Number(prompt("Idade:", "Só números"));

console.log("Bemvindo " + nome + "!");
console.log("Sua idade é " + String(idade) + " anos.");
console.log("Seus dados:")
console.table(
    {
        primeironome: nome,
        segundoNome: sobreNome,
        nomeCompleto: nome + " " + sobreNome,
        idade: idade + " anos"
});
