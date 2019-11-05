$(document).ready(function () {
    $(".text").on('keyup keydown', function () {
        let maxCharacters = 140;
        let remaining = maxCharacters - this.value.length;
        const $counter = $(".counter");
        $counter.text(remaining);
        if (maxCharacters < this.value.length) {
            $counter.addClass("red");
            console.log(this.value.length)
        } else {
            $counter.removeClass("red");
        }
    });
});


