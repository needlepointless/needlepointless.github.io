/*
<div class="outline">
    <h3><span class="invert dot"></span>${i.title}<span class="invert dot"></span></h3>
    <div class="content">${i.body}</div>
</div>
*/

const createPage = (t,bl,thb,time) => {

    thb = (thb) ? thb : "./assets/default-thumbnail.png"
    time = (time) ? time : "Mocember 13, 0000"

	if (thb == "none") return `<div class="full page"><div class="blurb"><h3 class="title">${t}<div class="timestamp">${time}</div></h3>${bl}</div></div>`
	return `<div class="page"><div class="thumbnail"><img src="${thb}" /></div><div class="blurb"><h3 class="title">${t}</h3><div class="timestamp">${time}</div>${bl}</div></div>`

}

$(() => {
    let pages = $("#pages")

    switch (window.location.protocol) {
        case 'http:':
        case 'https:':
            $.getJSON("data.json", (res) => {

                res[$("body").attr("id")].forEach((v,i) => {

                    console.log(i)
                    pages.append(createPage(v.title,v.body,v.thumb))

                })

            })
            break

        default:
            pages.html("")

            switch ($("body").attr("id")) {
                case 'blog':
                    pages.append(createPage("Memories Bring Back, Memories Bring Back","Placeholder text","none"))
                    pages.append(createPage("Oh Horror, Oh Shamefullness, Oh Disgust! Please make me ashamed, Oh God!","Brandon Sanderson","none"))
                    break

                case 'patterns':
                        pages.append(createPage("Evelyn","How do I know that me and you, see the same color the same way that you and me see; is my red blue for you, is my green your green too."))
                        pages.append(createPage("Noir","Could it be true we see differing hues and say we do then how would we discover this facct and even if we did would it have any impact.","https://previews.123rf.com/images/elenka1/elenka11809/elenka1180902205/108863132-floral-pattern-wallpaper-baroque-damask-seamless-background-black-and-gold-ornament.jpg"))
                        break

                case 'projects':
                    break
            }
            break
    }

})