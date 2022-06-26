// import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer,Popup,Marker,Circle } from 'react-leaflet';
import {data} from './Data'
function App() {
  return (
    <div className="App">
      <MapContainer center={[34.80746, -40.4796]} zoom={3} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[	20.593684, 	78.96288]}>
    
    {
      data.map(country=>(
          <Circle
          center={[country.lati,country.longi]}
          fillOpacity={0.4}
          color={'rgb(46, 46, 255)'}
          fillColor={'#2E2EFF'}
          radius={country.data*3000}
          >
              <Popup>
                <p>Region : : {country.region}</p>
                <p>Data Usage : : {country.data}</p>
              </Popup>
          </Circle>
      ))
    }
  </Marker>
</MapContainer>
          
    </div>
  );
}

export default App;
