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
    let cont = document.getElementById("page-content").innerHTML
    
    t.posts.forEach((i) => {

        cont += `<div class="page"><div class="outline"><h3><span class="invert dot"></span>${i.title}<span class="invert dot"></span></h3><div class="content">${i.body}</div></div>`

    })

    document.getElementById("page-content").innerHTML = cont
})

let resize = () => {

    console.log(`${window.innerWidth}:${window.innerHeight} (${window.innerWidth/window.innerHeight})`)

    if (window.innerWidth/window.innerHeight < 1.1) {

        console.log("Mobile")
        document.body.className = "mobile-body"

    } else {

        console.log("Ooh")
        document.body.className = "body"

    }

}

document.body.onload = resize
document.body.onresize = resize