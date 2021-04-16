# Project Overview

**PROJECT NAME:** Will's Portfolio Site

**PROJECT AUTHOR:** Will Truscott

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

I plan to have a page where jQuery allows enough DOM manipulation that my sections look like new pages. Each Section has the same background and format, but I will change the color "theme" for each section. The themes have a four elements vibe. My project cards will be in a grid with a default look of grayscale until you hover over them.

## Google Sheet

https://docs.google.com/spreadsheets/d/1HYRff33UVffJBaQj0WJQSCUqwA76QN1L7QkL_woi5fQ/edit#gid=0

## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [dbrand](https://dbrand.com/apple-iphone-cases)| Not a protfolio at all, but I'm pulling from this product page for my portfolio layout. |
|[iuri.is](https://iuri.is/) | I think this portfolio has a lot of examples of what i'm trying to achieve with my white text with key words in each sections color "theme" |
| [ejosue.com](https://ejosue.com/) |  I don't like most of this page, but if you scroll to his projects "Case Studies" you can see the hover effects that are similat to what I want to implement albeit I want to go from grayscale to color. |

---

## Wireframes

- [Mobile Display](https://i.imgur.com/NwjkLzF.jpg)
- [Tablet Display](https://i.imgur.com/Y6DIEzr.jpg)
- [Desktop Display](https://i.imgur.com/YizqlU1.jpg)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Time Priority Matrix](https://i.imgur.com/XN6XF09.jpg)

Total is 29 hours

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Project Deployment 
- Hamburger 
- Nav with Flexbox  
- Creating Cards with hyperlink buttons
- Working with API 
- Responsive Mobile First Design
- Implement Responsive Grid for cards
- Social Media Icons

#### PostMVP 

-  Project Grayscale to Color Hover Effect
- Create Background Images
- Integrate Background Images with an absolute position
- Bootstrap on Main Page
- Make own icon

## Functional Component


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Deployment | H | 2hr | 2hr |
| Hamburger | H | 1hr | 3 hr |
| Nav with Flexbox | H | 2hr | 3hr |  
| Creating Cards with hyperlink buttons| M | 2hr | 2hr|
| Working with API | H | 4hrs|  6hr | 
| Responsive Mobile First Design| H | 3hrs|  7hr | 
| Implement Responsive Grid for cards| H | 3hr | 1hr |
| Social Media Icons | L | 1hr |  1hr |
| Total | H | 18hrs| 25 hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Grayscale to Color Hover Effect| M | 2hr | .1hr |
| Create Background Images | H | 3hr | 4hr |
| Integrate Background Images with an absolute position | H | 1hr | 1hr |
| Bootstrap on Main Page | M | 4hr | NA |
| Make own icon | L | 2hr | NA |
| Total | H | 12hrs| 5.1 hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

 Fontawesome - I will be implementing some of their icons. The hamburger menu for sure.

 Google Fonts - I will be incorperating external fonts in my project.

 favicon.io - I may create a favicon for the tab bar that is the personal icon if I have time.

 bootstrap - if time permits bootstrap is how I will line up the elements on my pages main section.

 jQuery - this is how I wil move between the sections of my site. And how I will implement my api.



## Code Snippet

```
const $scorchedEarth2 = () => {
    $(".main").css("display", "none")
    $(".newPage").remove()
    $("nav img").css("display", "inline")
    $("nav i.far.fa-gem").css("display", "inline")
}

```
This guy is why I can click on any link in the nav bar, nav bar drop down menu, or main page, and have the correct section load. I was constantly updating this and accounting for variables that might not get caught in a transition.

## Issues and Resolutions

Issue: drop down menu would not dissapear if you changed the screen width with it open.

Solution: added a rule to my media Query that gives the menu display:none at that size.

Issue: Profile picture wouldn't load consistantly. 

Solution: happened because image in my imgur account was private. I uploaded the photo to cloudinary. Now it works 100% of the time.

Issue: Created a function that removed the main page without issue, but I was having issues that all subsequent elements created through DOM manipulation stayed on the page.

Solution: created a similar function that would remove any div with the class of "newPage" I then made sure to give all my new main tags the class of newPage.

Issue: Grid was working well on my Projects page, but it would warp my images to fit them, and if I set parameters that stopped the warping the page looked bad.

Solution: because the idea was to have a uniform grid of square screenshots I retook my screenshots and uploaded square pictures. Sometimes editing the info before you use it is the easiest solution if possible.

Issue: My link tags for github and live site were labeled correctly but they were coming up as undefined when i tried to click on them. This took some time to figure out. I knew the jQuery selectors are case sensitive, but I didn't realize when I name the keyword for the value I'm trying to pull off an API, I need to look at what I called it in my $Ajax array, it doesn't matter what it says on the spread sheet.

Solution: Spreadsheet said gitURL and liveURl but $projects Array said giturl and liveurl. I switched my selectors accordingly.

Issue: I was trying to make the video that is now above the header a background to everything below the nav. Videos are tricky to work with so the only way to implement my idea recquired absolute positions on the video and the "content" relative position on the body. when i tried to use absolute position on the "contents" I lost most of my grid and flexbox formatting.

Solution: A happy accident, I liked the way the video looked above the nav so I stuck with it. As far as positions go the answer seems to be that implementing absolute positioning as far along as i was, while possible, creates more problems than it's really worth solving.

Issue: When I tried to get the video scource to change when you move to a different section it would stay the same, even though inspector indicated that the HTML was updating correctly.

Solution: videos have additional properties to account for. Alex helped me with this. I had to write in a little function in my app.js below where i altered the video scource to tell the DOM to load that new video.


