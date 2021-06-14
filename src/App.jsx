import { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, MainSection } from './styled-components/app.styles'
import { Button } from './styled-components/button.styles';
import { themes } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const getOppositeTheme = useCallback(
    () => (currentTheme === 'light') ? 'dark' : 'light',
    [currentTheme],
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>Welcome to Web Dev Pills</h1>
          <h4>You are in {currentTheme} mode.</h4>
          <Button
            onClick={() => setCurrentTheme(getOppositeTheme())}>
            switch to {getOppositeTheme()}</Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
