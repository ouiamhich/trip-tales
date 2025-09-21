import axiosInstance from './axiosInstance';
import type {AxiosResponse} from 'axios';
import {isAxiosError} from 'axios';

export const configDefault = () => ({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export const configText = () => ({
    headers: {
        'Content-Type': 'text/plain', 
        'Access-Control-Allow-Origin': '*',
    },
});


export const getApiCall = async (url: string, config: unknown) => {
    return getApiResponse(axiosInstance.get(url, (config as never)));
};

export const postApiCall = async (url: string, data: unknown, config: unknown) => {
    return getApiResponse(axiosInstance.post(url, data, (config as never)));
};

export const putApiCall = async (url: string, data: unknown, config: unknown) => {
    return getApiResponse(axiosInstance.put(url, data, (config as never)));
};

export const patchApiCall = async (url: string, data: unknown, config: unknown) => {
    return getApiResponse(axiosInstance.patch(url, data, (config as never)));
};

export const deleteApiCall = async (url: string, config: unknown) => {
    return getApiResponse(axiosInstance.delete(url, (config as never)));
};

export const getApiResponse = async <T>(request: Promise<AxiosResponse<T>>) => {
    try {
        const res = await request;
        return {
            data: res.data,
            status: res.status,
            error: null,
            errorMsg: null,
        };
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            
            return {
                data: null,
                status: error.response?.status ?? 500,
                error,
                errorMsg: error.response?.data?.message ?? error.response?.data?.error ?? 'Unknown error',
            };
        }

        return {
            data: null,
            status: 500,
            error,
            errorMsg: 'Unexpected error',
        };
    }
};
