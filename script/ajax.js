// XMLHttpRequest
function ajaxSend(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(dataArray));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response);
        }
    }
}

function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }    return out;
}



function ajaxGet(url, method, functionName) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response);
        }
    }
}