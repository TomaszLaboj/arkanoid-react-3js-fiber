import { Canvas } from "@react-three/fiber";
import "./App.css";

const createRectangles = () => {
  const rectanglesArray: number[][] = [];
  for (let i = 0; i < 12; i += 2) {
    rectanglesArray.push([i, 1, 1]);
  }
  return rectanglesArray;
};

const rectangles: number[][] = createRectangles();

interface RectProps {
  size: number[];
  position: number[];
}
const Rect = (props: RectProps) => {
  return (
    <>
      <mesh position={props.position}>
        <boxGeometry args={props.size} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
};

function App() {
  return (
    <>
      <Canvas>
        {rectangles.map((rectangle) => {
          return <Rect size={[1.9, 1, 1]} position={rectangle} />;
        })}
        <directionalLight position={[0, 0, 2]} />
      </Canvas>
    </>
  );
}

export default App;
