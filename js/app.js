
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
})

//////////////////////////
// jQuery goes here!!!
////////////////////////

$("i.fas.fa-bars").on("click", (event) => {
    $(".title").toggle()
    $(".subtitle").toggle()
    $(".menu").toggle()
})

const $scorchedEarth = () => {
    $(".container").empty()
}



//.catch in case of error
.catch((error) => {
    console.error(error)
})