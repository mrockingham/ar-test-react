import useScript from '../hooks/useScript';
// import 'aframe';

export const ArViewer = () => {
  return (
    <div style={{ margin: '0', overflow: 'hidden' }}>
      test
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        renderer="antialias: true; alpha: true"
      >
        <a-text
          value="Mike is here."
          scale="10 10 10"
          gps-entity-place="latitude: 29.1724435; longitude: -81.0011331;"
          // gps-entity-place="latitude: 29.1724301; longitude: -81.0010849;"
        ></a-text>
        <a-box
          gps-projected-entity-place="latitude: 29.1724435; longitude: -81.0011331;"
          material="color: red"
          scale="10 10 10"
        ></a-box>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};
