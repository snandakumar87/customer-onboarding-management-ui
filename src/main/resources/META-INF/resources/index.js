if (!!window.EventSource) {

    var eventSource = new EventSource("/onboarding/stream");

    eventSource.onmessage = function(event) {

        data = JSON.parse(event.data);

        var jsonData = JSON.parse(data);

        var row = '<tr><td>' + data.requestId+ '</td><td>' + data.dueDiligence + '</td><td>' + data.Documents + '</td><td>' +
        + JSON.stringify(jsonData) + '</td>';



         row+='</tr><tr width="200px" id="svg" style="width:100%"></tr>';

        $('#tbody').append(row);
    };



} else {
    window.alert("EventSource not available on this browser.")
}

