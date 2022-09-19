function rectangle(width, height, color) {
  let colorCh = color[0];
  color = color.replace(colorCh, '');
  colorCh = colorCh.toUpperCase();
  let newColor = colorCh + color;
  let obj = {
    width: width,
    height: height,
    color: newColor,
    calcArea() {
      let area = obj.width * obj.height;
      return area;
    }
  }
  return obj;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());