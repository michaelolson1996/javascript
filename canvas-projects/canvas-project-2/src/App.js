import React, { Component } from 'react';
import './star-shower.css'

class App extends Component {

  componentDidMount() {
    this.updateCanvas();
  };

  updateCanvas = () => {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const colors = ['red', 'orange', 'yellow', 'green'];

    window.addEventListener('resize', event => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
    });

    const randomIntFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomColorGenerator = (colors) => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const distance = (x1, y1, x2, y2) => {
      const xDist = x2 - x1;
      const yDist = y2 - y1;
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };

    // Object Constructor
    function Star(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.gravity = 1;
      this.friction = 0.8;
      this.velocity = {
        x: (Math.random() - 0.5) * 18,
        y: 3
      };
    };

    Star.prototype.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    };

    Star.prototype.update = function() {
      this.draw();

      // When star hits bottom of screen
      if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        this.velocity.y = -this.velocity.y * this.friction;
        this.shatter();
      } else {
        this.velocity.y += this.gravity;
      };

      if (this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x
        this.shatter()
      }

      this.x += this.velocity.x
      this.y += this.velocity.y;
    };


    Star.prototype.shatter = function() {
      this.radius -= 3;
      for (let i = 0; i < 8; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 2));
      };
    };


    // Mini stars created when star hits bottom/side of screen
    function MiniStar(x, y, radius, color) {
      Star.call(this, x, y, radius, color);
      this.gravity = 0.1;
      this.friction = 0.8;
      this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
      };
      // TTL = Time to live
      this.ttl = 100;
      this.opacity = 1;
    };

    MiniStar.prototype.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      c.fill();
      c.closePath();
    };

    MiniStar.prototype.update = function() {
      this.draw();

      // When star hits bottom of screen
      if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      };
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
    };


    const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, '#171e26');
    backgroundGradient.addColorStop(1, '#3f586b');
    let stars;
    let miniStars;
    let ticker = 0;
    let randomSpawnRate = 75
    const groundHeight = 100
    const init = () => {
      stars = [];
      miniStars = [];
      // for(let i = 0; i < 1; i++) {
      //   stars.push(new Star(canvas.width / 2, 30, 30, 'blue'));
      // };
    };

    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = backgroundGradient
      c.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.update();
        if (star.radius === 0) {
          stars.splice(index, 1);
        };
      });

      // const groundHeight = 30px;

      c.fillStyle = 'black'
      c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)

      miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if (miniStar.ttl == 0) {
          miniStars.splice(index, 1);
        };
      });
      ticker++;

      if (ticker % randomSpawnRate === 0) {
        const radius = 12
        const x = Math.max(radius, Math.random() * canvas.width - radius);
        stars.push(new Star(x, -100, radius, 'white'));
        randomSpawnRate = randomIntFromRange(75, 100);
      };

    };
    init();
    animate();
  };


  render() {
    return <canvas id = 'canvas'></canvas>
  };
};

export default App;
