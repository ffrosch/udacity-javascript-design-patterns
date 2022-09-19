model = {
    header: [
        "Student Name", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Days Missed-col"
    ],
    data: {
        "Slappy the Frog": [true, true, false, true, false, false, false, false, false, false, true, false],
        "Lilly the Lizard": [false, true, false, true, true, false, true, true, true, true, false, true],
        "Paulrus the Walrus": [false, true, false, true, false, false, true, false, true, false, true, false],
        "Gregory the Goat": [true, false, false, false, false, true, false, true, false, false, true, false],
        "Adam the Anaconda": [true, false, false, false, false, true, true, true, true, true, true, true]
    }
};

controller = {

    init: function () {
        view.init(model.header, model.data);
    },

    calculateMissedDays: studentName => {
        return model.data[studentName].filter(value => value === false).length;
    },

    updateAttendanceStatus: function (studentName, idx) {
        model.data[studentName][idx] = !model.data[studentName][idx];

        missedDays = this.calculateMissedDays(studentName);

        view.render(studentName, missedDays);
    },
};

view = {
    init: function (headerData, bodyData) {
        // Initialize object variables
        this.tableElem = document.getElementById("student-table");
        this.tableHeader = document.getElementsByTagName("thead")[0];
        this.tableBody = document.getElementsByTagName("tbody")[0];

        // Fill object variables with data
        this.createHeader(headerData);
        this.createRows(bodyData);
    },

    createHeader: function (headerData) {

        // create table header row
        const row = this.tableHeader.insertRow();
        row.classList.add("header");

        // iterate over header cell names
        headerData.forEach((columnName, idx, array) => {

            // create new header column with elemnt type "table header"
            const th = document.createElement("th");
            th.innerText = columnName;

            // add class attribute to cell
            if (idx === 0) {
                th.classList.add("student-name");
            } else if (idx === array.length - 1) {
                th.classList.add("missed-col");
            } else {
                th.classList.add("attend-col");
            }

            // add new header column to the table
            row.appendChild(th);
        });
    },

    createRows: function (data) {
        // iterate over attendance array of each student
        Object.keys(data).forEach(name => {

            // for each student insert a new table row
            const tr = this.tableBody.insertRow();
            tr.classList.add("student");
            tr.id = name;

            // first column of the row contains students name
            const nameCol = tr.insertCell();
            nameCol.classList.add("student-name");
            nameCol.innerText = name;

            // fill the attendance columns with the attendance data for the student
            data[name].forEach((attendanceValue, idx) => {

                // initialize column with checkbox
                const td = tr.insertCell();
                const checkbox = document.createElement("input");

                // set column attributes and add column to table
                td.id = idx;
                td.classList.add("attend-col");
                td.appendChild(checkbox);
                checkbox.setAttribute("type", "checkbox");
                checkbox.checked = attendanceValue;

                // Update students' attendance record on click
                checkbox.addEventListener("click", (function (nameCopy, idxCopy) {
                    return () => {
                        controller.updateAttendanceStatus(nameCopy, idxCopy);
                    }
                })(name, idx));

            });

            // add final "Missed Days" column
            // compute values for the column based on the students attendance record
            const missedCol = tr.insertCell();
            missedCol.classList.add("missed-col");
            missedCol.innerText = controller.calculateMissedDays(name);

        });
    },

    render: function (studentName, missedDays) {
        row = document.getElementById(studentName);
        missedCol = row.querySelector(".missed-col");
        missedCol.innerText = missedDays;
    },
}

controller.init();
