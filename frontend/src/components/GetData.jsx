import axios from 'axios';
import { useEffect } from 'react';
function GetData() {
  useEffect(() => {
    axios.get('http://localhost:3001/api').then((resp) => {
      console.log(resp.data);
    });
  });
  return <div className=''></div>;
}

export default GetData;
