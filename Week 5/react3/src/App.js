import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Aravind"
        School="SRM Institute of Science and Technology"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;