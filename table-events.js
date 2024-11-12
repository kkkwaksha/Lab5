document.addEventListener("DOMContentLoaded", function () {
  const variantNumber = 8;
  const table = document.getElementById("colorTable");
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.style.display = "none";
  document.body.appendChild(colorPicker);

  let cells = [];
  let rows = 6;
  let cols = 6;
  let cellIndex = 1;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.textContent = cellIndex;
      cell.dataset.index = cellIndex;
      row.appendChild(cell);
      cells.push(cell);
      cellIndex++;
    }
    table.appendChild(row);
  }

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const variantCell = cells[variantNumber - 1];
  variantCell.addEventListener("mouseover", () => {
    variantCell.style.backgroundColor = getRandomColor();
  });

  variantCell.addEventListener("click", () => {
    colorPicker.click();
    colorPicker.oninput = function () {
      variantCell.style.backgroundColor = colorPicker.value;
    };
  });

  variantCell.addEventListener("dblclick", () => {
    const randomColor = getRandomColor();
    const columnIndex = Array.from(variantCell.parentNode.children).indexOf(
      variantCell
    );

    for (let i = 0; i < rows; i++) {
      for (let j = columnIndex; j < cols; j += 2) {
        table.rows[i].cells[j].style.backgroundColor = randomColor;
      }
    }
  });
});
