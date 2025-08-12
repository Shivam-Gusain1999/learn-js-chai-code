 function getRandomHexColor() {
      let nmbr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
      let color = '#';
      for (let i = 0; i < 6; i++) {
        let randomnm = Math.floor(Math.random() * 16);
        color += nmbr[randomnm];
      }
      return color;
    }

    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const body = document.querySelector('body');

    start.style.backgroundColor = "blue";
    start.style.padding = "10px";
    stop.style.backgroundColor = "red";
    stop.style.padding = "10px";

    let shippa; // ✅ interval id stored here

    // ✅ Start color change
    start.addEventListener('click', () => {
      // Prevent multiple intervals
      if (!shippa) {
        shippa = setInterval(() => {
          let realcolor = getRandomHexColor();
          body.style.backgroundColor = realcolor;
        }, 1000);
      }
    });

    // ✅ Stop color change
    stop.addEventListener('click', () => {
      clearInterval(shippa);
      shippa = null;
    });