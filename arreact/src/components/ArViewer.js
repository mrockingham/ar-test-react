import useScript from '../hooks/useScript';
// import 'aframe';

export const ArViewer = () => {
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
          animation-mixer
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};
