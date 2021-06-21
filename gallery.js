

$(function(){

	$(".custom-image").click(function(){

		const $this = $(this);

		if($this.hasClass("not-clicked")){

			var secondPhoto = $this.data("secondary");
			$this.css("background","url(" + secondPhoto + ") center center / cover no-repeat");

			$($this.addClass("clicked"));
			$($this.removeClass("not-clicked"));
		} else {
			const $this = $(this);
			var secondPhoto = $this.data("secondary");
			$this.css({ 'background-color': '#ffffff',  'background-image': 'none'});
		}
	});
	$(".Reappear").click(function(){
		$(".custom-image").each(function(){
			const $this = $(this);
			var firstPhoto = $this.data("primary");
			$this.css("background","url(" + firstPhoto + ") center center / cover no-repeat");
			$($this.addClass("not-clicked"));
			$($this.removeClass("clicked"));
		})

	});
});
