const data111 = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

//Function to create mark up of tweet.
const createTweetElement = data => {

 return `<section id="tweetcontainer" class="head">
  <article class='tweet'>
    <div class="article-header"></div>
    <div>
      <img src="${data.user.avatars}">
      <h5 class="tweet-name">${data.user.name}</h5>
      <h3 class="tweet-name-right">${data.user.handle}</h3>
    </div>
    <div class="texttweet">${data.content.text}</div><br/>
    <footer class="article-footer">
      <span class="tweet-time">${data.created_at} </span>
      <div class="tweet-icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
</section>`
};
const renderTweets = data => {
  data.forEach(el => {
    const tweet = createTweetElement(el);
    $(".new-tweet").append(tweet);
  });
};
//Appending to the DOM after DOM is ready.
$(document).ready(() => {
  renderTweets(data);
});
$( "form" ).submit(function( event ) {
  let data1 = $(this).serialize();
  console.log( "Handler sdfghjkmit() called.", $(this).serialize());
  event.preventDefault();


$.ajax({
  type: "POST",
  url: "/tweets",
  data: data1,
  success: function(data1) {
    console.log("done", data1);
  },
});
$.ajax({
  type: "GET",
  url: "/tweets",
  success: (data1 => renderTweets(data1))

 
})
});