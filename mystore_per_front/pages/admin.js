import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { getGroups, getProducts, postCustomer, postGroups, postProduct } from '../apis/apicalls';
import Select from 'react-select';
export default function Admin() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProducts2, setSelectedProducts2] = useState([]);
  const [group, setGroup] = useState('');
  const [groups, setGroups] = useState([]);
  const [custName, setCustName] = useState('');
  const[email,setEmail] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupChange = (selectedOption) => {
    setSelectedGroup(selectedOption.value);
  };

 const  handleCustNameChange = (e) => {
    setCustName(e.target.value);
  };

  const  handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlegroupChange = (e) => {
    setGroup(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

const useCallbackProduct = (response, status) => {
    if (status === 'OK_POST_Product') {
      alert('Product added successfully');
      
    }
    else{
      console.log('Product added failed');
    }
  };

  const useCallbackallProduct = (response, status) => {
    if (status === 'OK_GET_Products') {
      setProducts(response.data);
    }
  };

  const useCallbackallGroup = (response, status) => {
    if (status === 'OK_GET_Groups') {
      setGroups(response.data);
    }
  };
  const useCallbackGroup = (response, status) => {
    if (status === 'OK_POST_Group') {
      alert('Group added successfully');
      console.log('Group added successfully');
    }
    else{
      console.log('Group added failed');
    }
  };

  const useCallbackCustomer = (response, status) => {
    if (status === 'OK_POST_Customer') {
      alert('Customer added successfully');
      console.log('Customer added successfully');
    }
    else{
      console.log('Customer added failed');
    }
  };


  const handleAddCategory = () => {
    let product ={
     
      name: name,
      price: price
  }
  if(name.trim() === '' || price.trim() === '') {
    
   alert('Name or Price is empty');
    return;
  }else{
    postProduct(product, useCallbackProduct);
  }
    
    setName('');
    setPrice('');
  };

  
  useEffect(() => {
    getProducts(useCallbackallProduct);
    getGroups(useCallbackallGroup);
  }, []);

  const handleProductSelection = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
   
      const selectedProductIds = selectedOptions.map((option) => ({ id: option.value }));
      setSelectedProducts2(selectedProductIds);
    
  };

  const handleAddCategorypost = () => {
    let groupData ={
        name: group,
        products: selectedProducts2
      }
      
    if(group.trim() === '' ) {
      // Handle empty name or price case
      alert('Name or Price is empty');
      return;
    }else{
      postGroups(groupData, useCallbackGroup);
    }
    // Reset the input fields after adding category
    setGroup('');
    setSelectedProducts([]);
    
  };

  
 const handleAddCustomer = () => {
    let customer ={
        name: custName,
        email: email,
        group: {
          id: selectedGroup
        }
      }

    if(custName.trim() === '' || email.trim() === '' ) {
      // Handle empty name or price case
      alert('Name or Price is empty');
      return;
    }else{
      postCustomer(customer, useCallbackCustomer);
    }
    setCustName('');
    setEmail('');
    setSelectedGroup('');
  }

  

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="w-full h-56 border-2 border-blue-900 mt-4 rounded-sm">
          <h1 className="text-center mt-3">Products</h1>

          <div className="flex justify-center mt-4">
            <input
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-l-md"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-r-md"
              type="text"
              placeholder="Price"
              value={price}
              onChange={handlePriceChange}
            />
            <button
              className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md ml-2"
              onClick={handleAddCategory}
            >
              Add
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {/* create a drop down fro the array data in products */}
            <select
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-md"
              name="products"
              id="products"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          
           
            <button
              className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md ml-2"
              onClick={handleAddCategory}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="w-full h-56 border-2 border-blue-900 mt-4 rounded-sm">
          <h1 className="text-center mt-3">Catogory</h1>

          <div className="flex justify-center mt-4">
            <input
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-l-md"
              type="text"
              placeholder="Catogory Name"
              value={group}
              onChange={handlegroupChange}
             
            />
              <Select
              options={products.map((product) => ({
                value: product.id,
                label: product.name,
              }))}
              isMulti
              value={selectedProducts}
              onChange={handleProductSelection}
              placeholder="Select Products"
            />
            <button
              className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md ml-2"
              onClick={handleAddCategorypost}
             
            >
              Add
            </button>
          </div>

        </div>
        <div className="w-full h-56 border-2 border-blue-900 mt-4 rounded-sm mb-10">
          <h1 className="text-center mt-3">Customer</h1>

          <div className="flex justify-center mt-4">
            <input
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-l-md"
              type="text"
              placeholder="CustName"
              value={custName}
              onChange={handleCustNameChange}
            
            />
            <input
              className="border-2 border-blue-900 w-40 px-4 py-2 rounded-r-md"
              type="text"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              
            />
               <Select
              options={groups.map((group) => ({
                value: group.id,
                label: group.name
              }))}
              value={selectedGroup.label}
              onChange={handleGroupChange}
              placeholder="Select Group"
            />
            <button
              className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md ml-2"
              onClick={handleAddCustomer}
            >
              Add
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}




