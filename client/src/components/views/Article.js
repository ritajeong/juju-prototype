import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


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

    
const Article = () => {
    return (
        <TableRow>
            <TableCell>{articles.no}</TableCell>
            <TableCell>{articles.title}</TableCell>
            <TableCell>{articles.author}</TableCell>
            <TableCell>{articles.date}</TableCell>
        </TableRow>
    );
};

export default Article;