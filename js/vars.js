var imgData = [
	{
		filename: "img01",
		title: "Kitten Cat Pet",
		desc: 'Image by <a href="https://pixabay.com/users/krystianwin-8237000/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6479019">krystianwin</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6479019">Pixabay</a>'
	},
	{
		filename: "img02",
		title: "Cat Autumn Leaves",
		desc: 'Image by <a href="https://pixabay.com/users/rihaij-2145/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1033716">rihaij</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1033716">Pixabay</a>'
	},
	{
		filename: "img03",
		title: "Cat Snow Winter",
		desc: 'Image by <a href="https://pixabay.com/users/klimkin-1298145/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3947174">klimkin</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3947174">Pixabay</a>'
	},
	{
		filename: "img04",
		title: "Nice Cat Animal",
		desc: 'Image by <a href="https://pixabay.com/users/chibimundo-4544098/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3085333">Lucy Chibimundo</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3085333">Pixabay</a>'
	},
	{
		filename: "img05",
		title: "Christmas Winter Snow",
		desc: 'Image by <a href="https://pixabay.com/users/vic951-7719059/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3090664">Viktor Kosilov</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3090664">Pixabay</a>'
	}
	/*
	template
	{
		filename: "img0",
		title: "",
		desc: ''
	}
	*/
];

var gallery = {
	pos: 0,
	max: imgData.length - 1,
	next: function() {
		this.pos = this.pos == this.max ? 0 : this.pos + 1;
	},
	prev: function() {
		this.pos = this.pos == 0 ? this.max : this.pos - 1;
	},
	setPos: function(n) {
		this.pos = n > this.max ? this.max : (n < 0 ? 0 : n);
	},
	load: function() {
		document.getElementById("mainImage").src = "img/" + imgData[this.pos].filename + ".jpg";
		document.getElementById("imgTitle").innerHTML = imgData[this.pos].title;
		document.getElementById("imgDetails").innerHTML = imgData[this.pos].desc;
		
		$(".thumbs").removeClass("selected");
		$("#thumb" + this.pos).toggleClass("selected");
	}
};