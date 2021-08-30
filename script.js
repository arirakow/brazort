var client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');



function enviarElevacion(){
    var enviarElevacion = '';
    String;

    enviarElevacion = document.getElementById("elevacion").value;
    console.log("Elevacion", enviarElevacion);
    //  client.publish("brazort", "1");
    client.publish("brazort", enviarElevacion);

}

function enviarAvanze(){
    var enviarAvanze = '';
    String;

    enviarAvanze = document.getElementById("avanze").value;
    console.log("Avanze", enviarAvanze);
    client.publish("brazort", enviarAvanze);

}

function enviarGarraCerrada(){
    client.publish("brazort", '400');
    console.log("brazort", '400');
}

function enviarGarraAbierta(){
    client.publish("brazort", '580');
    console.log("brazort", '580');
}

function enviarGirar(){
    var enviarGirar;
    enviarGirar = document.getElementById("girar").value;
    console.log("brazort", enviarGirar);
    client.publish("brazort", enviarGirar);

}