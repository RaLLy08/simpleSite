import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { useWindowResize } from '../../hooks';

const useStyles = makeStyles({
    canvas: {
        // height: '100%',
        // width: '100%',
        position: 'absolute',
        backgroundColor: '#000',
        backgroundImage: "radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent), radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)"
    }
});

const Space = props => {
    const classes = useStyles();
    const canvasRef = React.createRef(null);
    const [width, height] = useWindowResize();

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas && canvas.getContext('2d');
        
        if (canvas) {
            const STAR_COUNT = (width + height) / 8;
            const STAR_SIZE = 3;
            const SCALE = window.devicePixelRatio || 1; // device pixel scale
            const STAR_MIN_RADIUS = 0.2
            const OVERFLOW_THRESHOLD = 50;
            const velocity = { x: 0, y: 0, z: 0.0005 }; // , tx: 0, ty: 0
            const mousePosition = { x: 0, y: 0}

            const stars = [];

            // const onMouseMove = (event) => {
            //     // movePointer(event.clientX, event.clientY);
            // }

            // canvas.onmousemove = onMouseMove;
            // canvas.ontouchmove = onTouchMove;
            // canvas.ontouchend = onMouseLeave;
            // document.onmouseleave = onMouseLeave;
        
            canvasRef.current.width = width;
            canvasRef.current.height = height;


            const generate = () => {
                for (var i = 0; i < STAR_COUNT; i++) {
                    stars.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        z: STAR_MIN_RADIUS + Math.random() * (1 - STAR_MIN_RADIUS) });
                    }
            }

            const render = () => {

                stars.forEach((star) => {
            
                    ctx.beginPath();
                    ctx.lineCap = 'round';
                    ctx.lineWidth = STAR_SIZE * star.z;
                    ctx.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.5 * Math.random()) + ')';
                
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                
                    // var tailX = velocity.x * 2,
                    // tailY = velocity.y * 2;
                
                    // if (Math.abs(tailX) < 0.1) tailX = 0.5;
                    // if (Math.abs(tailY) < 0.1) tailY = 0.5;
                
                    // ctx.lineTo(star.x + tailX, star.y + tailY);
                    ctx.lineTo(star.x, star.y);
                
                    ctx.stroke();
                
                });
            
            }

            const recycleStar = (star) => {
                star.x = Math.random() * width,
                star.y = Math.random() * height,
                star.z = 0 // ?
            }

            const update = () => {
                // velocity.tx *= 0.96;
                // velocity.ty *= 0.96;
            
                // velocity.x += (velocity.tx - velocity.x) * 0.8;
                // velocity.y += (velocity.ty - velocity.y) * 0.8;
                // console.log(velocity)

                stars.forEach((star) => {
                
                    star.x += velocity.x * star.z;
                    star.y += velocity.y * star.z;
            
                    star.x += (star.x - width / 2) * velocity.z * star.z;
                    star.y += (star.y - height / 2) * velocity.z * star.z;
                    star.z += velocity.z;
                
                    // recycle when out of bounds
                    if (star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD) {
                        recycleStar(star);
                    }
            
                });
            }

            const frame = () => {

                ctx.clearRect(0, 0, width, height);
            
                update();
                render();
            
                requestAnimationFrame(frame);
            
            }

            generate();
            frame();  
        }
    }, [canvasRef, width, height])



    return (
        <canvas ref={canvasRef} className={classes.canvas}>
           Sorry, <strong>CANVAS</strong> is not supported by your browser!
        </canvas >
    )
};

export default Space;