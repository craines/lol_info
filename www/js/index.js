var app = {
    //Iniciar paginas com hider para paginação
    paginacao: function (){
        $("#menu").hide();
        $("#basico").hide();
    },
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var requisicao = {

    pegaUsuario: function(){
        $("#pega-usuario").click(function(evt){
            evt.preventDefault();
            var usuario = $("#usuario").val().replace( /\s/g, '' ).toLowerCase();
            $.ajax({
                url: 'https://br.api.pvp.net/api/lol/br/v1.4/summoner/by-name/'+usuario+'?api_key=87c8f721-9d26-45b7-ad88-118279f0d15f',
                type: 'GET',
                //data: {usuario:usuario},
                beforeSend:function(){
                   $("#loading").show(); 
                }
            })
            .done(function(done) {
                //esconder
                $("#loading").hide();
                $("#container-usuario").hide();
                //mostra
                $("#menu").show('fast');
                $("#basico").show('fast');


                var done = done;
                console.log(id);
            })
            .fail(function() {
                $("#loading").hide();
                $("#nome-usuario").html("Nem um usuario foi encontrado com esse nome");
            })
            
        });

    },

   
}