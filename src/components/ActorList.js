import React from 'react';

const ActorList = ({ actors }) => {
    return (
        <div>
            <div className="ui three stackable cards">
                {
                    actors.map(actor =>
                        <div className="ui card" key={actor.resim}>
                            <div className="content ali">
                                <div className="description">
                                    {actor.Ad}
                                </div>
                            </div>
                            <div className="image">
                                <img src={actor.resim} alt="test" />
                            </div>

                            <div className="visible content cardFooter">
                                <div className="description">
                                    {actor.Aciklama}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
export default ActorList;