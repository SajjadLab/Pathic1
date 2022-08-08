import { Entity, Viewer, GeoJsonDataSource, LabelGraphics } from "resium";
import { Cartesian3, Color, NearFarScalar, DistanceDisplayCondition } from "cesium";

function App() {
  return (
    <Viewer full animation={false} timeline={false}>
      <Entity
        position={Cartesian3.fromDegrees(12.51198, 41.90361, 100)}
        distanceDisplayCondition={new DistanceDisplayCondition(0, 5e2)}
      > 
        <GeoJsonDataSource
          fill={Color.PURPLE.withAlpha(0.3)}
          data={"http://192.168.0.99:5050/Pathic"}
        />
        <LabelGraphics
          text="Roman Kingdom"
          scaleByDistance={new NearFarScalar(1e5, 0.6, 5e5, 0)}
        />
      </Entity>
        
    </Viewer>
  );
}

export default App;
