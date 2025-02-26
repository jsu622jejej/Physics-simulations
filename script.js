const canvas = document.getElementById('simulationCanvas');
     const ctx = canvas.getContext('2d');
     canvas.width = 800;
     canvas.height = 400;

     let angle = 45; // Launch angle in degrees
     let velocity = 50; // Initial velocity
     let gravity = 9.8; // Gravity
     let time = 0;
     let interval;

     function drawProjectile() {
         const radians = angle * (Math.PI / 180);
         const x = velocity * Math.cos(radians) * time;
         const y = canvas.height - (velocity * Math.sin(radians) * time - 0.5 * gravity * time * time);

         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.beginPath();
         ctx.arc(x, y, 10, 0, Math.PI * 2);
         ctx.fillStyle = '#e74c3c';
         ctx.fill();
         ctx.closePath();

         if (y > canvas.height) {
             clearInterval(interval);
         }
         time += 0.1;
     }

     function startSimulation() {
         time = 0;
         interval = setInterval(drawProjectile, 50);
     }

     startSimulation();
