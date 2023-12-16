import React from 'react'
import { YMaps ,Map ,Placemark,FullscreenControl,TrafficControl,RouteButton} from 'react-yandex-map'
function App() {
  return (
    <div className=''>
<YMaps>
    <Map  defaultState={{
    center: [41.338663, 69.334790],
    zoom: 13
  }}>
      <Placemark geometry={[41.338663, 69.334790]} />
      <FullscreenControl />
      <TrafficControl options={{
      float: 'right'
    }} />
    <RouteButton options={{
      float: 'right'
    }} />
    </Map>
  </YMaps>
    </div>
  )
}

export default App