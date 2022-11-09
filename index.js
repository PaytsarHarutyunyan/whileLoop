let line = "*";

while (line.length < 10) {
    console.log(line);        // *-երով ուղղանկյուն եռանկյուն 
    line += "*"
}



let i = 23;

while (i <= 87) {
    console.log(i);    // 23-ից մինչև 87 թվերը
    i ++
} 



let x = 1, a = 2, b = 12;

while (b--) {
    x*= a;
}

console.log(x); // 4096 (2 թվի 12 աստիճանը)