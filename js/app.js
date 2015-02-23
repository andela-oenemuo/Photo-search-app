$(function(){
  window.FindPhotos = {
    searchTerm: $('#term'),
    searchButton: $('#searchBtn'),
    searchValue : function() {
      var searchInput = FindPhotos.searchTerm.val();
      //console.log(searchInput);

    var perpage = 100;
    var currentPage = 1;
    var URL2='https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=106f6e5ce3218881e3fe4ba4a035d77f&';
    var tags="&tags="+ searchInput;
    var tagmode="&tagmode=any";
    var jsonFormat = "&format=json";
    var ajaxURL= URL2+"per_page="+perpage+"&page="+currentPage+tags+tagmode+jsonFormat;
      
    $.ajax( {
      url:ajaxURL,
      dataType:"jsonp",
      jsonp:"jsoncallback",
      success: function(data) {
       // $("#photos").empty();
        if(data.stat!="fail") {
         console.log(data);
         //$("#photos").empty();
         // $("figure").empty();
          $.each(data.photos.photo, function(i,photo) {
           // $("<figure></figure>").hide().append('<img src="http://farm'+photo.farm+'.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_q.jpg"/>').appendTo("#photos").fadeIn(2000);
       
            var photoHTML="";
             photoHTML+= "<figure> <img src='";
             photoHTML+="http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_q.jpg'";
             photoHTML+=" title='"+photo.title+"'" ;
             photoHTML+="></figure>";
             //photoHTML+="<figurecaption>"+photo.title+"</figurecaption><br>";
             $("#gallery").append(photoHTML).fadeIn(200);
          });
        }
        else {
         $("#gallery").empty();
          console.log("Error code "+data.stat);
            photoHTML="Error !! Error !! "+data.stat;
              $("#gallery").append(photoHTML).fadeIn(200);
        }
      }
    });
     
    }

  };
    FindPhotos.searchButton.click(FindPhotos.searchValue);


     
    
     
    // $(document).ready(function() {
    //  $("#gallery").empty();
    //  $("#submit").click(function (event) {
    //  if($("#term").val() !="" ){
    //  //$("#gallery").empty();
    //  /**********************/
    //  updatestatus();
    //  ajaxProcess();
    //  /**************************/
    //  }else {
    //  //$("#gallery").text("Please enter a keyword to search").fadeOut(2500);
    //  alert("Please enter a keyword to search");
    //  }
    //  });
    //  $("#clear").click(function(){
    //  $("#gallery").empty();
    //  });
    //  $("#gallery").scroll(function(){
    //  // check if we're at the bottom of the scrollcontainer
    //  if ($(this)[0].scrollHeight - $(this).scrollTop() == $(this).outerHeight())
    //  //if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10)
    //  {
    //  // If we're at the bottom, retrieve the next page
    //  currentPage++;
    //  $("#submit").click();
    //  updatestatus();
    //  // console.log("page "+currentpage);
    //  }
     
    // });

});