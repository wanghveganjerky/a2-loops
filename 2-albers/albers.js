function squares (n) {

  let width = initialWidth;
  let color = '#0000ff';
  let initialWidth = 100;
      for (let i = 500; i<= width; i++) {
      width = initialWidth * Math.pow(0.75, i);
      console.log(width)
    }

  
    return {
      'width': width,
      'color': color,
    };
  }
console.log(squares(500,2))

export { squares };