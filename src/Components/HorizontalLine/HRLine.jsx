import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
height: 10px;
background-color: 1px solid red;

`


const HRLine = () => {
    return (
        <div>
            <Line/>
        </div>
    )
}

export  {HRLine}
