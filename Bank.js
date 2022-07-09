//the 

import { React, useState, useEffect } from 'react'

function Bank ( {bank, setBank}) {
    return (
        <>
        <table style="width:10%">
        <tr>
        <td>Bank Amount: </td>
        <td>${bank}</td>
        </tr>
        </table>
        </>
    )

}

export default Bank;
