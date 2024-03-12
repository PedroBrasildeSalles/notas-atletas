let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

atletas.forEach(function(atletas) {
  let notasordenadas = atletas.notas.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  })
  let notasordenadasvalidas = notasordenadas.slice(1,-1)
  let somaDasNotas = 0
  for (let i = 0; i < notasordenadasvalidas.length; i++) {
  somaDasNotas += notasordenadasvalidas[i];
}
  let medias = somaDasNotas / notasordenadasvalidas.length;
return console.log(`Atleta:  ${atletas.nome}
Notas Obtidas: ${atletas.notas}
Media válida: ${medias}`)
})

