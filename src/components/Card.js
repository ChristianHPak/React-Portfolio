import React from "react";
import $ from "jquery"

function Card(props) {

    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src={props.image} alt={props.name} />
                    </div>

                    <div className="card-content">
                        <span className="card-title project-name">{props.name}</span>
                        <button type="button" className="btn btn-custom pull-right show-btn" data-rel={props.id}
                            aria-label="Left Align">
                            <i className="fa fa-ellipsis-v" onClick={() => $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow')}></i>
                        </button>
                    </div>
                    <div className="card-action">
                        <a href={props.github} target="new_blank">Github</a>
                        <a href={props.deployment} target="new_blank">Deployment</a>
                    </div>
                    <div className="card-reveal close" data-rel={props.id} onClick={() => $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow')}>
                        <span className="card-title">Information</span> <button type="button" className="close"
                            data-dismiss="modal" data-rel={props.id} aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        <p>{props.information}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" key={props.id}>{props.technology}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;