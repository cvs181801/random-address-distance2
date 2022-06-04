
import './App.css';

function App() {

 // function initMap() {

    const uluru = { lat: -25.344, lng: 131.031 };
  
    const map = new google.maps.Map({
        zoom: 10,
        center: uluru,
    });
   
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
  //}
  
  //window.initMap = initMap;


  return (
    <div className="App">
      <header className="App-header">
        
    <p>Input number of available drivers:  </p>
    <input type="number"></input>
    <div id="map">{map}</div>
       
      </header>
    </div>
  );
}

export default App;
