

$(function(){

	$(".custom-image").click(function(){

		const $this = $(this);

		if($this.hasClass("not-clicked")){

			var secondPhoto = $this.data("secondary");
			$this.css("background","url(" + secondPhoto + ") center center / cover no-repeat");

			$($this.addClass("clicked"));
			$($this.removeClass("not-clicked"));
		} else {

			$this.css("background","0%");
		}
	});
	$(".Reappear").click(function(){
		$(".custom-image").css("background", "url(" + secondPhoto + ") center center / cover no-repeat");

	});
});
