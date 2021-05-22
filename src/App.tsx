import React from 'react';
import './App.css';
import { ItemShowcase } from './ItemShowcase';
import { Item, Stat, StatModifier } from './item';
import { Router, Link } from '@reach/router';
import { ItemShare } from './ItemShare';
import { ItemCreator } from './ItemCreator';
import 'reactjs-popup/dist/index.css';

const testUrl = '%7B%22name%22%3A%22Slavic%20Shirt%22%2C%22image%22%3A%22https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdiscoelysium_gamepedia_en%2Fimages%2Fb%2Fb5%2FShirt_dress_disco.png%22%2C%22stats%22%3A%5B%7B%22modifier%22%3A1%2C%22stat%22%3A%7B%22name%22%3A%22Inland%20Empire%22%2C%22color%22%3A%22%23523f89%22%7D%2C%22comment%22%3A%22Mysterious%20russian%20soul%22%7D%2C%7B%22modifier%22%3A20%2C%22stat%22%3A%7B%22name%22%3A%22years%20to%20Putin\'s%20presidency%22%2C%22color%22%3A%22%239a998f%22%7D%2C%22comment%22%3A%22Somehow%20incompatible%20with%20democratic%20ideals%22%7D%5D%7D';

function App() {
  const item = new Item('Slavic Shirt', 'https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/b/b5/Shirt_dress_disco.png', [
    new StatModifier(1, new Stat('Inland Empire', '#523f89'), 'Mysterious russian soul'),
    new StatModifier(20, new Stat('years to Putin\'s presidency', '#9a998f'), 'Somehow incompatible with democratic ideals')
  ]);
  const jsonParam = encodeURIComponent(JSON.stringify(item));
  console.log(jsonParam);
  return (
    <div className="App container-fluid" style={{ backgroundImage: "url(/background.png)" }}>
    <Router>
      <ItemCreator path="itemCreator"></ItemCreator>
      <ItemShare path="itemShare/:encodedItem"></ItemShare>
    </Router>
    </div>
  );
}

//  encodedItem={jsonParam}

export default App;

// %7B%22name%22%3A%22Slavic%20Shirt%22%2C%22image%22%3A%22https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdiscoelysium_gamepedia_en%2Fimages%2Fb%2Fb5%2FShirt_dress_disco.png%22%2C%22stats%22%3A%5B%7B%22modifier%22%3A1%2C%22stat%22%3A%7B%22name%22%3A%22Inland%20Empire%22%2C%22color%22%3A%22%23523f89%22%7D%2C%22comment%22%3A%22Mysterious%20russian%20soul%22%7D%2C%7B%22modifier%22%3A20%2C%22stat%22%3A%7B%22name%22%3A%22years%20to%20Putin's%20presidency%22%2C%22color%22%3A%22%239a998f%22%7D%2C%22comment%22%3A%22Somehow%20incompatible%20with%20democratic%20ideals%22%7D%5D%7D
