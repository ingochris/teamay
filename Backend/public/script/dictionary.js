getSynonym = function(keyword){
	$.get("/synonyms?searchKeyword="+keyword+"", function(data){
		var scope = angular.element(document.getElementById("main ai")).scope();
			    scope.$apply(function () {
			        scope.showSynonyms(keyword,data);
			    });
	});
}