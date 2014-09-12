//main.js

(function(){
	var tagFilters = document.getElementById("tag-filters").getElementsByClassName("tag");
	var posts = document.getElementById("home").getElementsByClassName("post-link");

	function getFiltersFromURL() {
		var urlFrag = unescape(window.location.hash).substr(1);
		var filters;

		if (urlFrag.indexOf('&') !== -1) {
			filters = urlFrag.split('&');
		} else if (urlFrag != "") {
			filters = [urlFrag];
		} else {
			filters = [];
		}

		return filters;
	}

	function getTagType(element) {
		var classes = element.getAttribute("class")
		return classes.substr(classes.indexOf(" ")+1);
	}

	function filterPosts() {
		var filters = getFiltersFromURL();

		if (filters.length === 0) {
			for (var i=0; i < tagFilters.length; i++) {
				tagFilters[i].style.opacity = 1;
			}
			for (var i=0; i < posts.length; i++) {
				posts[i].style.display = "block";
			}
			return;
		}

		for (var i=0; i < tagFilters.length; i++) {
			if (filters.indexOf(getTagType(tagFilters[i])) !== -1) {
				tagFilters[i].style.opacity = 1;
			} else {
				tagFilters[i].style.opacity = 0.6;
			}
		}
		for (var i=0; i < posts.length; i++) {
			var matchCount = 0;
			for (var j=0; j < filters.length; j++) {
				if (getTagType(posts[i]).indexOf(filters[j]) !== -1) {
					matchCount++;
				}
			}
			if (matchCount === filters.length) {
				posts[i].style.display = "block";
			} else {
				posts[i].style.display = "none";
			}
		}
	}

	for (var i=0; i < tagFilters.length; i++) {
		tagFilters[i].onclick = function(e){
			var currentTag = getTagType(e.currentTarget);
			var isCurrentTagInFilters = false;
			var filters = getFiltersFromURL();
			

			for (var j=0; j<filters.length; j++) {
				if (filters[j] === currentTag) {
					filters = filters.slice(0,j).concat(filters.slice(j+1,filters.length));
					isCurrentTagInFilters = true;
				}
			}

			if (!isCurrentTagInFilters) {
				filters.push(currentTag);
			}

			window.location = "#" + escape(filters.join('&'));

			filterPosts();
		};
	};

	filterPosts();
	window.onhashchange = filterPosts;
})()