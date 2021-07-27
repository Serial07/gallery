function buildThumbs() {
	for (var i = 0; i < imgData.length; i++) {
		var img = document.createElement("img");
		img.src = "thumbs/" + imgData[i].filename + ".png";
		img.className = i == 0 ? "thumbs selected" : "thumbs";
		img.id = "thumb" + i;
		img.dataset.posImg = i;
		
		document.getElementById("thumbnails").appendChild(img);
	}
}

$(document).ready(function() {
	gallery.load();
	buildThumbs();
	
	$("#imgTD").mouseenter(function() {
		$("#imgText").css("bottom", "0px");
	});
	
	$("#imgTD").mouseleave(function() {
		$("#imgText").css("bottom", "-150px");
	});
	
	$("#arrowLeft").click(function() {
		gallery.prev();
		gallery.load();
	});
	
	$("#arrowRight").click(function() {
		gallery.next();
		gallery.load();
	});
	
	$(".thumbs").click(function() {
		if (!this.classList.contains("selected")) {
			gallery.setPos(parseInt(this.dataset.posImg));
			gallery.load();
		}
	});
	
	$(document).keyup(function(e) {
		console.log(e.keyCode);
		if (e.keyCode == 37) { // left
			gallery.prev();
			gallery.load();
		} else if (e.keyCode == 39) { // right
			gallery.next();
			gallery.load();
		}
	});
});