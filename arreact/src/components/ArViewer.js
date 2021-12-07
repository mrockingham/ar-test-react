import useScript from '../hooks/useScript';
// import 'aframe';

export const ArViewer = () => {
  // useScript('https://aframe.io/releases/1.0.4/aframe.min.js');
  // useScript(
  //   'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js'
  // );
  // useScript(
  //   'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'
  // );
  return (
    <div style={{ margin: '0', overflow: 'hidden' }}>
      <a-scene
        vr-mode-ui="enabled: false"
        // embedded
        arjs="sourceType: webcam;  debugUIEnabled: false;"
      >
        <a-text
          value="Mike is here."
          scale="0.1 0.1 0.1"
          gps-entity-place="latitude: 29.1724435; longitude: -81.0011331;"
        ></a-text>
        <a-camera gps-camera></a-camera>
      </a-scene>
    </div>
  );
};
