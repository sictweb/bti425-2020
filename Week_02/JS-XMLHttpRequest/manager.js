// Manager.js

// This is "old school" original JavaScript code for working with a web service

function personsGetAll() {

    // create an xhr object
    var xhr = new XMLHttpRequest();

    // configure its completion handler
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            // request-response cycle has been completed, so continue

            if (xhr.status === 200) {
                // request was successfully completed, and data was received, so continue

                // if you're interested in seeing the returned JSON...
                // open the browser developer tools, and look in the JavaScript console
                //console.log(xhr.responseText);

                // get the response
                // we are expecting a COLLECTION
                var data = JSON.parse(xhr.responseText);

                // at this point in time...
                // we will use the data, in the user interface or whatever 
                // you can add code to this function body, 
                // or call out to a separately-defined function

                // below, we will add code to this function body
                // can add table rows using a string, or using DOM methods
                // here, we will use the DOM methods to build the table rows

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
        }
    }

    // configure the xhr object to fetch content
    xhr.open('get', 'https://pam-coursedbintro.herokuapp.com/api/persons', true);

    // fetch the access token from session storage in the browser's memory
    var token = sessionStorage.getItem('token');
    if (!token) {
        token = 'Empty';
    }
    // set the request header
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);

    // set the request header(s)
    xhr.setRequestHeader('Accept', 'application/json');

    // send the request, a GET request does not send any entity body data
    xhr.send(null);

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

    // create an xhr object
    var xhr = new XMLHttpRequest();

    // configure its completion handler
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            // request-response cycle has been completed, so continue

            if (xhr.status === 200) {
                // request was successfully completed, and data was received, so continue

                // if you're interested in seeing the returned JSON...
                // open the browser developer tools, and look in the JavaScript console
                //console.log(xhr.responseText);

                // get the response
                // we are expecting an OBJECT
                var data = JSON.parse(xhr.responseText);

                // at this point in time...
                // we will use the data, in the user interface or whatever 
                // you can add code to this function body, 
                // or call out to a separately-defined function

                // below, we will add code to this function body
                // here, we will use the DOM methods to build a description list

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

            if (xhr.status === 404) {

                // uh oh, not found

                // get a reference to the description list
                var d = document.querySelector('#detailsArea');

                let msg = document.createTextNode(`Requested resource "${id}" was not found`);
                let p = document.createElement('p');
                p.appendChild(msg);
                d.appendChild(p);
            }
        }
    }

    // configure the xhr object to fetch content
    xhr.open('get', 'https://pam-coursedbintro.herokuapp.com/api/persons/' + id, true);

    // fetch the access token from session storage in the browser's memory
    var token = sessionStorage.getItem('token');
    if (!token) {
        token = 'Empty';
    }
    // set the request header
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);

    // set the request header(s)
    xhr.setRequestHeader('Accept', 'application/json');

    // send the request, a GET request does not send any entity body data
    xhr.send(null);

}
