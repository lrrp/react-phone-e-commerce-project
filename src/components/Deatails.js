import React, {Component} from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Deatails extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value) => {
                    const {id, img, title, price, info, inCart, company} = value.detailProduct;
                    return(
                        <div className='container py-5'>
                            {/* start title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className='row'>
                                {/* product image */}
                                <div className='col-10 col-md-6 mx-auto my-3'>
                                    <img src={img} className='img-fluid' alt='product' />
                                </div>

                                {/* product text */}
                                <div className='col-10 col-md-6 mx-auto my-3 text-capitalize'>
                                    <h2>model : {title} </h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price : <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about product:
                                    </p>
                                    <p className='text-muted lead'>{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>go to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }} 
                                            disabled={inCart ? true : false}
                                            cart
                                            >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Deatails ;