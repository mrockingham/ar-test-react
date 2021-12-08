import useScript from '../hooks/useScript';
// import 'aframe';

export const ArViewer = () => {
  return (
    <div style={{ margin: '0', overflow: 'hidden' }}>
      test
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam;  debugUIEnabled: false;"
      >
        <a-text
          value="Mike is here."
          scale="50 50 50"
          gps-entity-place="latitude: 29.1724301; longitude: -81.0010849;"
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};
