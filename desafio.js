let playlist = ["Dua Lipa - Dance The Night", " The Weekend - Blinding Lights"];

//Adicionando duas músicas ao finl da playlist
playlist.push("Rich Amiri - One Call","Don Toliver - Tore UP");

console.log(playlist);
// Removendo a ultima música da playlist
let removido = playlist.pop();
console.log(removido);
// Mostrando na tela os itens
playlist.forEach((playlist,index) => {
  console.log(`${(index + 1)}.${playlist} `);
});