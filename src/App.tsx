import './App.css'

import Grid from '@mui/material/Grid2' 
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'

import DataFetcher from './functions/DataFetcher';


function App() {

  // URL de datos hidrológicos (eliminado porque no se usa)

  // Usar DataFetcher para obtener los datos
  const { data, loading, error } = DataFetcher();

  // Datos del estudiante
  const studentData = {
    apellidos: "Ortiz Arriaga",
    nombres: "Cecilia Elizabeth",
    paralelo: "1"
  };

  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>
          <Student apellidos={studentData.apellidos} nombres={studentData.nombres} paralelo={studentData.paralelo} />
        </Grid>
        
        {/* HydrologyTable */}
        <Grid size={{ xs: 12 }}>
          <HydrologyTable data={data} loading={loading} error={error} />
        </Grid>
        
       
    </Grid>
  )
}

export default App
