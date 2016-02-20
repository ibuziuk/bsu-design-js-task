document.addEventListener("DOMContentLoaded", function(event) { 
	var more_text = document.getElementById("read_more_text");
	var preview = document.getElementById("preview");

	if (more_text) {
		more_text.style.display = "none";

		var read_more = document.getElementById("read_more");
		
		read_more.addEventListener("click", function() {
			var st = document.getElementById("read_more_text").style.display;
			document.getElementById("read_more_text").style.display = (st === "none") ? "block" : "none";
			this.innerHTML = (st === "none") ? "(скрыть...)" : "(читать далее...)"
		});


		var x = document.getElementsByClassName("nav-img");
		for (var i = 0; i < x.length; i++) {
			x[i].addEventListener("click", function() {
				preview.src = this.firstElementChild.src;
			});
		}
	}

	var tab = document.getElementById("tab");
    var shop = document.getElementById("shop");
	if (tab) {
		tab.addEventListener("click", function() {
			var tab_img = document.getElementById("tab-img");
			if (tab_img) {
				tab_img.src = "images/02g.jpg";
			}
		});
	}

	if (shop) {
		shop.addEventListener("click", function() {
			var tab_img = document.getElementById("tab-img");
			if (tab_img) {
				tab_img.src = "images/black.jpg";
			}
		});
	}

});