let latCurrent=0;
let lonCurrent=0;


const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('key');
// console.log(search);

// console.log(search === 'zion')
    if(search ==='zion') {
        latCurrent = 37.2982;
        lonCurrent = 113.0263;
        console.log("hola");
    }else if(search==='bryce'){
        latCurrent = 37.5930;
        lonCurrent = 112.1677;
    }else if(search==='arches'){
        latCurrent = 38.7331;
        lonCurrent = 109.5925;
    }else if(search==='canyonlands'){
        latCurrent = 38.3269;
        lonCurrent = 109.8783;
    }else if(search==='capitolreef'){
        latCurrent = 38.3670;
        lonCurrent = 111.2615;
    }  

    // var lat = $(this).val();
    // var latCurrent = lat.toLowerCase().replace(/\s+/g, '');
    // console.log(nationalPark+"and"+search);
    
      // Here we construct our URL
      queryURL = "https://www.hikingproject.com/data/get-campgrounds?lat=" + latCurrent + "&lon=-" + lonCurrent + "&maxResults=20&key=200490960-11dab972d2711188712bdd6413bb06f3";   
   
    console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        var i; 
        for (i=0; i<response.campgrounds.length; i++) {
            
          // var nameDiv = $("<div></div>", {
          //   id: "nmDiv",
          // });
          // $("#campgroundInfo").append("<h2>" + (nameDiv, response.campgrounds[i].name) + "</h2>");

          // var locationDiv = $("<div></div>", {
          //   id: "locDiv",         
          // });
          // $(".campgroundLoc").append("<h5>" + (locationDiv, response.campgrounds[i].location) + "</h5>");
          // var imageDiv = $("<img />", {
          //   id: "newImage",
          //   src: response.campgrounds[i].imgUrl,
          //   width: 300,
          //   height: 200
          // });
          // $("#campgroundInfo").append(imageDiv);
          // var urlDiv = $("<div></div>", {
          //   id: "urlDiv",
          // });
          
            $("#campgroundInfo").append(
              "<br><br><br><div class='card-deck'>" +
              "<div class='card' style='background-color:lightgrey;border:none'>" +
              "<img class='card-img-top' src='" + response.campgrounds[i++].imgUrl + "' alt='Card image cap'>" +
              "<div class='card-body'>" +
              "<div class='card-title'><h2>" + response.campgrounds[i].name + "</h2><h5>" + response.campgrounds[i].location + "</h5></div>" +
              "<p class='card-text'><h6>Number of Sites: " + response.campgrounds[i].numCampsites + "</h6></p>" +
              "<p class='card-text'><small class='text-muted'></small></p>" +
              "<a href='" + response.campgrounds[i].url + "' class='btn btn-primary' class='bookable'> More Info </a>" +
              "</div>" +
              "</div>" +
              "<div class='card' style='background-color:lightgrey;border:none'>" +
              "<img class='card-img-top' src='" + response.campgrounds[i++].imgUrl + "' alt='Card image cap'>" +
              "<div class='card-body'>" +
              "<div class='card-title'><h2>" + response.campgrounds[i].name + "</h2><h5>" + response.campgrounds[i].location + "</h5></div>" +
              "<p class='card-text'><h6>Number of Sites: " + response.campgrounds[i].numCampsites + "</h6></p>" +
              "<p class='card-text'><small class='text-muted'></small></p>" +
              "<a href='" + response.campgrounds[i].url + "' class='btn btn-primary' class='bookable'> More Info </a>" +
              "</div>" +
              "</div>" +
              "<div class='card' style='background-color:lightgrey;border:none'>" +
              "<img class='card-img-top' src='" + response.campgrounds[i++].imgUrl + "' alt='Card image cap'>" +
              "<div class='card-body'>" +
              "<div class='card-title'><h2>" + response.campgrounds[i].name + "</h2><h5>" + response.campgrounds[i].location + "</h5></div>" +
              "<p class='card-text'><h6>Number of Sites: " + response.campgrounds[i].numCampsites + "</h6></p>" +
              "<p class='card-text'><small class='text-muted'></small></p>" +
              "<a href='" + response.campgrounds[i].url + "' class='btn btn-primary' class='bookable'> More Info </a>" +
              "</div>" +
              "</div>" +
              "</div><br><br><hr>");           
          }
            console.log(response);
      });

      $('#trails').on('click', function(){
        console.log(search);
        window.open('./trails.html?key='+ search,'_self');
      })
      $('#paragraphs').on('click', function(){
        console.log(search);
        window.open('./paragraphs.html?key='+ search,'_self');
      })
      $('#reviews').on('click', function(){
        console.log(search);
        window.open('./reviews.html?key='+ search,'_self');
      })
      
    
  