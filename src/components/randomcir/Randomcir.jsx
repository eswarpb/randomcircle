import React, { useState } from 'react';

function Circle() {
  const [circles, setCircles] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const getRandomValue = (max) => Math.floor(Math.random() * max);
  const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

  const handleClick = () => {
    const randomRadius = getRandomRadius();
    const randomX = getRandomValue(window.innerWidth - randomRadius * 2);
    const randomY = getRandomValue(window.innerHeight - randomRadius * 2);

    const newCircle = {
      x: randomX,
      y: randomY,
      radius: randomRadius,
    };

    const updatedCircles = [...circles, newCircle];

    if (updatedCircles.length > 2) {
      setCircles([]);
      setIsIntersecting(false);
    } else {
      setCircles(updatedCircles);
      checkIntersection(updatedCircles);
    }
  };

  const checkIntersection = (circles) => {
    if (circles.length < 2) {
      setIsIntersecting(false);
      return;
    }

    const [circle1, circle2] = circles;
    const distance = Math.sqrt(
      Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2)
    );

    if (distance < circle1.radius + circle2.radius) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  };

  return (
    <div><h2>Randomcircle</h2>
    <div
      onClick={handleClick}
      style={{
        backgroundColor: isIntersecting ? 'red' : 'white',
        height: '100vh',
        width: '100vw',
        position: 'relative',
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: circle.y,
            left: circle.x,
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: '50%',
            backgroundColor: 'green',
          }}
        ></div>
      ))}
    </div>
    </div>
  );
};

export default Circle;
