const loadJSON = (filePath, success, error) => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200 && success) success(JSON.parse(xhr.responseText));
		} else if (error) error(xhr);
	};
	xhr.open("GET", filePath, true);
	xhr.send();
}

createPage = () => {

    loadJSON("./data.json",(t) => {
        let cont = ""
        
        t.patterns.forEach((i) => {

            cont += `<a class="pattern page" href="${i.dest}"><div class="outline"><img class="thumbnail" src="${i.src}" /><h3><span class="invert dot"></span>${i.title}<span class="invert dot"></span></h3></a>`

        })

        document.getElementById("page-content").innerHTML += cont
    })

}

createPage()