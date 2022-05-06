import React, {Fragment, useState} from 'react';
import {ProSidebar, SidebarContent, SidebarHeader} from "react-pro-sidebar";
import style from "./Sidebar.module.css";
import {connect} from "react-redux";
import SidebarModal from "./sidebarModal/SidebarModal";


const Sidebar = ({state}) => {
    const [isShowModal, setShowModal] = useState(false);
    const showModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <ProSidebar className={style.sidebar}>
            <SidebarHeader className={style.sidebarHeader}>
                Submitted submets
            </SidebarHeader>
            <SidebarContent className={style.contentHeader}>
                {state.map((item, index) => (
                    <Fragment>
                        <li type="none" key={index}>{index + 1}. {item?.name}</li>
                    </Fragment>
                ))}
                {!isShowModal ? <button onClick={showModal} className={style.addButtonStyle}>Add new</button>
                    : ""}
                <div>
                    {isShowModal ? <SidebarModal onCloseModal={closeModal}/> : null}
                </div>
            </SidebarContent>
        </ProSidebar>
    );
};
export default connect(
    state => ({
        state: state.submittedSubmets
    }),
    dispatch => ({})
)(Sidebar);