import axios from "axios";
import type { Product } from "../models/Product";


const API_BASE_URL = "https://fakestoreapi.com";


export class FakeStoreService {
    static async getCategories(): Promise<string[]> {
        const response = await axios.get<string[]>(`${API_BASE_URL}/products/categories`);
        return response.data;
    }


    static async getAllProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
        return response.data;
    }


    static async getProductsByCategory(category: string): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${API_BASE_URL}/products/category/${category}`);
        return response.data;
    }
}