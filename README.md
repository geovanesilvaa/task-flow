# Este foi um projeto que aprendi no curso de Desenvolvimento Mobile

## Introdução
Este projeto foi desenvolvido durante o curso de Desenvolvimento Mobile, utilizando **React Native** e **AsyncStorage** para executar um CRUD (Create, Read, Update, Delete) dentro do aplicativo. O objetivo é armazenar dados localmente no dispositivo do usuário e permitir manipulações dinâmicas desses dados de forma eficiente.

## Tecnologias Utilizadas
O projeto foi desenvolvido com as seguintes tecnologias:
- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **AsyncStorage**: Solução para armazenamento local de dados no dispositivo.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Expo**: Ferramenta para facilitar o desenvolvimento e execução do app.
- **React Native Flash Message**: Biblioteca para exibir mensagens de feedback ao usuário.
- **Safe Area Context & Screens**: Utilizadas para melhorar a compatibilidade com diferentes dispositivos.

## Dependências Utilizadas
Abaixo estão listadas as dependências e suas respectivas versões utilizadas no projeto:

### **Dependências de Produção**
```json
"dependencies": {
    "@react-native-async-storage/async-storage": "1.23.1",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/native": "^6.1.18",
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "expo-updates": "~0.25.27",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-flash-message": "^0.4.2",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1"
}
```

### **Dependências de Desenvolvimento**
```json
"devDependencies": {
    "@babel/core": "^7.20.0"
}
```

## Como Rodar o Projeto
Siga os passos abaixo para rodar o projeto no seu emulador ou celular:

### **1. Clonar o Repositório**
Abra o terminal e execute:
```sh
git clone https://github.com/seu-usuario/task-flow.git
cd task-flow
```

### **2. Instalar as Dependências**
Para instalar todas as dependências necessárias, execute:
```sh
npm install
```

### **3. Executar o Projeto no Expo**
Para rodar o app no emulador ou dispositivo físico, utilize o Expo:
```sh
npx expo start
```
Isso abrirá o **Metro Bundler** no navegador.

### **4. Rodar no Emulador Android**
Caso tenha um emulador configurado, pressione **'a'** no terminal ou clique em **"Run on Android device/emulator"**.

### **5. Rodar no iOS (Apenas para Mac)**
Caso esteja utilizando um Mac com Xcode configurado, pressione **'i'** no terminal ou clique em **"Run on iOS simulator"**.

### **6. Rodar no Celular (Android ou iOS)**
Para rodar no seu celular:
1. Baixe o app **Expo Go** na Play Store ou App Store.
2. No terminal, escaneie o QR Code exibido no **Metro Bundler**.
3. O app será executado diretamente no seu celular.

## Considerações Finais
Este projeto serviu como aprendizado para utilizar o React Native com armazenamento local, navegação e outras ferramentas essenciais para desenvolvimento móvel. Caso tenha dúvidas, sinta-se à vontade para contribuir ou abrir uma issue no repositório. 🚀

