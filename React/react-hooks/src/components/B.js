import React from 'react'
import C from './C'
import D from './D'

export default function B({ firstName }) {
    return (
        <>
            <div>
                B-Component==== {firstName}
            </div>
            <div>
                <C firstName={firstName} />
                <D firstName={firstName} />
            </div>
        </>
    )
}
