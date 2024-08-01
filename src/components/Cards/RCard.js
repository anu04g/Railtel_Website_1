// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardContent, Typography, Button, Paper, Modal, TextField } from '@mui/material';
// import './RCard.css';

// const RCard = ({ title, apiEndpoint }) => {
//     const [data, setData] = useState([]);
//     const [openModal, setOpenModal] = useState(false);
//     const [newItem, setNewItem] = useState({ title: '' });

//     const handleAddButtonClick = () => {
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setNewItem({ title: '' });
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewItem({ ...newItem, [name]: value });
//     };

//     const handleAddItem = () => {
//         const newItemWithId = { id: data.length + 1, title: newItem.title };
//         setData([...data, newItemWithId]);
//         handleCloseModal();
//     };

//     useEffect(() => {
//         fetch(apiEndpoint)
//             .then(response => response.json())
//             .then(json => setData(json));
//     }, [apiEndpoint]);

//     return (
//         <Paper elevation={3} className="card-component-container">
//             <Card style={{ maxHeight: '230px', overflowY: 'auto', borderRadius: '5px' }}>
//                 <CardHeader
//                     title={title}
//                     className="card-header"
//                     action={
//                         <Button variant="contained" className="add-button" onClick={handleAddButtonClick}>
//                             Add
//                         </Button>
//                     }
//                 />
//                 <CardContent className="card-content">
//                     <div className="card-scroll">
//                         {data.map(item => (
//                             <div key={item.id} className="card-item">
//                                 <Typography variant="body1" className="card-item-content">
//                                     <span className="card-item-title">{item.id}. </span>
//                                     {item.title}
//                                 </Typography>
//                             </div>
//                         ))}
//                     </div>
//                 </CardContent>
//             </Card>

//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 aria-labelledby="add-item-modal"
//                 aria-describedby="modal-to-add-new-item"
//             >
//                 <Paper className="modal-container">
//                     <Typography variant="h6" className="modal-title">
//                         Add New Item
//                     </Typography>
//                     <TextField
//                         label="Title"
//                         variant="outlined"
//                         name="title"
//                         value={newItem.title}
//                         onChange={handleInputChange}
//                         fullWidth
//                         className="modal-input"
//                     />
//                     <div className="modal-actions">
//                         <Button variant="contained" className="modal-button" onClick={handleAddItem} disabled={!newItem.title.trim()}>
//                             Add Item
//                         </Button>
//                         <Button variant="outlined" className="modal-button" onClick={handleCloseModal} style={margin: 15px;}>
//                             Cancel
//                         </Button>
//                     </div>
//                 </Paper>
//             </Modal>
//         </Paper>
//     );
// };

// export default RCard;

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Paper, Modal, TextField } from '@mui/material';
import './RCard.css';

const RCard = ({ title, apiEndpoint }) => {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newItem, setNewItem] = useState({ title: '' });

    const handleAddButtonClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setNewItem({ title: '' });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAddItem = () => {
        const newItemWithId = { id: data.length + 1, title: newItem.title };
        setData([...data, newItemWithId]);
        handleCloseModal();
    };

    useEffect(() => {
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                console.log('Fetched data:', json); // Log the fetched data
                setData(json.map((item, index) => ({
                    id: item.Item_part_code_id || item.Item_make_id || item.Item_model_id || item.Item_type_id || index,
                    title: item.Item_part_code || item.Item_make || item.Item_model || item.Item_type || 'N/A'
                })));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [apiEndpoint]);

    return (
        <Paper elevation={3} className="card-component-container">
            <Card
                style={{
                    maxHeight: '230px',
                    overflowY: 'auto',
                    borderRadius: '5px',
                    // backdropFilter: 'blur(10px)', // Add backdrop blur effect
                    // backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background for the blur to be visible
                    backgroundColor: 'rgba(255 , 255 ,255 )' , 
                    fontfamily: ('Martel', 'serif') ,
                    fontweight: 300 ,
                    fontstyle: 'normal'
                    // color: '#092337'
                }}
            >
                <CardHeader
                    title={title}
                    className="card-header"
                    action={
                        <Button variant="contained" className="add-button" onClick={handleAddButtonClick}>
                            Add
                        </Button>
                    }
                />
                <CardContent className="card-content">
                    <div className="card-scroll">
                        {data.length === 0 ? (
                            <Typography variant="body1">No data available</Typography>
                        ) : (
                            data.map(item => (
                                <div key={item.id} className="card-item">
                                    <Typography variant="body1" className="card-item-content">
                                        <span className="card-item-title">{item.id}. </span>
                                        {item.title}
                                    </Typography>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="add-item-modal"
                aria-describedby="modal-to-add-new-item"
            >
                <Paper className="modal-container">
                    <Typography variant="h6" className="modal-title">
                        Add New Item
                    </Typography>
                    <TextField
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={newItem.title}
                        onChange={handleInputChange}
                        fullWidth
                        className="modal-input"
                    />
                    <div className="modal-actions">
                        <Button variant="contained" className="modal-button" onClick={handleAddItem} disabled={!newItem.title.trim()}>
                            Add Item
                        </Button>
                        <Button variant="outlined" className="modal-button" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </div>
                </Paper>
            </Modal>
        </Paper>
    );
};

export default RCard;
