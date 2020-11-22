import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
  const navermaps = window.naver.maps;

  const latlngs =[
    [37.4506738, 126.6538088],[37.4506738, 126.653338],[37.4506738, 126.62228],[37.4506738, 126.666688]]
  const latlngsList = latlngs.map(
    (latlngs)=>({latlngs})
  );

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh', padding : '3rem'}}>
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.4506738, lng: 126.6538088 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >
      
      <Marker 
        position={new navermaps.LatLng(37.4506738, 126.6538088)}
        onClick={() => {
          alert('a')
        }}
      />
      <Marker 
        position={new navermaps.LatLng(37.4506738, 126.69558)}
        onClick={() => {
          alert('b')
        }}
      />
      <Marker 
        position={new navermaps.LatLng({latlngsList})}
        onClick={() => {
          alert('매핑?')
        }}
      />
     </NaverMap>
    </div>
  );
}

function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'jcagz5iklw'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;