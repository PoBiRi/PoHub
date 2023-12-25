import axios from 'axios';

const domain = "http://pobijunior.com/"

//get요청 매개변수는 라우터 address와 setData 함수
async function getData(address, setData) {
    try {
        const res = await axios.get(domain + address);
        setData(res.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
}

export default getData;