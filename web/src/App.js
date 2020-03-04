import React from "react";

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return(
<div id="app">
  <aside>
<strong>Cadastrar</strong>
  <form>
    <div class="input-block">
    <label htmlFor="gthub_username">Usuário do Github</label>
    <input name="github_username" id="username_github" require/>
    </div>

    <div class="input-block">
    <label htmlFor="techs">Técnologias</label>
    <input name="techs" id="techs" require/>
    </div>

    <div className="input-group">
    <div class="input-block">
    <label htmlFor="latitude">Latitude</label>
    <input name="latitude" id="latitude" require/>
    </div>

    <div class="input-block">
    <label htmlFor="longitude">Longitude</label>
    <input name="longitude" id="longitude" require/>
    </div>
    </div>
<button type="submit">Salvar</button>
  </form>
  </aside>
  <main>

  </main>
</div>
  );
}

export default App;
