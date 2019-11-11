import React, {Component} from 'react'

class CanvasComponent extends Component {

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');
        const canvas = document.querySelector('canvas');
        this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        let innerWidth = window.innerWidth
        let innerHeight = window.innerHeight
        const mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        }

        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        })

        window.addEventListener('resize', () => {
            canvas.width = innerWidth
            canvas.height = innerHeight
        })

        const randColorGen = colors => {
            return colors[Math.floor(Math.random() * colors.length)]
        }

        const randomIntFromRange = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.05;
            this.distanceFromCenter = randomIntFromRange(50, 20)
            this.lastMouse = {
                x: x,
                y: y
            }


            this.draw = lastPoint => {
                c.beginPath()
                c.strokeStyle = this.color
                c.lineWidth = this.radius
                c.moveTo(lastPoint.x, lastPoint.y)
                c.lineTo(this.x, this.y)
                c.stroke()
                c.closePath()
            }


            this.update = () => {
                
                // Getting the last point to draw the line in the draw function
                const lastPoint = { x: this.x, y: this.y }
                
                // Move points over time
                this.radians += this.velocity

                // Drag Effect
                this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.08
                this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.08

                // Circular Motion
                this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
                this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
                this.draw(lastPoint)
                }
            }


            // Particles Generator
            let particles;
            const init = () => {
                particles = [];
                for (let i = 0; i < 400; i++) {
                    const radius = (Math.random() * 5) + 1
                    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randColorGen(this.colors)))
                }
                console.log(particles)
            }

            const animate = () => {
                requestAnimationFrame(animate)
                c.fillStyle = 'rgba(255, 255, 255, 0.08)'
                c.fillRect(0, 0, canvas.width, canvas.height)
                particles.forEach(particle => {
                particle.update()
            })
        }
        init()
        animate()
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight}/>
            </div>
        );
    }
}

export default CanvasComponent
