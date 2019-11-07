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

loadJSON("./data.json",(t) => {
    let cont = ""
    
    t.posts.forEach((i) => {

        cont += `<div class="post"><h3>${i.title}</h3>${i.body}</div>`

    })

    document.getElementById("page-content").innerHTML = cont

    console.log("aa")
})