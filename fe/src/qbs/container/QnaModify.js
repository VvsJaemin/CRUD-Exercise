import React, {useState} from 'react'
import axios from 'axios'
const QnaModify = (props) => {
    const [update, setUpdate] = useState({})
    
    const Modify = e => {
        e.preventDefault()
        axios.put(`http://localhost:8080/qna/modify/${props.match.params.id}`)
        .then(res=>{
            console.log(res)
            setUpdate(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        }

    return (  
    <form>
        <table>
            <thead>게시글 수정</thead>
            <tbody>
                <tr>
                <th>제목 :  </th>
                <td><input type='text' placeholder='제목을 입력하세요' name='title'/></td>
                </tr>
                <tr>
                    <th>내용 :</th>
                    <td><textarea cols="30" rows='10' placeholder='내용을 입력하세요' name='content'></textarea></td>
                </tr>
               
                <tr>
                    <td>
                        <input type='button' onClick={Modify} value='등록'/>
                       
                    </td>
                </tr>
            </tbody>
        </table>
        </form>)
}

export default QnaModify;