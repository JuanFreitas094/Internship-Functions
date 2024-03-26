function simularInterruptores() {
  
  let interruptores = [false, false, false];

  interruptores[0] = true;
  interruptores[1] = true;

  for (let i = 0; i < interruptores.length; i++) {
      if (interruptores[i]) {
          console.log("A lâmpada " + (i + 1) + " está acesa. O interruptor " + (i + 1) + " controla esta lâmpada.");
      } else {
          console.log("A lâmpada " + (i + 1) + " está apagada e fria ao toque. O interruptor " + (i + 1) + " controla esta lâmpada.");
      }
  }
}

simularInterruptores();
