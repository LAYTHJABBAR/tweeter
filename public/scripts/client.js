
//Function to create mark up of tweet.

const escape = function (data) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(data));
  return div.innerHTML;
}

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
`
};
const renderTweets = data => {
  $("#tweetcontainer").empty();
  data.forEach(el => {
    const tweet = createTweetElement(el);
    $("#tweetcontainer").append(tweet);
  });
};
const loadTweets = function () {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: (data1 => renderTweets(data1))
  })
}
$(document).ready(() => {
  loadTweets();
  $("#categories-toggle").on('click', function(eve){
    eve.preventDefault(); 
    $(this).toggleClass("down");
  });
  $("form").submit(function (event) {
    let data1 = $(this).serialize();
    event.preventDefault();
    let dataCh = $(".text").val().length;
    console.log(dataCh)
    if (dataCh === 0) {
      loadTweets()
      $(".alert").css("display", "block");
    } else if (dataCh >= 140) {
      $(".alerte").css("display", "block");
    }
    else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: data1,
        success: function () {
          loadTweets()
        },
      });
    }
  });
  $("#click").click(function (){
    $("form").toggle()
  })
});







