
//https://spreadsheets.google.com/feeds/list/SHEET_ID/SHEET_NUMBER/public/full?alt=json
//////////////////////////////////////////////
// Get Data from google sheets
//////////////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1HYRff33UVffJBaQj0WJQSCUqwA76QN1L7QkL_woi5fQ/1/public/full?alt=json")
//.then for when the data arrives
.then((data) => {
    console.log(data)

    // Map over the data to generate a simpler array
    const projects = data.feed.entry.map((item) => {
        return {
        project: item.gsx$project.$t,
        liveurl: item.gsx$liveurl.$t,
        giturl: item.gsx$giturl.$t,
        image: item.gsx$image.$t,
        description: item.gsx$description.$t
        
        }
    })
    console.log(projects)
// })

//////////////////////////
// jQuery goes here!!!
////////////////////////

$("i.fas.fa-bars").on("click", (event) => {
    $(".title").toggle()
    $(".subtitle").toggle()
    $(".menu").toggle()
})

const $scorchedEarth = () => {
    $(".newPage").remove()
}
const $scorchedEarth2 = () => {
    $(".main").css("display", "none")
    $("#cardGrid").remove()
    $("nav img").css("display", "inline")
    $("nav i.far.fa-gem").css("display", "inline")
}

const $bringItBack = () => {
    $(".main").css("display", "grid")
    $(".newPage").remove()
    $("h1").text("will.Truscott()")
    $("h4").text("Developer")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503463/Burning_8_lfdcqk.webm")
    $("video")[0].load()
    $("nav i.far.fa-gem").css("display", "none")
    $("nav img").css("display", "none")
}

// const $newCard = () => {
//     const $card = ("<div>", {class: "card"})
// }
$("nav i.far.fa-gem").on("click", (event) => {
    $bringItBack()
})

$(".toHome").on("click", (event) => {
    $bringItBack()
    // $("nav i").css("color", "white")
    
})

$(".toAbout").on("click", (event) => {
    $scorchedEarth2()
    // $("nav i").css("color", "#45aeff")
    $("h1").text("About Me")
    $("h4").text("Who Am I?")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503464/Burning_10_bnsrfe.webm")
    $("video")[0].load()
})

$(".toProjects").on("click", (event) => {
    $scorchedEarth2()
    const $newPage = $("<main>", {id: "cardGrid", "class": "newPage"})
    $(".container").append($newPage)
    $("h1").text("Projects")
    $("h4").text("Here's what I've made.")
    // $("nav i").css("color", "#7dd31f")
    const $linkys = $("<div>", {class: "linkBox"})
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618502373/Burning_6_em9kmt.webm")
    $("video")[0].load()
    projects.forEach((item, index) => {
    const $projectCard = $("<div>", {class: "card"})
    const $gittyUp = $("<div>", {class: "button1"})
    const $liveItUp = $("<div>", {class: "button2"})
        $projectCard.html(`
        <img src=${item.image}/>
        `)
        $gittyUp.html(`
        <a href=${item.gitURL}>GitHub</a>
        `)
        $liveItUp.html(`
        <a href=${item.liveURL}>Live Site</a>
        `)
        $newPage.append($projectCard)
        $projectCard.append($gittyUp, $liveItUp)
    })  
})

$(".toContact").on("click", (event) => {
    $scorchedEarth2()
    // $("nav i").css("color", "#ffa502")
    $("h1").text("Contact")
    $("h4").text("Let's work together")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503467/Burning_9_x1g7ez.webm")
    $("video")[0].load()
})

})

//.catch in case of error
.catch((error) => {
    console.error(error)
})