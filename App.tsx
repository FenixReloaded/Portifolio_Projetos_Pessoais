import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() { //a raiz da aplicacao deve ser "export default" para entender que é o inicio, o arquivo de entrada da aplicacao
  return ( //usa-se return para exibir em tela
    <>
      <StatusBar 
        barStyle= "light-content" 
        backgroundColor= "transparent"
        translucent 
        />
      <Home />
    </>
  );
}

