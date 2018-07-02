$(document).ready(function(){
    $.getJSON('db.json', function(data){
        var output = '';
        $.each(data, function(key, value){
            output += '<img src ="' + value.img + '" class="img-fluid" alt="header" style="width:1110px; height=832px"/>' ;
            output += '<div class="contentTextSection">';
            output += '<span class="contentDate">' + value.date + '</span>';
            output += '<h2 class="contentTitle">' + value.title + '</h2>';
           // output += '<span class="contentDate">' + value.date + '</span>';
            output += '<p class="contentDescription">' + value.description + '</p>';

            output += '<div class="embed-responsive embed-responsive-16by9">' + value.video + '</div>';
            output += '</div>';
        });
        $('#contentSection').html(output);
    });
});