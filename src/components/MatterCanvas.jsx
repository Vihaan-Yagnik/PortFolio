import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const MatterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a Matter.js engine with NO gravity
    const engine = Engine.create();
    engine.world.gravity.y = 0; // Set gravity to zero
    const world = engine.world;
    
    // Create a renderer for the canvas
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvas.offsetWidth,
        height: canvas.offsetHeight,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false,
        showCollisions: false,
        showVelocity: false
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create walls to contain the shapes within the div
    const walls = [
      Bodies.rectangle(canvas.offsetWidth / 2, 0, canvas.offsetWidth, 5, { isStatic: true }), // Top wall
      Bodies.rectangle(canvas.offsetWidth / 2, canvas.offsetHeight, canvas.offsetWidth, 5, { isStatic: true }), // Bottom wall
      Bodies.rectangle(0, canvas.offsetHeight / 2, 5, canvas.offsetHeight, { isStatic: true }), // Left wall
      Bodies.rectangle(canvas.offsetWidth, canvas.offsetHeight / 2, 5, canvas.offsetHeight, { isStatic: true }) // Right wall
    ];
    World.add(world, walls);

    // Create some dynamic shapes
    const shapes = [];
    const colors = ['#a29bfe', '#ff7675', '#81ecec', '#fdcb6e', '#ffeaa7'];

    for (let i = 0; i < 15; i++) {
        const x = Math.random() * (canvas.offsetWidth - 20) + 10;
        const y = Math.random() * (canvas.offsetHeight - 20) + 10;
        const radius = Math.random() * 20 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = Math.random() > 0.5 ? 
          Bodies.circle(x, y, radius, { render: { fillStyle: color } }) : 
          Bodies.rectangle(x, y, radius * 2, radius * 2, { render: { fillStyle: color } });
        shapes.push(shape);
    }
    World.add(world, shapes);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });
    World.add(world, mouseConstraint);

    // Cleanup function
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      World.clear(world, true);
      Runner.stop(runner);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default MatterCanvas;