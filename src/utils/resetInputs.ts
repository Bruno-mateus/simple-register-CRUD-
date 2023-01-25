export function handleResetInputs() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
   
  };