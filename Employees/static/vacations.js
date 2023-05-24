window.onload = function show_rows() {
    let data = window.localStorage.getItem("Vacation");
    let dataEmployee = window.localStorage.getItem("Employee");
    let EmpData = JSON.parse(dataEmployee);
    let mydata = JSON.parse(data);
    let html = "";
    mydata.forEach((vac) => {
        let theID = "status" + vac.id;
        let employeeName = "";
        EmpData.forEach((emp) => {
            if (emp.id === vac.employee_id) {
                employeeName = emp.name;
            }
        });
        if (vac.status === "submitted") {
            html += `<tr class="data">
                        <td>${vac.id}</td>
                        <td>${employeeName}</td>
                        <td>${vac.from_date}</td>
                        <td>${vac.to_date}</td>
                        <td>${vac.reason}</td>
                        <td>${vac.status}</td>
                        <td>
                            <div class="btn-group">
                                <button type="button" onclick="approve(${vac.id})">Approve</button>
                            </div>
                            <div class="btn-group2">
                                <button type="button" onclick="decline(${vac.id})">Decline</button>
                            </div>
                        </td>
                    </tr>`;
        } else {
            html += `<tr class="data">
                        <td>${vac.id}</td>
                        <td>${employeeName}</td>
                        <td>${vac.from_date}</td>
                        <td>${vac.to_date}</td>
                        <td>${vac.reason}</td>
                        <td>${vac.status}</td>
                        <td></td>
                    </tr>`;
        }
    });
    document.getElementsByTagName("tbody")[0].innerHTML = html;
};

function approve(id) {
    let data = window.localStorage.getItem("Vacation");
    let mydata = JSON.parse(data);
    mydata.forEach((vac) => {
        if (vac.id === id) {
            vac.status = "approved";
        }
    });
    localStorage.setItem("Vacation", JSON.stringify(mydata));
    document.location.reload();
}

function decline(id) {
    let data = window.localStorage.getItem("Vacation");
    let mydata = JSON.parse(data);
    mydata.forEach((vac) => {
        if (vac.id === id) {
            vac.status = "declined";
        }
    });
    localStorage.setItem("Vacation", JSON.stringify(mydata));
    document.location.reload();
}
