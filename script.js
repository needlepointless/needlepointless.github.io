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

    console.log("stop that train!")

    loadJSON("./data.json",(t) => {
        let cont = ""

        if (t.posts == 0) cont += "<div id='empty-page'>There's nothing here.</div>"
        
        t.posts.forEach((i) => {

            cont += `<div class="page"><div class="outline"><h3><span class="invert dot"></span>${i.title}<span class="invert dot"></span></h3><div class="content">${i.body}</div></div>`

        })

        document.getElementById("page-content").innerHTML += cont
    }, () => {

        document.getElementById("page-content").innerHTML += "<div id='empty-page'>There's nothing here.</div>"

    })

}

let resize = () => {

    if (window.innerWidth/window.innerHeight < 1.1) {

        document.body.className = "mobile-body"

    } else {

        document.body.className = "body"

    }

}

document.body.onload = resize
document.body.onresize = resize