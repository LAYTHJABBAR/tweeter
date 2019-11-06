
//Function to create mark up of tweet.
const createTweetElement = data => {

 return `
  <article class='tweet'>
    <div class="article-header">
      <img src="${data.user.avatars}">
      <h5 class="tweet-name">${data.user.name}</h5>
      <h3 class="tweet-name-right">${data.user.handle}</h3>
    </div>
    <div class="texttweet">${data.content.text}</div>
    <footer class="article-footer">
      <span class="tweet-time">${data.created_at} </span>
      <div class="tweet-icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
`
};
const renderTweets = data => {
  $("#tweetcontainer").empty();
  data.forEach(el => {
    const tweet = createTweetElement(el);
    $("#tweetcontainer").append(tweet);
  });
};


const loadTweets =  function () {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: (data1 => renderTweets(data1))
  })
}
//Appending to the DOM after DOM is ready.
$(document).ready(() => {
  // renderTweets(data);
  
  $( "form" ).submit(function( event ) {
    let data1 = $(this).serialize();
    console.log( "Handler sdfghjkmit() called.", $(this).serialize());
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data1,
      success: function() {
        console.log("done");
        loadTweets()
      },
    });
  });

  loadTweets()
});


