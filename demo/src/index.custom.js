import React, {Component, createRef} from "react";
import { render } from "react-dom";

import CanvasDraw from "../../src";
import classNames from "./index.css";
import testImage from './snow.jpeg';

class Demo extends Component {
    canvasRef = createRef();

  state = {
    color: "#ffc600",
    width: 2280,
    height: 1908,
    artboardWidth: 2880,
    artboardHeight: 1908,
    brushRadius: 10,
    lazyRadius: 12,
    backgroundImg: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
      "https://i.imgur.com/a0CGGVC.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%A1%D0%BD%D0%B5%D0%B3_2015.jpg/2880px-%D0%A1%D0%BD%D0%B5%D0%B3_2015.jpg",
    ],
    image: null,
    mask: null,
  };

  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    // window.setInterval(() => {
    //   this.setState({
    //     color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    //   });
    // }, 2000);
    //
    // // let's change the background image every 2 seconds. fun!
    // window.setInterval(() => {
    //   if (
    //     this.state.imgs &&
    //     this.state.imgs.length &&
    //     this.state.backgroundImg
    //   ) {
    //     let img = '';
    //     let imgs = this.state.imgs;
    //     for (let i = 0; i < imgs.length; i++) {
    //       if (this.state.backgroundImg !== imgs[i]) {
    //         img = imgs[i];
    //       }
    //     }
    //
    //     this.setState({
    //       backgroundImg: img,
    //     });
    //   }
    // }, 2000);

  }
  render() {
    return (
      <div>
        <h1>React Canvas Draw</h1>
        <iframe
          title="GitHub link"
          src="https://ghbtns.com/github-btn.html?user=embiem&repo=react-canvas-draw&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />



          <h2>Background Image</h2>
          <p>You can also set the `imgSrc` prop to draw on a background-image.</p>
          <p>
              It will automatically resize to fit the canvas and centered vertically
              & horizontally.
          </p>

          <div className={classNames.tools}>
              <button
                  onClick={() => {
                      localStorage.setItem(
                          "savedDrawing",
                          this.saveableCanvas.getSaveData()
                      );
                  }}
              >
                  Save
              </button>
              <button onClick={() => {
                    const { image, mask } = this.canvasRef.current.getImages('outpaint');

                    this.setState({
                        image,
                        mask
                    });
                }
              }>
                  Get images
              </button>
              <div>
                  <label>Artboard Width:</label>
                  <input
                      type="number"
                      value={this.state.artboardWidth}
                      onChange={e =>
                          this.setState({ artboardWidth: parseInt(e.target.value, 10) })
                      }
                  />
              </div>
              <div>
                  <label>Artboard Height:</label>
                  <input
                      type="number"
                      value={this.state.artboardHeight}
                      onChange={e =>
                          this.setState({ artboardHeight: parseInt(e.target.value, 10) })
                      }
                  />
              </div>
              <div>
                  <label>Canvas Width:</label>
                  <input
                      type="number"
                      value={this.state.width}
                      onChange={e =>
                          this.setState({ artboardHeight: parseInt(e.target.value, 10) })
                      }
                  />
              </div>
              <div>
                  <label>Canvas Height:</label>
                  <input
                      type="number"
                      value={this.state.height}
                      onChange={e =>
                          this.setState({ artboardHeight: parseInt(e.target.value, 10) })
                      }
                  />
              </div>
          </div>
          <div style={{ width: '100%', height: '640px', overflow: 'scroll' }}>
              <CanvasDraw
                  ref={this.canvasRef}
                  brushColor="rgba(155,12,60,1)"
                  imgSrc={testImage}
                  artboardDimensions={{ width: this.state.artboardWidth, height: this.state.artboardHeight }}
                  imageDimensions={{ width: 2880, height: 1908, originalWidth: 2880, originalHeight: 1908 }}
                  canvasDimensions={{ width: this.state.artboardWidth, height: this.state.artboardHeight }}
              />
          </div>

        <img width="50%" alt="" src={this.state.image} />
        <img width="50%" alt="" src={this.state.mask} />


        {/*<h2>default</h2>*/}
        {/*<p>*/}
        {/*  This is a simple <span>{`<CanvasDraw />`}</span> component with*/}
        {/*  default values.*/}
        {/*</p>*/}
        {/*<p>Try it out! Draw on this white canvas:</p>*/}
        {/*<CanvasDraw onChange={() => console.log("onChange")} />*/}
        {/*<h2>Custom Brush-Color</h2>*/}
        {/*<p>*/}
        {/*  Let's spice things up by using custom brush colors{" "}*/}
        {/*  <span>{`<CanvasDraw brushColor={this.state.color} />`}</span>. We*/}
        {/*  randomly change them every 2 seconds. But you could easily use a*/}
        {/*  color-picker!*/}
        {/*</p>*/}
        {/*<div>*/}
        {/*  Current color:{" "}*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: "inline-block",*/}
        {/*      width: "24px",*/}
        {/*      height: "24px",*/}
        {/*      backgroundColor: this.state.color,*/}
        {/*      border: "1px solid #272727"*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<CanvasDraw brushColor={this.state.color} />*/}
        {/*<h2>Background Image</h2>*/}
        {/*<p>You can also set the `imgSrc` prop to draw on a background-image.</p>*/}
        {/*<p>*/}
        {/*  It will automatically resize to fit the canvas and centered vertically*/}
        {/*  & horizontally.*/}
        {/*</p>*/}
        {/*<CanvasDraw*/}
        {/*  brushColor="rgba(155,12,60,0.3)"*/}
        {/*  imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"*/}
        {/*/>*/}

        {/*<h2>Refreshable Background Image</h2>*/}
        {/*<p>This will refresh the background in every two seconds.</p>*/}
        {/*<CanvasDraw*/}
        {/*  brushColor="rgba(155,12,60,0.3)"*/}
        {/*  imgSrc={this.state.backgroundImg}*/}
        {/*/>*/}
        {/*<h2>Hide UI</h2>*/}
        {/*<p>To hide the UI elements, set the `hideInterface` prop. You can also hide the grid with the `hideGrid` prop.</p>*/}
        {/*<CanvasDraw hideInterface hideGrid />*/}
        {/*<h2>Zoom & Pan</h2>*/}
        {/*<p>*/}
        {/*  Set the <span>enablePanAndZoom</span> prop to enable mouse scrolling*/}
        {/*  and panning (using Ctrl), pinch zooming, and two-finger panning. If*/}
        {/*  you want to ensure that all lines stay within the bounds of the*/}
        {/*  canvas, set the <span>clampLinesToDocument</span> property.*/}
        {/*</p>*/}
        {/*<CanvasDraw*/}
        {/*  enablePanAndZoom*/}
        {/*  clampLinesToDocument*/}
        {/*  gridColor="#ccc"*/}
        {/*  imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"*/}
        {/*/>*/}
        {/*<h2>Save & Load</h2>*/}
        {/*<p>*/}
        {/*  This part got me most excited. Very easy to use saving and loading of*/}
        {/*  drawings. It even comes with a customizable loading speed to control*/}
        {/*  whether your drawing should load instantly (loadTimeOffset = 0) or*/}
        {/*  appear after some time (loadTimeOffset > 0){" "}*/}
        {/*  <span>{`<CanvasDraw loadTimeOffset={10} />`}</span>*/}
        {/*</p>*/}
        {/*<p>Try it out! Draw something, hit "Save" and then "Load".</p>*/}
        {/*<div className={classNames.tools}>*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      localStorage.setItem(*/}
        {/*        "savedDrawing",*/}
        {/*        this.saveableCanvas.getSaveData()*/}
        {/*      );*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Save*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      this.saveableCanvas.eraseAll();*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Erase*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      this.saveableCanvas.undo();*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Undo*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      console.log(this.saveableCanvas.getDataURL());*/}
        {/*      alert("DataURL written to console")*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    GetDataURL*/}
        {/*  </button>*/}
        {/*  <div>*/}
        {/*    <label>Width:</label>*/}
        {/*    <input*/}
        {/*      type="number"*/}
        {/*      value={this.state.width}*/}
        {/*      onChange={e =>*/}
        {/*        this.setState({ width: parseInt(e.target.value, 10) })*/}
        {/*      }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label>Height:</label>*/}
        {/*    <input*/}
        {/*      type="number"*/}
        {/*      value={this.state.height}*/}
        {/*      onChange={e =>*/}
        {/*        this.setState({ height: parseInt(e.target.value, 10) })*/}
        {/*      }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label>Brush-Radius:</label>*/}
        {/*    <input*/}
        {/*      type="number"*/}
        {/*      value={this.state.brushRadius}*/}
        {/*      onChange={e =>*/}
        {/*        this.setState({ brushRadius: parseInt(e.target.value, 10) })*/}
        {/*      }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label>Lazy-Radius:</label>*/}
        {/*    <input*/}
        {/*      type="number"*/}
        {/*      value={this.state.lazyRadius}*/}
        {/*      onChange={e =>*/}
        {/*        this.setState({ lazyRadius: parseInt(e.target.value, 10) })*/}
        {/*      }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<CanvasDraw*/}
        {/*  ref={canvasDraw => (this.saveableCanvas = canvasDraw)}*/}
        {/*  brushColor={this.state.color}*/}
        {/*  brushRadius={this.state.brushRadius}*/}
        {/*  lazyRadius={this.state.lazyRadius}*/}
        {/*  canvasWidth={this.state.width}*/}
        {/*  canvasHeight={this.state.height}*/}
        {/*/>*/}
        {/*<p>*/}
        {/*  The following is a disabled canvas with a hidden grid that we use to*/}
        {/*  load & show your saved drawing.*/}
        {/*</p>*/}
        {/*<button*/}
        {/*  onClick={() => {*/}
        {/*    this.loadableCanvas.loadSaveData(*/}
        {/*      localStorage.getItem("savedDrawing")*/}
        {/*    );*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Load what you saved previously into the following canvas. Either by*/}
        {/*  calling `loadSaveData()` on the component's reference or passing it*/}
        {/*  the `saveData` prop:*/}
        {/*</button>*/}
        {/*<CanvasDraw*/}
        {/*  disabled*/}
        {/*  hideGrid*/}
        {/*  ref={canvasDraw => (this.loadableCanvas = canvasDraw)}*/}
        {/*  saveData={localStorage.getItem("savedDrawing")}*/}
        {/*/>*/}
        {/*<p>*/}
        {/*  The saving & loading also takes different dimensions into account.*/}
        {/*  Change the width & height, draw something and save it and then load it*/}
        {/*  into the disabled canvas. It will load your previously saved*/}
        {/*  masterpiece scaled to the current canvas dimensions.*/}
        {/*</p>*/}
        {/*<p>*/}
        {/*  That's it for now! Take a look at the{" "}*/}
        {/*  <a href="https://github.com/mBeierl/react-canvas-draw/tree/master/demo/src">*/}
        {/*    source code of these examples*/}
        {/*  </a>*/}
        {/*  .*/}
        {/*</p>*/}
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
