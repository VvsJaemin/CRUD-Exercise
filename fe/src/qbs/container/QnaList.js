import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const QnaList =()=>{

        const [ List, setList ] = useState([]);

        const fetchList = () =>{
          axios.get('http://localhost:8080/qna/list')
          .then(res =>{
            console.log(res)
            setList(res.data)
          })
          .catch((err)=>{
            console.log(err)
          });
        };

    useEffect(()=>{
      console.log('rendering')
      fetchList();
    }, [])


return List.map((qna)=>{
  return(
    
    <table>
    <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr key={qna.boardNo}>
            <td >{qna.boardNo}</td>
            <td><Link to={`QnaRead/${qna.boardNo}`}>{qna.title}</Link></td>
            <td>{qna.writer}</td>
            <td>{qna.regDate}</td>
          </tr>
        </tbody>
    </table>

)
})

}

export default QnaList;