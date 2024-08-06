import * as S from "./QRCodeGenerator.style";
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';


const QRCodeGenerator = () => {
const [url, setUrl] = useState('');
  
useEffect(() => {
  setUrl(window.location.href);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '20px' }}>
        {url && <QRCode value={url} size={114} level={"H"} includeMargin={true} />}
      </div>
    </div>
  );
};
  
export default QRCodeGenerator;