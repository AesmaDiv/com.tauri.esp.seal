import { Box } from '@mui/system';
import AppHeader from './components/AppHeader/AppHeader';
import RecordList from './components/RecordList/RecordList';
import RecordForm from './components/RecordForm/RecordForm';
import TestingForm from './components/TestingForm/TestingForm';
import AccordionWrapper from './components/AccordionWrapper/AccordionWrapper';
import { HardwareProvider } from './hardware/context';
import { MessageBox, MessageProvider } from './components/MessageBox/MessageBox';

import { PressProps, PRESS_DATANAMES } from './configs/cfg_press';
import { PowerProps, POWER_DATANAMES } from './configs/cfg_power';
import { COLORS } from './configs/cfg_application';

import Protocol from './components/Protocol/Protocol';


function App() {
  console.log("*** APP RENDER ***");
  return (
    <Box display={'flex'} flexDirection={'column'} width={'100vw'} height={'100vh'}
      sx={{
        backgroundColor: COLORS.background_app,
        '.AppHeader,.AccordionTabs,.RecordList,.RLOptions,.RLHeaders,.MuiFormLabel-root': {
          backgroundColor: COLORS.background_form,
          color: COLORS.font_app,
        },
        '.RLRow.MuiTableRow-root:hover': {
          backgroundColor: COLORS.background_app,
        },
        '.RLRow.Mui-selected': {
          backgroundColor: COLORS.primary,
        },
        '.MuiTableCell-root': {
          color: COLORS.font_app,
        },
        '.MuiInputBase-input,.MuiSelect-select': {
          color: COLORS.font_input,
        }
      }}
    >
      <MessageProvider>
        <AppHeader height={"50px"}/>
        <Box component="section"display='flex' flexDirection={'row'} gap={'10px'} height={'calc(100% - 70px)'} padding={1}>
          <RecordList width="600px" height="100%"/>
          <Box display={'flex'} flexDirection={'column'} width={"100%"} height={"100%"}>
            <HardwareProvider>
              <AccordionWrapper direction='column'>
                <RecordForm  accordion_key='key_testinfo'  accordion_title='Информация об объекте'/>
                <TestingForm accordion_key='key_testpress' accordion_title='Давление диафрагм' props={PressProps} data_fields={PRESS_DATANAMES}/>
                <TestingForm accordion_key='key_testpower' accordion_title='Потребляемая мощность' props={PowerProps} data_fields={POWER_DATANAMES}/>
                <Protocol    accordion_key='key_protocol'  accordion_title='Протокол испытания'/>
              </AccordionWrapper>
            </HardwareProvider>
          </Box>
        </Box>
      <MessageBox/>
      </MessageProvider>
    </Box>
  );
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";

// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <div className="row">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             greet();
//           }}
//         >
//           <input
//             id="greet-input"
//             onChange={(e) => setName(e.currentTarget.value)}
//             placeholder="Enter a name..."
//           />
//           <button type="submit">Greet</button>
//         </form>
//       </div>

//       <p>{greetMsg}</p>
//     </div>
//   );
// }

// export default App;
