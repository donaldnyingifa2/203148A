import React from 'react';

interface Props {
  children: React.ReactNode;
}

const CenteredContent: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {children}
    </div>
  );
};

// export default CenteredContent;

function App() {

  return (
    <>
      <div>
        <CenteredContent>
          <div>This content will be centered</div>
        </CenteredContent>

      </div>
    </>
  )
}

export default App
