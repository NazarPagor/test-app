const initialState = [
    {name: "asdas", ip: 'asdasfsadf', instanceIp: ["sfasdf", 'asdfasd', 'asdfsadf']}
]

export const submittedSubmets = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.payload.values
            ]
        default:
            return state;
    }

}