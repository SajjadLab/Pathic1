// Cesium imports
import { Viewer, GeoJsonDataSource, ScreenSpaceEvent, ScreenSpaceEventHandler, Scene } from "resium";
import { Ion, IonResource, Entity, Color, NearFarScalar, DistanceDisplayCondition, ScreenSpaceEventType, BoundingSphere, ArcGISTiledElevationTerrainProvider, createWorldTerrain, ShadowMode } from "cesium";
// React imports
import { Component } from "react";
// Bootstrap imports
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

import PathicNavbar from "./Navbar.js"

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhOGJjN2E4MC0wZmFmLTRlMjEtYWMwZi1lZjRjMWU2NGRkNDciLCJpZCI6MTA0NTUyLCJpYXQiOjE2NjAyOTUxMDF9.4NgroU9rZOF3EWRyWlc4UYXZ-8g-TGTjbCyiWMf5FIg";

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {currentHighlight: null};
  }

  mouseEvent = e => {
    const picked = this.viewerComponent.cesiumElement.scene.pick(e.endPosition);
    const id = picked ? picked.id || picked.primitive.id : null;

    if (picked && id instanceof Entity) {
      this.setState({currentHighlight: id});
      id.polygon.outlineColor = Color.YELLOW;
      id.polygon.outlineWidth = 10;

      if (this.state.currentHighlight && this.state.currentHighlight !== id) {
        const tempId = this.state.currentHighlight;
        tempId.polygon.outlineColor = Color.WHITE;;
        tempId.polygon.outlineWidth = 2;
        this.setState({currentHighlight: null});
      }
    }
    else {
      if (this.state.currentHighlight) {
        const tempId = this.state.currentHighlight;
        tempId.polygon.outlineColor = Color.WHITE;;
        tempId.polygon.outlineWidth = 2;
        this.setState({currentHighlight: null});
      };
    };
  };


  render () {
    return (
      <div>
        <PathicNavbar />
        <div id="cesiumContainer">
          <Viewer
            ref={ref => { this.viewerComponent = ref; }}
            //full
            resize
            useBrowserRecommendedResolution
            animation={false}
            timeline={false}
            vrButton={true}
            terrainProvider={createWorldTerrain({url: IonResource.fromAssetId(1)})}
            terrainShadows={ShadowMode.CAST_ONLY}
            //terrainProvider={ new ArcGISTiledElevationTerrainProvider({               url: 'https://landscape6.arcgis.com/arcgis/rest/services/World_Elevation_GMTED/ImageServer/?{AAPK0371b77ce99b4c0d9659b726b31ef861nCekfAet7q4WUOGCvOtSYdVechD-a5JaSp8PNRj7dQ17m1X1FhDfdl8v-nV7VKoA}' }) }
          >
            {/* Modify scene*/}
            <Scene
              debugShowFramesPerSecond={true}
            />

            {/*Load Terraperiums:
                - For each entity:
                  - find center and add label
                  - modify polygon to show based on zoom (function of area)
                  - modify polygon color based on _, and set base outline color
              */}
            <GeoJsonDataSource
              clampToGround={true}
              data={this.props.tgjs}
              onLoad={g => {
                const entities = g.entities.values;

                for (let i=0; i<entities.length; i++) {
                  const entity = entities[i];
                  const center = BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;

                  entity.polygon.distanceDisplayCondition = new DistanceDisplayCondition(0,5e5);
                  entity.polygon.material = Color.fromRandom({alpha:0.6});
                  entity.polygon.fill = true;
                  entity.polygon.outline = false;
                  entity.polygon.outlineColor = Color.WHITE;
                  entity.polygon.outlineWidth = 2;

                  entity.position = center;
                  entity.label = {text:entity.name, scaleByDistance:new NearFarScalar(1e5, 0.6, 5e5, 0)};
                }
              }}
              onClick={(moment, entity) => { this.viewerComponent.zoomTo(entity); }}
            />

            {/*Edit scene to highlight hovered entities*/}
            <ScreenSpaceEventHandler useDefault>
        {/*<ScreenSpaceEvent action={this.mouseEvent} type={ScreenSpaceEventType.MOUSE_MOVE} />*/}
            </ScreenSpaceEventHandler>
              
          </Viewer>
        </div>
      </div>
    );
  }
}

export default Map;
