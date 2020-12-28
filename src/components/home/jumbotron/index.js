import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div className="row">
                <div className="jumbotron-text float-right text-center col-md-5 offset-md-6">
                    <div className="jumbotron-header">PT arkana putra mandiri</div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            perusahan kami bergerak di jasa aplikasi web dan android <b>mission</b> dan visi kami adalah  
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}