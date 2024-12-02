import React from 'react';
const Tables = () => {
 return (
 <table style={{ border: '4px solid pink', borderCollapse: 'collapse' }}>
 <thead>
 <tr>
 <th style={{ border: '2px solid green', padding: '20px' }}>Name</th>
 <th style={{ border: '2px solid green', padding: '20px' }}>Age</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td style={{ border: '2px solid green', padding: '20px' }}>Alice</td>
 <td style={{ border: '2px solid green', padding: '20px' }}>24</td>
 </tr>
 <tr>
 <td style={{ border: '2px solid green', padding: '20px' }}>Bob</td>
 <td style={{ border: '2px solid green', padding: '20px' }}>28</td>
 </tr>
 </tbody>
 </table>
 );
};
export default Tables;