import React from 'react'
import B from './B'

export default function A({ firstName }) {
    return (
        <>
            <div>
                A-Component==={firstName}
            </div>
            <div>
                <B firstName={firstName} />
            </div>
        </>
    )
}
