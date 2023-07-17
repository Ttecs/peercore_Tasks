import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCustomers, getProducts } from '../apis/apicalls';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Home() {
  const [responseData, setResponseData] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Callback function for handling customer data response
  const useCallback = (response, status) => {
    console.log('useCallback', response.data);
    if (status === 'OK_GET_Customers') {
      if (response != null) {
        if (response.data.group.name === 'other') {
          console.log('other');
          getProducts(callbackAllProducts);
        } else {
          setResponseData(response.data.group.products);
          console.log('not other', response.data.group.products);
        }
      }
    }
  };

  // Callback function for handling all products response
  const callbackAllProducts = (response, status) => {
    if (status === 'OK_GET_Products') {
      console.log('Products retrieved successfully', response.data);
      setResponseData(response.data);
    }
  };

  // Function to submit customer email and retrieve customer data
  const submitCustomer = async () => {
    if (email.trim() === '') {
      console.log('Email is empty');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Email is not in the correct format');
      return;
    }
    setEmailError('');
    getCustomers(email, useCallback);
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear email error when text field is cleared
    if (emailError && e.target.value.trim() === '') {
      setEmailError('');
    }
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto mt-8 px-8 lg:px-12 flex items-center justify-center">
        <div className="border-2 w-96 h-32 border-blue-900 rounded flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold text-blue-900 mb-4">Customer Email</h1>
          <div className="flex justify-center">
            <input
              className="border-2 border-blue-900 w-72 px-4 py-2 rounded-l-md"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-r-md" onClick={submitCustomer}>
              Go
            </button>
          </div>
          {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
        </div>
      </main>

      {responseData && (
        <div className="max-w-7xl mx-auto mt-8 px-8 lg:px-12">
          <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
