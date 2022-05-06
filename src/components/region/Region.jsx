import React, {Fragment} from 'react';
import style from "./Region.module.css";
import {connect} from "react-redux";
import {Card, CardContent, MenuItem} from "@mui/material";


const Region = ({state}) => {
    return (
        <div className={style.container}>
            <h3>Region</h3>
            {state.map((info, index) => (
                <button  key={index} onClick={() => {
                    alert(info.name)
                }} className={style.infoBlock}>
                    <Card className={style.card} >
                        <CardContent>
                            <div className={style.info}>
                                <div className={style.ipBlock}>
                                    {info.instanceIp.map((item, index) => (
                                        <Fragment>
                                            <MenuItem type="none" key={index}> {item} </MenuItem>
                                        </Fragment>
                                    ))}
                                </div>
                                <div className={style.buttonBlock}>
                                    {info.instanceIp.map((item, index) => (
                                        <div key={index}>
                                            <button onClick={() => {
                                                alert(item)
                                            }} className={style.block}></button>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className={style.cardFooter}>
                                <h3>{info.name}</h3>
                                <span>{info.ip}</span>
                            </div>
                        </CardContent>
                    </Card>
                </button>

            ))}
        </div>
    );
};

export default connect(
    state => ({
        state: state.submittedSubmets
    }),
)(Region);