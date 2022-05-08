import React from 'react';
import {connect} from "react-redux";
import {Box, Button, Divider, Typography} from "@mui/material";
import style from "./ChildButton.module.css"

const Region = ({state}) => {

    return (
        <Box sx={{margin: 2}}>
            <Typography variant="h5">Region</Typography>
            <Box display={"flex"} flexWrap={"wrap"}>
                {state.map((item, index) => (
                        <Button variant={"outlined"} sx={{
                            backgroundColor: "white",
                            minWidth: "300px",
                            display: "flex",
                            flexDirection: "column",
                            margin: 3,
                            paddingTop: 5
                        }}
                                onClick={() => {
                                    alert(`Clicked on ${item.name}`)
                                }}
                        >
                            <>
                                <Box marginBottom={2} display="flex" justifyContent={"space-between"}>
                                    <Box display="flex" flexDirection={"column"}>
                                        {item.instanceIp.map((instanceIp, index) => (
                                            <React.Fragment>
                                                <Box key={index}>{instanceIp}</Box>
                                            </React.Fragment>
                                        ))}
                                    </Box>
                                    <div style={{minHeight: "100%", marginTop: -10}}>
                                        {item.instanceIp.map((instanceIp, index) => (
                                            <div key={index} onClick={(e) => {
                                                alert(`Clicked on ${instanceIp}`)
                                                e.stopPropagation();
                                            }} className={style.block}></div>
                                        ))}
                                    </div>
                                </Box>
                                <Divider width={200}/>
                                <Box key={index}>
                                    <Typography variant="subtitle2" fontSize={12} fontWeight={600}
                                                color="black">{item.name}</Typography>
                                    <Typography variant="subtitle1" fontSize={13} color="black">{item.ip}</Typography>
                                </Box>
                            </>
                        </Button>

                    )
                )}
            </Box>
        </Box>
    );
};

export default connect(
    state => ({
        state: state.submittedSubmets
    }),
)(Region);