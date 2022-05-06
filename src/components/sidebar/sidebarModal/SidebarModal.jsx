import React, {Fragment, useState} from 'react';
import style from './sidebarModal.module.css';
import * as yup from "yup";
import {Formik} from "formik";
import {connect} from "react-redux";


const schema = yup.object({
    name: yup.string().required(), ip: yup.string().required(),
})


const SidebarModal = ({onCloseModal, submitForm, state}) => {
    const [instanceIP, setInstanceIp] = useState();
    const [instanceIpArray, setInstanceIpArray] = useState([]);
    const addInstanceIp = () => {
        setInstanceIpArray([...instanceIpArray, instanceIP]);
        setInstanceIp('');
    }
    return (
        <div className={style.modalContainer}>
            <Formik initialValues={{
                name: '', ip: '', instIp: '',
            }} onSubmit={values => {
                values["instanceIp"] = instanceIpArray;
                submitForm(values)
                onCloseModal(true);
            }} validationSchema={schema}
            >
                {({
                      values, errors, touched, handleChange, handleBlur, handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} className={style.form}>
                        <h4>Name</h4>
                        <input
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={style.input}
                        />
                        <span className={style.error}>{errors.name && touched.name && errors.name}</span>
                        <h4>IP</h4>
                        <input
                            type="ip"
                            name="ip"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ip}
                            className={style.input}
                        />
                        <span className={style.error}>{errors.ip && touched.ip && errors.ip}</span>

                        <div className={style.instanceBlock}>
                            <label>Instance IP</label>
                            {instanceIpArray.map((item, index) => (
                                <Fragment>
                                    <div className={style.fragment}>
                                        <li type="none" key={index}>{index + 1}.{item}</li>
                                    </div>
                                </Fragment>
                            ))}
                            <input
                                type="instIp"
                                name="instIp"
                                onChange={event => setInstanceIp(event.target.value)}
                                onBlur={handleBlur}
                                value={instanceIP}
                                className={style.input}
                            />
                            <div>
                                <button type="button" onClick={addInstanceIp} className={style.submitBtn}>Add IP
                                </button>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className={style.submitBtn}>Submit</button>
                            <button className={style.close} onClick={onCloseModal}>X</button>
                        </div>


                    </form>
                )}
            </Formik>
        </div>
    );
};

export default connect(
    state => ({}),
    dispatch => ({
        submitForm: (values) => {
            dispatch({type: 'ADD', payload: {values}});
        }
    })
)(SidebarModal);