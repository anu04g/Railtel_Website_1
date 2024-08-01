// import React from 'react';
// import { Grid, Paper } from '@mui/material';
// import RCard from './RCard';
// import './Parent.css';

// const ParentComponent = () => {
//     return (
//         <Grid container spacing={3} className="parent-containerup">
//             <Grid item xs={12} sm={3} md={5}>
//                 <RCard title="Item Make" apiEndpoint="http://172.27.41.72:5566/api/item_make"/>
//             </Grid>
//             <Grid item xs={12} sm={3} md={5}>
                
//                 <RCard title="Item Model" apiEndpoint="http://172.27.41.72:5566/api/item_model"/>
               
//             </Grid>
//         </Grid>
//     );
// };

// export default ParentComponent;

// Parent1.js
import React from 'react';
import { Grid } from '@mui/material';
import RCard from './RCard';
import './Parent.css';

const ParentComponent1 = () => {
    return (
        <Grid container spacing={3} className="parent-containerup">
            <Grid item xs={12} sm={3} md={5}>
                <RCard title="Item Make" apiEndpoint="http://172.27.41.72:5566/api/item_make" />
            </Grid>
            <Grid item xs={12} sm={3} md={5}>
                <RCard title="Item Model" apiEndpoint="http://172.27.41.72:5566/api/item_model" />
            </Grid>
        </Grid>
    );
};

export default ParentComponent1;

