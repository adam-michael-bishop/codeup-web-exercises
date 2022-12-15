function drawRectangle(width, height) {
    const char = '*';
    const edge = char.repeat(width);
    console.log(edge);
    for (let i = 0; i < height - 2; i++) {
        let space = ' ';
        console.log(`${char}${space.repeat(width - 2)}${char}`)
    }
    console.log(edge);
}

drawRectangle(3, 5);
drawRectangle(15, 4);