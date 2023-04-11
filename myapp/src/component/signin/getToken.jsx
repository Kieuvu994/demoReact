import React from 'react'

const getToken = () => {
  const token = localStorage.getItem('Token');
  return token;
}

const getEmlID = () => {
  const emlID = localStorage.getItem('sectionID');
  return emlID;
}

export { getToken, getEmlID };