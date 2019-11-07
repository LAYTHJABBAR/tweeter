//function to escape the HTML injection code.
const escape = function(data) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(data));
  return div.innerHTML;
};
//Function to create mark up of tweet.
const createTweetElement = data => {
  return `
  <article class='tweet'>
    <div class="article-header">
      <img src="${data.user.avatars}">
      <h5 class="tweet-name">${data.user.name}</h5>
      <h3 class="tweet-name-right">${data.user.handle}</h3>
    </div>
    <div class="texttweet">${escape(data.content.text)}</div>
    <footer class="article-footer">
      <span class="tweet-time">${data.created_at} </span>
      <div class="tweet-icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
`;
};
//function for new tweet rendering
const renderTweets = data => {
  $("#tweetcontainer").empty();
  data.forEach(el => {
    const tweet = createTweetElement(el);
    $("#tweetcontainer").append(tweet);
  });
};
const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: data => renderTweets(data)
  });
};
$(document).ready(() => {
  loadTweets();
  $("#categories-toggle").on("click", function(eve) {
    eve.preventDefault();
    $(this).toggleClass("down");
  });
  $("form").submit(function(event) {
    //function to inspect the entered tweet and return an error message if the entring is null or exceeding the size limit
    let data = $(this).serialize();
    event.preventDefault();
    let dataCh = $(".text").val().length;
    console.log(dataCh);
    if (dataCh === 0) {
      loadTweets();
      $(".alerte").css("display", "none");
      $(".alert").css("display", "block");
    } else if (dataCh > 140) {
      loadTweets();
      $(".alert").css("display", "none");
      $(".alerte").css("display", "block");
    } else {
      $(".alert").css("display", "none");
      $(".alerte").css("display", "none");
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: data,
        success: function() {
          loadTweets();
        }
      });
    }
  });
  //toggling function for the header arrow
  $("#click").click(function() {
    $("form").toggle();
  });
  //function for no text alert closing
  $("#closebtn").click(function() {
    $(".alert").css("display", "none");
  }); // function for text exceeding limit closing
  $("#closebtn2").click(function() {
    $(".alerte").css("display", "none");
  });
});
