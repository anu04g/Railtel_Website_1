// import React from 'react';
// import { Grid, Paper } from '@mui/material';
// import RCard from './RCard';
// import './Parent.css';

// const ParentComponent = () => {
//     return (
//         <Grid container spacing={3} className="parent-containerlow">
//             <Grid item xs={12} sm={3} md={5}>
//                 <RCard title="Item Part Code" apiEndpoint="http://172.27.41.72:5566/api/item_part_code"/>
//             </Grid>
//             <Grid item xs={12} sm={3} md={5}>
//                 <RCard title="Item Type" apiEndpoint="http://172.27.41.72:5566/api/item_type"/>
//             </Grid>
//         </Grid> 
//     );
// };

// export default ParentComponent;
import React from 'react';
import { Grid } from '@mui/material';
import RCard from './RCard';
import './Parent.css';

const ParentComponent2 = () => {
    return (
        <Grid container spacing={3} className="parent-containerlow">
            <Grid item xs={12} sm={3} md={5}>
                <RCard title="Item Part Code" apiEndpoint="http://172.27.41.72:5566/api/item_part_code" />
            </Grid>
            <Grid item xs={12} sm={3} md={5}>
                <RCard title="Item Type" apiEndpoint="http://172.27.41.72:5566/api/item_type" />
            </Grid>
        </Grid> 
    );
};

export default ParentComponent2;
