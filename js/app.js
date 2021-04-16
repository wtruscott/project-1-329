
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
    $(".newPage").remove()
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

$(".toSkills").on("click", (event) => {
    $scorchedEarth2()
    $("h1").text("Resume and Skills")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503462/Burning_11_f7euin.webm")
    $("video")[0].load()
    const $newPage = $("<main>", {id: "skillsGrid", "class": "newPage"})
    $(".container").append($newPage)
})

$(".toAbout").on("click", (event) => {
    $scorchedEarth2()
    // $("nav i").css("color", "#45aeff")
    $("h1").text("About Me")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503464/Burning_10_bnsrfe.webm")
    $("video")[0].load()
    const $newPage = $("<main>", {id: "bioGrid", "class": "newPage"})
    $(".container").append($newPage)
    const $textBox1 = $("<div>", {id: "textOne", "class": "bio"})
    const $picture1 = $("<div>", {id: "picOne", "class": "pic"})
    const $textBox2 = $("<div>", {id: "textTwo", "class": "bio"})
    const $picture2 = $("<div>", {id: "picTwo", "class": "pic"})
    const $textBox3 = $("<div>", {id: "textThree", "class": "bio"})
    const $picture3 = $("<div>", {id: "picThree", "class": "pic"})
    $newPage.append($textBox1,$picture1,$textBox2,$picture2,$textBox3,$picture3)
    const $pic1 = $("<img>").attr("src", "https://res.cloudinary.com/dbmh779j0/image/upload/v1618538165/CF6F063F-E8F4-4AEB-98D8-10BE4EEEAA07_1_105_c_wynqtm.jpg")
    $picture1.append($pic1)
    const $pic2 = $("<img>").attr("src", "https://res.cloudinary.com/dbmh779j0/image/upload/v1618587063/859314_10151511611786508_736086781_o.jpg_c6x13f.jpg")
    $picture2.append($pic2)
    const $pic3 = $("<img>").attr("src", "https://res.cloudinary.com/dbmh779j0/image/upload/v1618537909/999396A8-DD73-4651-BB77-885CA3D17C9A_mgdgt0.jpg")
    $picture3.append($pic3)
    const $head1 = $("<h2>").text("Dreamer")
    const $text1 = $("<p>").text("I come from a background of acting and singing. My imagination and creativity served me well on stage and has proven a tremendous asset in life and at work since those days.")
    const $point1 =$("<i>").addClass("far fa-hand-point-down")
    const $pointy1 =$("<i>").addClass("far fa-hand-point-left")
    $textBox1.append($head1, $text1, $point1, $pointy1)
    const $head2 = $("<h2>").text("Builder")
    const $text2 = $("<p>").text("I have been building things my whole life. What started as a passion for Lego bricks lead to over ten years of carpentry and  operating and repairing stage automation")
    const $point2 =$("<i>").addClass("far fa-hand-point-down")
    const $pointy2 =$("<i>").addClass("far fa-hand-point-right")
    $textBox2.append($head2, $text2, $point2, $pointy2)
    const $head3 = $("<h2>").text("Teammate")
    const $text3 = $("<p>").text("I've spent six years on a four person technical team in international waters. I know that a team works best when everyone is contributing as much as they are able. I know that a team that can work well together can pull off far greater feats than any indiviidual member.")
    const $point3 =$("<i>").addClass("far fa-hand-point-down")
    const $pointy3 =$("<i>").addClass("far fa-hand-point-left")
    $textBox3.append($head3, $text3, $point3, $pointy3)

})

$(".toProjects").on("click", (event) => {
    $scorchedEarth2()
    const $newPage = $("<main>", {id: "cardGrid", "class": "newPage"})
    $(".container").append($newPage)
    $("h1").text("Projects")
    // $("nav i").css("color", "#7dd31f")
    const $linkys = $("<div>", {class: "linkBox"})
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618502373/Burning_6_em9kmt.webm")
    $("video")[0].load()
    projects.forEach((item, index) => {
    const $projectCard = $("<div>", {class: "card"})
    const $gittyUp = $("<div>", {class: "button1"})
    const $liveItUp = $("<div>", {class: "button2"})
    const $blurb = $("<div>", {class: "blurb"})
        $projectCard.html(`
        <img src=${item.image}/>
        `)
        $gittyUp.html(`
        <a href=${item.giturl}>GitHub</a>
        `)
        $liveItUp.html(`
        <a href=${item.liveurl}>Live Site</a>
        `)
        $blurb.html(`
        <p>${item.description}</p>
        `)
        $newPage.append($projectCard)
        $projectCard.append($gittyUp, $liveItUp)
        $projectCard.append($blurb)
    })  
})

$(".toContact").on("click", (event) => {
    $scorchedEarth2()
    // $("nav i").css("color", "#ffa502")
    $("h1").text("Contact")
    $("video source").attr("src", "https://res.cloudinary.com/dbmh779j0/video/upload/v1618503467/Burning_9_x1g7ez.webm")
    $("video")[0].load()
    const $newPage = $("<main>", {id: "contactGrid", "class": "newPage"})
    $(".container").append($newPage)
})

})

//.catch in case of error
.catch((error) => {
    console.error(error)
})