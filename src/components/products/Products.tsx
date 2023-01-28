import React, { useEffect } from 'react'
import { useGetProductsQuery } from '../../features/apiSlice'
import {
  addCartProduct,
  getCartCount,
  getSubTotal,
  calculateTax,
  getTotalAmount,
} from '../../features/useCartSlice'
import { useDispatch } from 'react-redux'
interface IProduct {
  id: string,
  title: string,
  price: string,
  image: string,
  description: string
}
interface IError {
  status: string
}
function Products() {
  const dispatch = useDispatch()

  let productObj: IProduct = {
    id: '',
    title: '',
    price: '',
    image: '',
    description: '',
  }

  const addToCart = (item: IProduct) => {
    productObj = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
    }
    dispatch(addCartProduct(productObj))
    dispatch(getCartCount({}))
    dispatch(getSubTotal({}))
    dispatch(calculateTax({}))
    dispatch(getTotalAmount({}))
  }

  const {
    data: products,
    isLoading: isProductLoading,
    isSuccess: isProductSuccess,
    isError: isProductError,
    error: productError,
  } = useGetProductsQuery({ refetchOnMountOrArgChange: true })

  useEffect(() => {}, [dispatch])

  let getData

  if (isProductLoading) {
    getData = (
      <div className="d-flex justify-content-center w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isProductSuccess) {
    getData = products.map((item: IProduct) => {
      return (
        <div className="col" key={item.id}>
          <div className="card h-100 product-card">
            <div className="img-grid mb-3">
              <img src={item.image} className="card-img-top" alt={item.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">${item.price}</h5>
              <p className="card-text">
                {item.description.substring(0, 50)}...
              </p>
              <button className="btn btn-outline-danger me-2">Buy now</button>
              <button
                onClick={() => {
                  addToCart(item)
                }}
                className="btn btn-outline-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )
    })
  } else if (isProductError) {
    getData = (
      <div className="alert alert-danger w-100 text-center" role="alert">
        {'status' in productError ? productError.status : ''} {JSON.stringify(productError)}
      </div>
    )
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
        {getData}
      </div>
    </div>
  )
}

export default Products
