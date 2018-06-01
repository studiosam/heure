var myImages = new Array(   "https://source.unsplash.com/random/1920x1080",
                            "https://source.unsplash.com/1920x1080/daily",
                            "https://source.unsplash.com/1920x1080",
                            "https://source.unsplash.com/1980x1080/?city",
                            "https://source.unsplash.com/1980x1080/?geographi",
                            "https://source.unsplash.com/1980x1080/?history",
                            "https://source.unsplash.com/1980x1080/?sky",
                            "https://source.unsplash.com/1980x1080/?ciel",
                            "https://source.unsplash.com/1980x1080/?storm",
                            "https://source.unsplash.com/1980x1080/?lightning",
                            "https://source.unsplash.com/1980x1080/?tsunami",
                            "https://source.unsplash.com/1980x1080/?poisson",          
                            "https://source.unsplash.com/1980x1080/?shark",
                            "https://source.unsplash.com/1980x1080/?sea",
                            "https://source.unsplash.com/1980x1080/?fish",
                            "https://source.unsplash.com/1980x1080/?meduse",
                            "https://source.unsplash.com/1980x1080/?science",
                            "https://source.unsplash.com/1980x1080/?bugatti",
                            "https://source.unsplash.com/1980x1080/?lamborghini",
                            "https://source.unsplash.com/1980x1080/?fog",
                            "https://source.unsplash.com/1980x1080/?summer"
                            )


function SetImage() {
    var random = myImages[Math.floor(Math.random() * myImages.length)];
    while ('url(\"' + random + '\")' === $('#imageDiv').css('background-image')) {
      random = myImages[Math.floor(Math.random() * myImages.length)];
    }
 	  random = 'url(' + random + ')';
    $('#imageDiv').fadeOut(1300);
    
    setTimeout(function () {
        $('#imageDiv').css('background-image', random);
        $('#imageDiv').fadeIn(1300);
    }, 1000);
}
setInterval(function() {
    SetImage();
}, 25000);
function time (){
    var now = new Date();
    var heure   = String(now.getHours());   
    var minute  = String(now.getMinutes());
    var seconde = String(now.getSeconds());
    if(minute.length<=1){
        minute=`0${minute}`
    };
    if(seconde.length<=1){
        seconde=`0${seconde}`
    };    
    $('#heure').text(`${heure}:${minute}:${seconde} `);
}

setInterval(function(){
 time()
    
}, 1000);
