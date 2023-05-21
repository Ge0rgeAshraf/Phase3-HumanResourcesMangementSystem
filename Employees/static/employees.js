function search_data() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("data");
  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else x[i].style.display = "table-row";
  }
}

window.onload = function show_rows() {
  let data = window.localStorage.getItem("dataArray");
  let mydata = JSON.parse(data);
  let html = "";
  var id=0;
  mydata.forEach((counter) => {
    let approved=20-counter.Avaliable_vacation;
    html += `<tr class="data">
            <td>${id}</td>
            <td>${counter.name}</td>
            <td>${counter.address}</td>
            <td>${counter.phone}</td>
            <td>${counter.gender}</td>
            <td>${counter.martial_status}</td>
            <td>${counter.Avaliable_vacation}</td>
            <td>${approved}</td>
            <td>${counter.salary}</td>
            <td>${counter.birthday}</td>
            <td>
            <a href="edit-employee.html">Edit</a>
            <a href="vaction-form.html">Submit Vacation</a>
            </td>
            </tr>`;
    document.getElementsByTagName("tbody")[0].innerHTML = html;
    id=id+1;
  });

  console.log(mydata.value);
};
