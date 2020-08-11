(function() {

  const apiInstance = axios.create({
    baseURL: 'https://iceapi.nonce.casa'
  });

  apiInstance.get('/stream')
    .then(function (response) {
      let data = response.data
      let streamStatus = $(".stream-status")

      if (data.type == "live") {
        streamStatus.html(`<span class="badge bg-success">ONLINE</span>`)
      } else {
        streamStatus.html(`<span class="badge bg-dark">OFFLINE</span>`)
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  apiInstance.get('/videos')
    .then(function (response) {
      let data = response.data.slice(0, 6)
      let pastStreams = $(".past-streams")

      $.each(data, function( key, video ) {
        pastStreams.append(`
          <div class="col-md-4 single-stream">
            <a href="`+ video.url +`" target="_blank">
              <div class="video-thumbnail">
                <img class="mx-auto d-block" src="`+ video.thumbnail +`" alt="`+ video.title +`">
              </div>
            </a>
          </div>
        `)
      });

      $(".past-stream-button").html("VIEW MORE STREAMS")
    })
    .catch(function (error) {
      console.log(error);
    });

})();
