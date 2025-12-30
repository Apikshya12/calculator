const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.getElementById("theme-toggle");
const calculator = document.querySelector(".calculator");

// Button click handling
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
    }
    else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    }
    else if (value === "=") {
      calculate();
    }
    else if (value === "√") {
      display.value = Math.sqrt(display.value);
    }
    else if (value === "x²") {
      display.value = Math.pow(display.value, 2);
    }
    else if (value === "sin") {
      display.value = Math.sin(toRad(display.value)).toFixed(5);
    }
    else if (value === "cos") {
      display.value = Math.cos(toRad(display.value)).toFixed(5);
    }
    else if (value === "tan") {
      display.value = Math.tan(toRad(display.value)).toFixed(5);
    }
    else if (value === "π") {
      display.value += Math.PI.toFixed(5);
    }
    else {
      display.value += value;
    }
  });
});

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Degree to radian
function toRad(deg) {
  return deg * (Math.PI / 180);
}

// Keyboard support
document.addEventListener("keydown", e => {
  if ("0123456789+-*/.%".includes(e.key)) {
    display.value += e.key;
  }
  else if (e.key === "Enter") {
    calculate();
  }
  else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  else if (e.key === "Escape") {
    display.value = "";
  }
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggle.textContent =
    calculator.classList.contains("dark") ? "☀️" : "🌙";
});
