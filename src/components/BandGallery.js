import React from 'react'

import Andreas from "./BandQueries/Andreas"
import Bjorn from "./BandQueries/Bjorn"
import Kjell from "./BandQueries/Kjell"
import Lennie from "./BandQueries/Lennie"

const BandGallery = () => {
    return (
        <div>
            <div className="flex flex-nowrap justify-center items-center space-x-4">
                <Andreas />
                <Bjorn />
                <Kjell />
                <Lennie />
            </div>
        </div>
    )
}

export default BandGallery