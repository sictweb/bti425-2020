// Manager.js

// This is the newer style, using the Fetch API
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function personsGetAll() {

    //fetch('https://pam-coursedbintro.herokuapp.com/api/persons')
    fetch('https://pam-2019-a1webapi.herokuapp.com/api/persons')
        .then(response => response.json())
        .then(data => {
            buildTable(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function buildTable(data) {

    // get a reference to the table body
    var t = document.querySelector('#dataTable');

    // add rows...
    for (var i = 0; i < data.length; i++) {

        // add a new row to the end of the table body
        var row = t.insertRow(-1);

        // add the table cells...
        var c0 = row.insertCell(-1);
        var t0 = document.createTextNode(data[i].firstName);
        c0.appendChild(t0);

        var c1 = row.insertCell(-1);
        var t1 = document.createTextNode(data[i].lastName);
        c1.appendChild(t1);

        var c2 = row.insertCell(-1);
        var t2 = document.createTextNode("Details")
        var a2 = document.createElement("a");
        a2.title = "Details";
        a2.href = "details.html?id=" + data[i]._id;
        a2.appendChild(t2);
        c2.appendChild(a2);
        // etc.
    }

}

// extract the identifier from the URL
function getIdFromUrl() {
    // get all name-value pairs from the query string
    let params = (new URL(document.location)).searchParams;
    // get/use the "id" value
    let id = params.get("id");
    personsGetById(id);
}

function personsGetById(id) {

    fetch(`https://pam-coursedbintro.herokuapp.com/api/persons/${id}`)
        .then(function (response) {

            if (response.ok) {
                return response.json();
            } else if (response.status == 404) {

                // get a reference to the details area
                var d = document.querySelector('#detailsArea');

                let msg = document.createTextNode(`Requested resource "${id}" was not found`);
                let p = document.createElement('p');
                p.appendChild(msg);
                d.appendChild(p);
            } else {
                throw new Error(`HTTP status ${response.status}, ${response.statusText}`);
            }
        })
        .then(data => {
            buildDescriptionList(data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function buildDescriptionList(data) {

    // get a reference to the description list
    var l = document.querySelector('#dataList');

    // add data items...

    var l0n = document.createTextNode('First name');
    var dt0 = document.createElement('dt');
    dt0.appendChild(l0n);
    l.appendChild(dt0);

    let l0v = document.createTextNode(data.firstName);
    var dd0 = document.createElement('dd');
    dd0.appendChild(l0v);
    l.appendChild(dd0);

    // ~~~~~ 

    var l1n = document.createTextNode('Last name');
    var dt1 = document.createElement('dt');
    dt1.appendChild(l1n);
    l.appendChild(dt1);

    let l1v = document.createTextNode(data.lastName);
    var dd1 = document.createElement('dd');
    dd1.appendChild(l1v);
    l.appendChild(dd1);

    // ~~~~~ 

    var l2n = document.createTextNode('Credit score');
    var dt2 = document.createElement('dt');
    dt2.appendChild(l2n);
    l.appendChild(dt2);

    let l2v = document.createTextNode(data.creditScore);
    var dd2 = document.createElement('dd');
    dd2.appendChild(l2v);
    l.appendChild(dd2);

    // ~~~~~ 

    var l3n = document.createTextNode('Rating');
    var dt3 = document.createElement('dt');
    dt3.appendChild(l3n);
    l.appendChild(dt3);

    let l3v = document.createTextNode(data.rating);
    var dd3 = document.createElement('dd');
    dd3.appendChild(l3v);
    l.appendChild(dd3);

}
