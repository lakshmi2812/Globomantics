import React from 'react';
import House from './house/House';
import IHouse from './IHouse';

type IProps = {
    house: IHouse
};

const FeaturedHouse = ( {house} : IProps  ) => {
    console.log(house);
    if(house){
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">Featured House</h3>
                </div>
                <House house={house}/>
            </div>
        );
    }
    return(<div><h4>No featured house at this time</h4></div>);

};

export default FeaturedHouse;