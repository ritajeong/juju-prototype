import React, {Component} from 'react';
import styles from './Community.scss';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
 
import Article from './Article' 

const articles = [
    {
    'no': 1,
    'title': '제목1',
    'author': '홍길동',
    'date': '1231222'
    },
    {
    'no': 2,
    'title': '제목2',
    'author': '홍길동',
    'date': '9623232'
    },
    {
    'no': 3,
    'title': '제목1',
    'author': '홍길동',
    'date': '962342322'
    }
    ]
    
const Community = () => {
    return (
        <div className="community">
        <Table>
            <TableHead>
                <TableCell>번호</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>작성자</TableCell>
                <TableCell>날짜</TableCell>
            </TableHead>
            <TableBody>
                {articles.map(c => {
                return <Article key={c.no} no={c.no} title={c.title} author={c.authro} date={c.date} />
                })}
            </TableBody>
        </Table>
        </div>
    );
};

export default Community;