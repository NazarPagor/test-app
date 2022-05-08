import React, {useState} from 'react';
import {Box, Button, Divider, List, TextField, Typography} from "@mui/material";
import {Formik} from "formik";
import {connect} from "react-redux";
import {schema} from "../../common/validation";
import InstanceIpForm from "./InstanceIpForm";
import styled from "@emotion/styled";

const MyModalList = styled(List)({
    border: "1px solid #000",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#E7EBF0",
    margin: 5,
})


const SideList = ({saveData, state}) => {
    const [instanceIpArray, setInstanceIpArray] = useState([]);
    const [isShowModal, setShowModal] = useState(false);

    const showModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const submitForm = (values) => {
        values["instanceIp"] = instanceIpArray;
        saveData(values);
        closeModal();
        setInstanceIpArray([]);
    }


    return (
        <Box component="div" sx={{textAlign: "center", paddingLeft: 3, paddingRight: 3}}>
            <Divider/>
            <List>
                <Typography variant="h5">Submitted submets</Typography>
                <Box margin={3}>
                    {state.map((item, index) => (
                        <li key={index}>{index + 1}.{item.name}</li>
                    ))}
                </Box>
                {!isShowModal ? <Button onClick={showModal} variant="outlined">Add Ip</Button> : null}

            </List>
            <Divider/>
            {isShowModal ?
                <MyModalList>
                    <Formik initialValues={{
                        name: '', ip: '',
                    }} onSubmit={(values) => {
                        submitForm(values);
                    }} validationSchema={schema}
                    >
                        {({
                              values, errors, touched, handleChange, handleBlur, handleSubmit,
                          }) => (
                            <Box>
                                <form onSubmit={handleSubmit}>
                                    <Button onClick={closeModal}
                                            sx={{position: 'absolute', right: "-20px", top: '-5px'}}>X</Button>
                                    <Typography variant="h6">Name</Typography>
                                    <TextField
                                        variant="standard"
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <div>{errors.name && touched.name && errors.name}</div>
                                    <Typography variant="h5">IP</Typography>
                                    <TextField
                                        variant="standard"
                                        type="ip"
                                        name="ip"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ip}
                                    />
                                    <div>{errors.ip && touched.ip && errors.ip}</div>

                                    <InstanceIpForm instanceIpArray={instanceIpArray}
                                                    setInstanceIpArray={setInstanceIpArray}/>
                                    {/* eslint-disable-next-line array-callback-return */}

                                    <Button type="submit">Submit</Button>
                                </form>
                            </Box>
                        )}
                    </Formik>
                </MyModalList> : null}
        </Box>
    );
};

export default connect(
    state => ({
        state: state.submittedSubmets
    }),
    dispatch => ({
        saveData: (values) => {
            dispatch({type: 'ADD', payload: {values}});
        }
    })
)(SideList);