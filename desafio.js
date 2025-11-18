let playlist = ["Dua Lipa - Dance The Night", " The Weekend - Blinding Lights"];

playlist.push("Rich Amiri - One Call","Don Toliver - Tore UP");

console.log(playlist);

let removido = playlist.pop();

playlist.forEach((playlist,index) => {
  console.log(`${(index + 1)}.${playlist} `);
});