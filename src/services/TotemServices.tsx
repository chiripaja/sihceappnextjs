import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.apiurl, 
    headers: {
        'Content-Type': 'application/json',
    },
});


export const buscarxdni = async (id: any) => {
    try {
        const response = await apiClient.get(`totem/dni/${id}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const findnombrepx = async (id: any) => {
    try {
        const response = await apiClient.get(`totem/findnombrepx/${id}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};


export const buscarxnombre = async (apellidopaterno: any,apellidomaterno:any,nombre:any) => {
    try {
       
        const response = await apiClient.get(`totem/nombre/${apellidopaterno}/${apellidomaterno}/${nombre}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};