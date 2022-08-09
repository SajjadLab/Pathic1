import { Entity, Viewer, GeoJsonDataSource, LabelGraphics, ScreenSpaceEvent, ScreenSpaceEventHandler, Scene } from "resium";
import { Cartesian3, Color, NearFarScalar, DistanceDisplayCondition, ScreenSpaceEventType, BoundingSphere } from "cesium";

function App() {
  return (
    <Viewer
      full animation={false}
      timeline={false}
      vrButton={true}
    >
      {/* Modify scene*/}
      <Scene
        debugShowFramesPerSecond={true}
      />

      {/*Load Terraperiums*/}
      <GeoJsonDataSource
        data={"http://192.168.0.99:5050/Pathic"}
        onLoad={g => {
          const entities = g.entities.values;

          console.log(entities)
          for (let i=0; i<entities.length; i++) {
            const entity = entities[i];
            const center = BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;

            entity.position = center;
            entity.label = {text:entity.name, scaleByDistance:new NearFarScalar(1e5, 0.6, 5e5, 0)};

            entity.polygon.distanceDisplayCondition = new DistanceDisplayCondition(0,5e5);
            entity.polygon.material = Color.fromRandom({alpha:0.6});
            entity.polygon.fill = true;
            entity.polygon.outlineColor = Color.YELLOW;
          }
        }}
      />

      {/*Edit scene to highlight hovered entities*/}
      <ScreenSpaceEventHandler useDefault>
      </ScreenSpaceEventHandler>
        
    </Viewer>
  );
}

const mouseEvent = e => {
  console.log(this);
  const picked = this.viewerComponent.cesiumElement.scene.pick(e.endPosition);
  const id = picked ? picked.id || picked.primitive.id : null;

  if (picked && id instanceof Entity) {
    console.log(picked);
  }

}

export default App;
