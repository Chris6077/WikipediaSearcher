$(document).ready(function(){
	$("#form").submit(function(){
		console.log("searched " + $("#searchbar")[0].value);
		getResults();
		$("#searchbar")[0].value = "";
		return false;
	});
	makeURL = function(){
		return "https://cors.io/?https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#searchbar")[0].value + "&namespace=0&format=json";
	};
	getResults = function(){
		$.getJSON(makeURL(), function(data){
			for(var idx = 0; idx < data[1].length; idx++){
				var curr = document.createElement("div");
				curr.id = "entry";
				var link = document.createElement("a");
				link.href = data[3][idx];
				var title = document.createElement("p");
				title.innerHTML = data[1][idx];
				title.id = "title";
				link.appendChild(title);
				var desc = document.createElement("p");
				desc.innerHTML = data[2][idx];
				link.appendChild(desc);
				curr.appendChild(link);
				$("#form").append(curr);
			}
			var title, description, link;
			title = data[1][4];
		});
	};
});