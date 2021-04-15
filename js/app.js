
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
}

const $bringItBack = () => {
    $(".main").css("display", "grid")
    $(".newPage").remove()
    $("h1").text("will.Truscott()")
    $("h4").text("Developer")
}

// const $newCard = () => {
//     const $card = ("<div>", {class: "card"})
// }

$(".toHome").on("click", (event) => {
    $bringItBack()
    $("nav i").css("color", "white")
    $("nav img").css("display", "none")
})

$(".toAbout").on("click", (event) => {
    $scorchedEarth2()
    $("nav i").css("color", "#45aeff")
    $("h1").text("About Me")
    $("h4").text("Who Am I?")
})

$(".toProjects").on("click", (event) => {
    $scorchedEarth2()
    const $newPage = $("<main>", {id: "cardGrid", "class": "newPage"})
    $(".container").append($newPage)
    $("h1").text("Projects")
    $("h4").text("Here's what I've made.")
    $("nav i").css("color", "#7dd31f")

    projects.forEach((item, index) => {
    const $projectCard = $("<div>", {class: "card"})
        $projectCard.html(`
        <img src=${item.image}/>
        `)
        $newPage.append($projectCard)
    })  
})

$(".toContact").on("click", (event) => {
    $scorchedEarth2()
    $("nav i").css("color", "#ffa502")
    $("h1").text("Contact")
    $("h4").text("Let's work together")
})

})

//.catch in case of error
.catch((error) => {
    console.error(error)
})