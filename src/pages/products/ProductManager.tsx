import { Space, Table } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryType, ProductType } from '../../types/products'

type ProductManagerProps = {
    products: ProductType[],
    
    onRemove: (_id:number) => void
}

const ProductManager =   ( { products, onRemove }: ProductManagerProps) => {

    // title 
    const headings = [
        { title: "STT", dataIndex: "stt", key: "stt"},
        { title: "Name", dataIndex: "name", key: "name"},
        { title: "Price", dataIndex: "price", key: "price"},
        { title: "Category", dataIndex: "category", key: "category"},
        {
            title: "Action",
            key:'action',
            render:  (recore:any) => (
                <Space size="middle">
                    {/* <a href='edit/:id' >Edit</a> */}
                    <NavLink to={'/admin/product/edit/'+recore.id}>Edit</NavLink>
                    {/* <button onClick={ () => onRemove(id)}>Remove</button> */}
                    <button  onClick={() => onRemove(recore.id)}>Delete</button>
                </Space>
            )
        }
    ]

    // data
    const dataSourd =  products.map((item,index) => {
        return {
            key: index+ 1,
            stt: item._id,
            name: item.name,
            price: item.price,
            category: item.category,
            id: item._id,
        }
    })


     return (
    <div>
        <button className='btnAdmin'><NavLink to="/admin/product/add">Add Product</NavLink></button>
            <h1>ProductManager</h1>
       
        <Table columns={headings} dataSource={dataSourd}></Table>
        
    </div>
  )
}

export default ProductManager