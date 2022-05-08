const initialState = [
    {name: "submet1", ip: '123.123.4.124', instanceIp: ["1234.123.2.4324", '233.4.34.2.234.2', '234234.2.4.24.']}
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