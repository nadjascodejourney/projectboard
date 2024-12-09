import Spline from "@splinetool/react-spline";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative", // Wichtig, um andere Positionierungen zu erlauben
      }}
    >
      <Spline
        scene="https://prod.spline.design/5AuydLBp7vqilqqh/scene.splinecode"
        style={{
          position: "absolute", // Überlagert den Viewport
          transform: "translate(-50%, -50%)", // Zentriert relativ zum Mittelpunkt
          top: "50%", // Vertikal zentriert
          left: "50%", // Horizontal zentriert
          width: "80%", // Optionale Größenanpassung
          height: "80%", // Optionale Größenanpassung
        }}
      />
    </div>
  );
}
