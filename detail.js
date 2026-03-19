
const params = new URLSearchParams(window.location.search);
const plant = params.get("plant");
const id = params.get("id");

fetch('data.json')
  .then(res => res.json())
  .then(data => {

    let result;

    if (id) {
      result = data.find(d => d.id === id);
    } else if (plant) {
      result = data.find(d => d.plant === plant);
    }

    const container = document.getElementById("details");

    if (result) {
      container.innerHTML = `
        <p><b>Plant:</b> ${result.plant}</p>
        <p><b>Part:</b> ${result.part}</p>
        <p><b>ID:</b> ${result.id}</p>
        <p><b>Name:</b> ${result.name}</p>
        <p><b>Reference:</b> ${result.reference}</p>
      `;
    } else {
      container.innerHTML = "No data found";
    }

  });
