import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navbar className="navbar navbar-default" />
        <hr />

        <p>Content is from Wikipedia.</p>
        <hr />

        <Horse />
        <Lizard />
        <Bear />
        <Eagle />
        <Dolphin />

        <p>&nbsp;</p>
        <hr />
        <footer>
          <p>&copy; 2019, personal or organization name</p>
        </footer>
      </div>
    );
  }
}

export default App;

// Function component for the top-of-view header
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <h2>App name/title</h2>
        <p>Brief description of the app</p>
      </div>
    </div>
  );
}

// Function component for the navigation bar 
const Navbar = () => {
  return (
    <div className="container-fluid navbar-outline">
      <div className="navbar-header">
        <a href="#home" className="navbar-brand">Home page</a>
      </div>

      {/* <!-- All the navigation links are in the following div --> */}
      <div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#horse">Horse</a>
          </li>
          <li>
            <a href="#lizard">Lizard</a>
          </li>
          <li>
            <a href="#bear">Bear</a>
          </li>
          <li>
            <a href="#eagle">Eagle</a>
          </li>
          <li>
            <a href="#dolphin">Dolphin</a>
          </li>
        </ul>
      </div>
    </div>

  );
}

// Function component for a content area
const Horse = () => {
  return (
    <div className="horse panel panel-default" id="horse">
      <div className="panel-heading">
        <h3 className="panel-title">Horse</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <p>The horse (Equus ferus caballus)[2][3] is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. </p>
            <p>The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today. Humans began to domesticate horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated, such as the endangered Przewalski's horse, a separate subspecies, and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior.</p>
          </div>
          <div className="col-md-4">
            <img src="http://ashs.com.au/images/New_Buttons-2017-03-24/StudBook3.png" alt="Horse" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Function component for a content area
const Lizard = () => {
  return (
    <div className="lizard panel panel-default" id="lizard">
      <div className="panel-heading">
        <h3 className="panel-title">Lizard</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species,[1] ranging across all continents except Antarctica, as well as most oceanic island chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia which are also squamates. Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon.</p>
            <p>Most lizards are quadrupedal, running with a strong side-to-side motion. Others are legless, and have long snake-like bodies. Some such as the forest-dwelling Draco lizards are able to glide. They are often territorial, the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo.</p>
          </div>
          <div className="col-md-4">
            <img src="http://www.backwaterreptiles.com/lizards/files/anoles-for-sale.jpg" alt="Lizard" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Function component for a content area
const Bear = () => {
  return (
    <div className="bear panel panel-default" id="bear">
      <div className="panel-heading">
        <h3 className="panel-title">Bear</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <p>Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails.</p>
            <p>While the polar bear is mostly carnivorous, and the giant panda feeds almost entirely on bamboo, the remaining six species are omnivorous with varied diets. With the exception of courting individuals and mothers with their young, bears are typically solitary animals. They may be diurnal or nocturnal and have an excellent sense of smell. Despite their heavy build and awkward gait, they are adept runners, climbers, and swimmers. Bears use shelters, such as caves and logs, as their dens; most species occupy their dens during the winter for a long period of hibernation, up to 100 days.</p>
          </div>
          <div className="col-md-4">
            <img src="http://p.vitalmx.com/photos/forums/2016/11/08/159439/s1200_IMG_0468.jpg" alt="Bear" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Function component for a content area
const Eagle = () => {
  return (
    <div className="eagle panel panel-default" id="eagle">
      <div className="panel-heading">
        <h3 className="panel-title">Eagle</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <p>Eagles are large, powerfully built birds of prey, with heavy heads and beaks. Even the smallest eagles, such as the booted eagle (Aquila pennata), which is comparable in size to a common buzzard (Buteo buteo) or red-tailed hawk (B. jamaicensis), have relatively longer and more evenly broad wings, and more direct, faster flight – despite the reduced size of aerodynamic feathers.</p>
            <p> Most eagles are larger than any other raptors apart from some vultures. The smallest species of eagle is the South Nicobar serpent eagle (Spilornis klossi), at 450 g (0.99 lb) and 40 cm (16 in). The largest species are discussed below. Like all birds of prey, eagles have very large, hooked beaks for ripping flesh from their prey, strong, muscular legs, and powerful talons. The beak is typically heavier than that of most other birds of prey. Eagles' eyes are extremely powerful, having up to 3.6 times human acuity for the martial eagle, which enables them to spot potential prey from a very long distance.[2] This keen eyesight is primarily attributed to their extremely large pupils which ensure minimal  diffraction (scattering) of the incoming light. The female of all known species of eagles is larger than the male.</p>
          </div>
          <div className="col-md-4">
            <img src="http://www.baldeagleinfo.com/images/eagleBC.jpg" alt="Eagle" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Function component for a content area
const Dolphin = () => {
  return (
    <div className="dolphin panel panel-default" id="dolphin">
      <div className="panel-heading">
        <h3 className="panel-title">Dolphin</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <p>Dolphins are a widely distributed and diverse group of aquatic mammals. They are an informal grouping within the order Cetacea, excluding whales and porpoises, so to zoologists the grouping is paraphyletic.</p>
            <p> The dolphins comprise the extant families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the new world river dolphins), and Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species of dolphins. Dolphins, alongside other cetaceans, belong to the clade Cetartiodactyla with even-toed ungulates. Cetaceans' closest living relatives are the hippopotamuses, having diverged about 40 million years ago.</p>
          </div>
          <div className="col-md-4">
            <img src="https://i.pinimg.com/736x/1c/2f/f0/1c2ff05ad6165523c782e81f14592fe2--baby-dolphins-cute-dolphins.jpg" alt="Dolphin" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
