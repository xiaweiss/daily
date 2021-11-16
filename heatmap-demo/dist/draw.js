// https://juejin.im/post/5be28aebe51d4577f246670a

class HeatMap {
  constructor(config) {
    this.data = []
    this.canvas = this.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.initConfig({
      gradient: {
          0.3: "blue",
          0.5: "lime",
          0.7: "yellow",
          1: "red"
      },
      min: 0,
      max: 100,
      radius: 40,
      width: 400,
      height: 400,
      ...config
    })
  }

  initConfig(config) {
      if(!config.container) {
          throw Error('no container');
      }
      this.config = config;
      const {width, height} = this.config;
      this.canvas.width = width;
      this.canvas.height = height;
      this.config.container.appendChild(this.canvas);
  }

  initData(data) {
      this.data = data;
      this.render();
  }

  render() {
      this.renderAlpha();
      this.putColor()
  }

  // 绘制alpha通道的圆
  renderAlpha(){
      const shadowCanvas = this.createShadowTpl();
      const {min, max} = this.config;
      for(let point of this.data) {
          const alpha = (point.value - min) / (max - min);
          this.ctx.globalAlpha = alpha;
          this.ctx.drawImage(shadowCanvas, point.x, point.y);
      }
  }

  // 为alpha通道的圆着色
  putColor() {
      const colorData = this.createColordata();
      console.log('colorData', colorData)
      const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const {data} = imgData

      console.log(data)
      // 0 ~ 255

      for(let i = 0; i < data.length; i++) {
          const value = data[i];
          if(value) {
              data[i - 3] = colorData[4 * value];
              data[i - 2] = colorData[4 * value + 1];
              data[i - 1] = colorData[4 * value + 2];
          }
      }
      this.ctx.putImageData(imgData, 0, 0);
  }

  createCanvas(){
      return document.createElement('canvas')
  }

  createColordata(){
      const cCanvas = this.createCanvas();
      this.config.container.appendChild(cCanvas)
      const cCtx = cCanvas.getContext('2d');
      cCanvas.width = 256;
      cCanvas.height = 1;
      const tuple =
          [0, 0, cCanvas.width, cCanvas.height]

      const grd = cCtx.createLinearGradient(...tuple);
      const {gradient} = this.config;
      for(let key in gradient) {
          grd.addColorStop(parseFloat(key), gradient[key]);
      }
      cCtx.fillStyle = grd;
      cCtx.fillRect(0, 0, cCanvas.width, cCanvas.height);
      return cCtx.getImageData(...tuple).data;
  }

  /**
   * 离屏canvas绘制一个黑色（rgb都是0，方便处理）的alpha通道的圆
   */
  createShadowTpl() {
      const tCanvas = this.createCanvas();
      const tCtx = tCanvas.getContext('2d');
      const blur = 0;
      const radius = this.config.radius;
      tCanvas.width = 2 * radius;
      tCanvas.height = 2 * radius;
      const grd = tCtx.createRadialGradient(radius, radius, blur, radius, radius, radius);
      grd.addColorStop(0, 'rgba(0,0,0,1)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      tCtx.fillStyle = grd;
      tCtx.fillRect(0, 0, 2 * radius, 2 * radius);
      return tCanvas;
  }
}

const heatmap = new HeatMap({
  container: document.body
});

const data = [];

for(var i = 0; i < 100; i++) {
  data.push({
      x: Math.random() * 400,
      y : Math.random() * 400,
      value: Math.random() * 100
  })
}

heatmap.initData(data);
