# Project Overview
React App using API data

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

For this project I am creating an Animal Crossing Critterpedia resource. The main page helps you search for what critters are available at your specifc day and time. You can click on any critters you catch and they will be added to your caught library. You can also view all bugs, fish or diving critters on their own pages. Scroll through to see all of the things you have yet to catch and plan your strategy based on time of day or year.

## API

[https://acnhapi.com/v1/bugs/32]()


```
{data: {"id": 32,
"file-name": "red_dragonfly",
"name": {
"name-USen": "red dragonfly",
"name-EUen": "red dragonfly",
"name-EUde": "Feuerlibelle",
"name-EUes": "libélula roja",
"name-USes": "libélula roja",
"name-EUfr": "sympetrum",
"name-USfr": "libellule rouge",
"name-EUit": "libellula rossa",
"name-EUnl": "rode libel",
"name-CNzh": "红蜻蜓",
"name-TWzh": "紅蜻蜓",
"name-JPja": "アキアカネ",
"name-KRko": "고추잠자리",
"name-EUru": "красная стрекоза"
},
"availability": {
"month-northern": "9-10",
"month-southern": "3-4",
"time": "8am - 7pm",
"isAllDay": false,
"isAllYear": false,
"location": "Flying",
"rarity": "Common",
"month-array-northern": [
9,
10
],
"month-array-southern": [
3,
4
],
"time-array": [
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18
]
},
"price": 180,
"price-flick": 270,
"catch-phrase": "I caught a red dragonfly! Didn't even have to roll for initiative!",
"museum-phrase": "I won't deny that the wretched red dragonfly is an elegant aeronaut. It manipulates its four wings quite uniquely so it can hover and maneuver through the air with ease. But the veins on its wings! What ghastly things! One can't help but gasp at the sight of them... Appalling aerodynamics, indeed!",
"image_uri": "https://acnhapi.com/v1/images/bugs/32",
"icon_uri": "https://acnhapi.com/v1/icons/bugs/32"} }
```


## Wireframes

- [Wireframe Mobile](https://wireframepro.mockflow.com/view/Mwp7JBecunb#/page/b9ef194be98d41b0a223b32011dd39a0)
- [Wireframe Desktop](https://wireframepro.mockflow.com/view/Mwp7JBecunb#/page/D99736ccabfbb471d6976e50fad8e0f8f)
- [App Architecture](https://wireframepro.mockflow.com/view/Mwp7JBecunb#/page/D45082a437d1932350ecfeda6e939c439)
 

#### MVP
- Find and use external api 
- Render all critter icons on pages separated by type (bugs, fish, diving) 
- Search dropdowns that filter results to day and time
- Clickable critter icons that add a check mark when caught
- Single critter info that pops up on the side of your search bar
- Caught library page that displays all your critters

#### PostMVP

- Add a carousel of all critter info on pages separated by type (bugs, fish, diving) 
- Add a calendar that shows either what day the bugs are available or what day you caught them
- Add further drop down searches based on price or how rare they are

## Components 

| Component | Description | 
| --- | :---: | 
| App | This will make the initial data pull and include React Router| 
| Main Search Page | Include search dropdowns that filter results | 
| Single Critter | Card with critter info that pops out on the side | 
| Caught Library | Icons of all caught critters organized by category | 
| Fish Library | Icons of all fish critters- carousel with extra data on each individual critter | 
| Bugs Library | Icons of all bug critters- carousel with extra data on each individual critter  | 
| Diving Library | Icons of all diving critters- carousel with extra data on each individual critter  | 

## MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components with Links/Routes | H | 3hrs| 0hrs | 0hrs |
| Working with API | H | 3hrs| 0hrs | 0hrs |
| Display and Style Icons | M | 2hrs| 0hrs | 0hrs |
| Create Search dropdowns| H | 3hrs| 0hrs | 0hrs |
| Filter data based on dropdowns | H | 5hrs| 0hrs | 0hrs |
| Add clicked icons to Caught Library | M | 2hrs| 0hrs | 0hrs |
| Create Single Critter info cards | M | 5hrs| 0hrs | 0hrs |
| Total | H | 23hrs| 0hrs | 0hrs |

## Post-MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Carousel of critter data | H | 5hrs| 0hrs | 0hrs |
| Add calendar of data | H | 3hrs| 0hrs | 0hrs |
| Add more dropdown search data | H | 3hrs| 0hrs | 0hrs |
| Total | H | 11hrs| 0hrs | 0hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```