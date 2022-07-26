const canvas = new fabric.Canvas('canvas');

document.getElementById('inp').onchange = function(e) {
     canvas.clear();

      fabric.Image.fromURL(URL.createObjectURL(this.files[0]), function(oImg) {
        oImg.scaleToWidth(700, false);
        oImg.scaleToHeight(500, false);
        canvas.add(oImg);
  });
  };
  
  canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  })