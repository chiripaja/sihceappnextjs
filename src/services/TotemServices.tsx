import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.apiurl, // Reemplaza con la URL base de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});


export const buscarxdni = async (id: any) => {
    try {
        const response = await apiClient.get(`totem/dni/${id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const findnombrepx = async (id: any) => {
    try {
        const response = await apiClient.get(`totem/findnombrepx/${id}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};


export const buscarxnombre = async (apellidopaterno: any,apellidomaterno:any,nombre:any) => {
    try {
       
        const response = await apiClient.get(`totem/nombre/${apellidopaterno}/${apellidomaterno}/${nombre}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};