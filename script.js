fetch('data.json')
  .then(res => res.json())
  .then(data => {

    const tableBody = document.querySelector("#dataTable tbody");

    data.forEach(item => {
      const row = `
        <tr>
          <td>
            <a href="detail.html?plant=${encodeURIComponent(item.plant)}">
              ${item.plant}
            </a>
          </td>
          <td>${item.part}</td>
          <td>
            <a href="detail.html?id=${item.id}">
              ${item.id}
            </a>
          </td>
          <td>${item.name}</td>
          <td>${item.reference}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

    const table = $('#dataTable').DataTable({
      pageLength: 10
    });

    // search box
    document.getElementById("searchBox").addEventListener("keyup", function () {
      table.search(this.value).draw();
    });

  });
