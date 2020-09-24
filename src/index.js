import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import State from "./State"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import About from "./About"

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/alabama-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alabama.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alabama.jpg",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    map_image_url: "https://cdn.civil.services/us-states/maps/alaska-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/alaska.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/alaska.jpg",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/arizona-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/arizona.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/arizona.jpg",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/arkansas-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/arkansas.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/arkansas.jpg",
  },
  {
    name: "California",
    abbreviation: "CA",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/california-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/california.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/california.jpg",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    info:
      "Right now, one issue Colorado is super focused on currently is reducing plastic pollution.\nNothing we used for a few minutes should be allowed to pollute our oceans and rivers and threaten wildlife for centuries to come. That's why we're calling on state leaders to ban take-out foam cups and containers.",
    actions: [
      {
        name: "Invasive Species Removal",
        details:
          "Remove invasive species when you see them! Some invasive species in Colorado are; Freshwater Mussels, Yellow Toadflax, Emerald Ash Borer, and Northern Pike.",
      },
      {
        name: "Litter Abatement",
        details:
          "If you see trash blowing in the wind, pick it up and throw it in a trash bin!",
      },
      {
        name: "Waterway Restoration",
        details:
          "Harder to do on your own, but you can always volunteer, and report when you see problems near our waterways!",
      },
      {
        name: "Go Green",
        details:
          "If you can afford it, use green energy! There are tons of programs in Colorado to help families get solar panels on their home. Each little bit makes a difference.",
      },
    ],
    nonprofits: [
      {
        name: "Volunteers for Outdoor Colorado",
        website: "https://www.voc.org/",
      },
      {
        name: "Colorado Youth Corps Association",
        website: "http://www.cyca.org/",
      },
      {
        name: "Big City Mountaineers",
        website: "https://www.bigcitymountaineers.org/",
      },
    ],
    volunteer: [
      "Great Sweep",
      "MLK Day of Service",
      "Colorado Fourteeners Initiative",
      "Colorado Trail Foundation",
      "Continental Divide Trail Coalition",
    ],
    localPrograms: [
      {
        name: "Colorado Climate Plan",
        website:
          "https://www.codot.gov/programs/environmental/Sustainability/colorado-climate-plan-2015",
      },
    ],
    map_image_url:
      "https://cdn.civil.services/us-states/maps/colorado-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/colorado.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/colorado.jpg",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/missouri-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/missouri.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/missouri.jpg",
  },
  {
    name: "Montana",
    abbreviation: "MT",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/montana-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/montana.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/montana.jpg",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/nebraska-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/nebraska.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/nebraska.jpg",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    map_image_url: "https://cdn.civil.services/us-states/maps/nevada-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/nevada.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/nevada.jpg",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/new-hampshire-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-hampshire.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-hampshire.jpg",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/new-jersey-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-jersey.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-jersey.jpg",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/new-mexico-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-mexico.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-mexico.jpg",
  },
  {
    name: "New York",
    abbreviation: "NY",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/new-york-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/new-york.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/new-york.jpg",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/north-carolina-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/north-carolina.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/north-carolina.jpg",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/north-dakota-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/north-dakota.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/north-dakota.jpg",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    map_image_url: "https://cdn.civil.services/us-states/maps/ohio-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/ohio.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/ohio.jpg",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/oklahoma-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/oklahoma.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/oklahoma.jpg",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    map_image_url: "https://cdn.civil.services/us-states/maps/oregon-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/oregon.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/oregon.jpg",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/pennsylvania-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/pennsylvania.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/pennsylvania.jpg",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/rhode-island-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/rhode-island.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/rhode-island.jpg",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/south-carolina-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/south-carolina.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/south-carolina.jpg",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/south-dakota-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/south-dakota.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/south-dakota.jpg",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/tennessee-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/tennessee.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/tennessee.jpg",
  },
  {
    name: "Texas",
    abbreviation: "TX",
    info:
      "Texas is a land impacted by changing patterns of population, and effects on the natural environment.",
    actions: [
      {
        name: "Invasive Species Removal",
        details:
          "Invasive species choke out more drought tolerant plants with deeper roots that provide a buffer against flooding. Some invasive species in Texas are; Ligustrum, English Ivy, Chinese Yam, and Bastard Cabbage.",
      },
      {
        name: "Litter Abatement",
        details:
          " If you see trash blowing in the wind, pick it up and throw it in a trash bin!",
      },
      {
        name: "Waterway Restoration",
        details:
          " Harder to do on your own, but you can always volunteer, and report when you see problems near our waterways!",
      },
      {
        name: "Go Green",
        details:
          " Advocate to your local energy provider about providing more alternate energy programs and green choices.",
      },
    ],
    nonprofits: [
      { name: "Keep Texas Beautiful", website: "https://www.ktb.org/" },
      {
        name: "Sierra Club of Texas",
        website: "https://www.sierraclub.org/texas",
      },
      {
        name: "Public Citizen of Texas",
        website: "https://www.citizen.org/tags/texas/",
      },
    ],
    volunteer: [
      "Great Sweep",
      "MLK Day of Service",
      "Great Texas River Cleanup",
    ],
    map_image_url: "https://cdn.civil.services/us-states/maps/texas-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/texas.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/texas.jpg",
  },
  {
    name: "Utah",
    abbreviation: "UT",
    map_image_url: "https://cdn.civil.services/us-states/maps/utah-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/utah.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/utah.jpg",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/vermont-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/vermont.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/vermont.jpg",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/virginia-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/virginia.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/virginia.jpg",
  },
  {
    name: "Washington",
    abbreviation: "WA",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/washington-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/washington.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/washington.jpg",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/west-virginia-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/west-virginia.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/west-virginia.jpg",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    map_image_url:
      "https://cdn.civil.services/us-states/maps/wisconsin-large.png",
    landscape_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/landscape/wisconsin.jpg",
    skyline_background_url:
      "https://cdn.civil.services/us-states/backgrounds/1280x720/skyline/wisconsin.jpg",
  },
]

ReactDOM.render(
  <Router>
    <Header states={states} />
    <Route exact path="/" render={(props) => <App states={states} />} />
    <Route exact path="/about" component={About} />
    <Route path="/:state" component={State} />
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
