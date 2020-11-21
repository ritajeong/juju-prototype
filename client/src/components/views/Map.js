import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
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
    />
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