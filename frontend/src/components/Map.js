// Cesium imports
import { Viewer, GeoJsonDataSource, ScreenSpaceEvent, ScreenSpaceEventHandler, Scene } from "resium";
import { Entity, Color, NearFarScalar, DistanceDisplayCondition, ScreenSpaceEventType, BoundingSphere, VRTheWorldTerrainProvider } from "cesium";
// React imports
import { Component } from "react";
// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import PathicNavbar from "./Navbar.js"

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
      <Container fluid>
        <Row><Col>Beep</Col></Row>
        <Row>
          <Col>
            <Viewer
              ref={ref => { this.viewerComponent = ref; }}
              //full
              resize
              animation={false}
              timeline={false}
              vrButton={true}
              // terrainProvider={ new VRTheWorldTerrainProvider({               url: 'https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/' }) }
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
                data={"http://192.168.0.99:5050/Pathic"}
                onLoad={g => {
                  const entities = g.entities.values;

                  for (let i=0; i<entities.length; i++) {
                    const entity = entities[i];
                    const center = BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;

                    entity.position = center;
                    entity.label = {text:entity.name, scaleByDistance:new NearFarScalar(1e5, 0.6, 5e5, 0)};

                    entity.polygon.distanceDisplayCondition = new DistanceDisplayCondition(0,5e5);
                    entity.polygon.material = Color.fromRandom({alpha:0.6});
                    entity.polygon.fill = true;
                    entity.polygon.outline = true;
                    entity.polygon.outlineColor = Color.WHITE;
                    entity.polygon.outlineWidth = 2;
                  }
                }}
              />

              {/*Edit scene to highlight hovered entities*/}
              <ScreenSpaceEventHandler useDefault>
                <ScreenSpaceEvent action={this.mouseEvent} type={ScreenSpaceEventType.MOUSE_MOVE} />
              </ScreenSpaceEventHandler>
                
            </Viewer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
