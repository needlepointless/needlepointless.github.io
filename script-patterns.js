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

            cont += `<a href=${i.dest} class="pattern page"><img class="thumbnail" src=${i.src} /><h3><span class="invert dot"></span>${i.title}<span class="invert dot"></span></h3><div class="blurb">${i.blurb}</div></a>`

        })

        document.getElementById("page-content").innerHTML += cont
    })

}

createPage()