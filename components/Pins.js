import React from 'react';
import {Marker} from 'react-map-gl';

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const {data, onClick} = props;

  return data.map((entity, index) => (
    <Marker key={`marker-${index}`} longitude={entity.Position.PositionLon} latitude={entity.Position.PositionLat}>
      <svg
        height={SIZE}
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
        }}
        onClick={() => { console.log(entity); onClick(entity) }}
      >
        <path fill="#f84d4d" stroke="#951212" strokeWidth="0.5" d="M19.25,10.4a13.0663,13.0663,0,0,1-1.4607,5.2235,41.5281,41.5281,0,0,1-3.2459,5.5483c-1.1829,1.7369-2.3662,3.2784-3.2541,4.3859-.4438.5536-.8135.9984-1.0721,1.3046-.0844.1-.157.1852-.2164.2545-.06-.07-.1325-.1564-.2173-.2578-.2587-.3088-.6284-.7571-1.0723-1.3147-.8879-1.1154-2.0714-2.6664-3.2543-4.41a42.2677,42.2677,0,0,1-3.2463-5.5535A12.978,12.978,0,0,1,.75,10.4,9.4659,9.4659,0,0,1,10,.75,9.4659,9.4659,0,0,1,19.25,10.4Z"/>
        <path fill="#fff" stroke="#951212" strokeWidth="0.5" d="M13.55,10A3.55,3.55,0,1,1,10,6.45,3.5484,3.5484,0,0,1,13.55,10Z"/>
      </svg>
    </Marker>
  ));
}

export default React.memo(Pins);