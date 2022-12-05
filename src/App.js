import AllRoutes from "./Pages/AllRoutes";

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const steps = [
  {
      id: '0',
      message: 'Hey!',
      trigger: '1',
  }, {
      id: '1',
      message: 'May I help You .. ?',
      trigger: '2'
  }, {
      id: '2',
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " Ok! , May I know your name please?",
      trigger: 4
  }, {
      id:'4',
      user:true,
      trigger:'5',
  },{
      id: '5',
      message : "Ok {previousValue}, I am Looking to your problem ....",
      trigger:'6',
  },{
      id:'6',
      options: [
          { value: 1, label: 'Ok' },
          { value: 2, label: 'Cancel' },

      ],
      end :true
  }
];


const theme = {
  background: 'white',
  headerBgColor: 'rgb(0 1 65)',
  headerFontSize: '20px',
  botBubbleColor: ' #329c92;',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: ' #00b9c6',
  userFontColor: 'white',
};


const config = {
  botAvatar: "https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png",
  floating: true,
};



function App() {




  return (
    <div className="App">
      <AllRoutes/>
      <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Chat Bot "
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
    </div>
  );
}

export default App;